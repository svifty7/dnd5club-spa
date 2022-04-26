import { defineStore } from 'pinia';
import { NCharacterClass } from '@/types/ClassJson.d';
import HTTPService from '@/utils/HTTPService';

interface IState {
    classes: NCharacterClass.IClass[]
    selectedClass: NCharacterClass.IClass | undefined,
    selectedArchetype: NCharacterClass.IArchetype | undefined
}

const http = new HTTPService();

// eslint-disable-next-line import/prefer-default-export
export const useClassesStore = defineStore('ClassesStore', {
    state: (): IState => ({
        classes: [],
        selectedClass: undefined,
        selectedArchetype: undefined,
    }),

    getters: {
        getClasses: state => state.classes,
        getCurrentClass: state => state.selectedClass,
        getCurrentArchetype: state => state.selectedArchetype
    },

    actions: {
        async initClassList(): Promise<void> {
            try {
                const res = await http.get('/classes');

                if (res.status !== 200) {
                    console.error(res.statusText);

                    return;
                }

                const result = [];
                const sort = (list: NCharacterClass.IArchetype[]) => {
                    const types = [...new Set(list.map(arch => arch.type))];
                    const formatted: any = [];

                    let index = 0;

                    for (let i = 0; i < types.length; i++) {
                        if (i === 0 || i % 2 === 0) {
                            formatted.push([]);

                            index++;
                        }

                        formatted[index - 1].push({
                            name: types[i],
                            list: list.filter(arch => arch.type === types[i])
                        });
                    }

                    return formatted
                }

                for (let i = 0; i < res.data.length; i++) {
                    result.push({
                        ...res.data[i],
                        archetypes: sort(res.data[i].archetypes),
                    })
                }

                this.classes = result;
            } catch (err) {
                console.error(err);
            }
        },

        async setClassInfo(className: string, archName?: string): Promise<void> {
            try {
                let url = `/classes/${ className}`;

                if (archName) {
                    url += `/${ archName}`;
                }

                const res = await http.get(url);

                if (res.status !== 200) {
                    console.error(res.statusText);

                    return;
                }

                this.selectedClass = res.data;
            } catch (err) {
                console.error(err);
            }
        },
    }
});
