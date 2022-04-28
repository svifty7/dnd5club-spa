import { defineStore } from 'pinia';
import HTTPService from '@/utils/HTTPService';
import _ from 'lodash';
import NCharacterRace from '@/types/RaceJson';

interface IState {
    races: NCharacterRace.IRace[]
    selectedRace: NCharacterRace.IRace | undefined
}

const http = new HTTPService();

// eslint-disable-next-line import/prefer-default-export
export const useRacesStore = defineStore('RacesStore', {
    state: (): IState => ({
        races: [],
        selectedRace: undefined
    }),

    getters: {
        getRaces: state => state.races,
        getCurrentRace: state => state.selectedRace
    },

    actions: {
        async initRaceList(): Promise<void> {
            try {
                const res = await http.get('/races');

                if (res.status !== 200) {
                    console.error(res.statusText);

                    return;
                }

                const result = [];
                const sort = (list: NCharacterRace.ISubRace[]) => {
                    const types = list.map(subrace => subrace.type);
                    const typesSorted = _.uniqWith(_.sortBy(types, ['order']), _.isEqual);
                    const formatted: any = [];

                    let index = 0;

                    for (let i = 0; i < typesSorted.length; i++) {
                        if (i === 0 || i % 2 === 0) {
                            formatted.push([]);

                            index++;
                        }

                        formatted[index - 1].push({
                            name: typesSorted[i].name,
                            list: list.filter(subrace => subrace.type.name === typesSorted[i].name)
                        });
                    }

                    return formatted
                }

                for (let i = 0; i < res.data.length; i++) {
                    if ('subraces' in res.data[i]) {
                        result.push({
                            ...res.data[i],
                            subraces: sort(res.data[i].subraces),
                        });

                        continue;
                    }

                    result.push({ ...res.data[i] })
                }

                this.races = result
            } catch (err) {
                console.error(err);
            }
        },

        async setRaceInfo(raceName: string, subrace?: string): Promise<void> {
            try {
                let url = `/races/${ raceName }`;

                if (subrace) {
                    url += `/${ subrace }`;
                }

                const res = await http.get(url);

                if (res.status !== 200) {
                    console.error(res.statusText);

                    return;
                }

                this.selectedRace = {
                    ...res.data,
                    tabs: _.sortBy(res.data.tabs, ['order'])
                        .map((tab, index) => ({
                            ...tab,
                            active: index === 0
                        }))
                };
            } catch (err) {
                console.error(err);
            }
        },

        deselectRace() {
            this.selectedRace = undefined;
        }
    }
});
