import { defineStore } from 'pinia';
import HTTPService from '@/utils/HTTPService';
import _ from 'lodash';

const http = new HTTPService();

// eslint-disable-next-line import/prefer-default-export
export const useClassesStore = defineStore('ClassesStore', {
    state: () => ({
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
        async initClassList() {
            try {
                const res = await http.get('/classes');

                if (res.status !== 200) {
                    console.error(res.statusText);

                    return;
                }

                const result = [];
                const sort = list => {
                    const types = list.map(arch => arch.type);
                    const typesSorted = _.uniqWith(_.sortBy(types, ['order']), _.isEqual);
                    const formatted = [];

                    let index = 0;

                    for (let i = 0; i < typesSorted.length; i++) {
                        if (i === 0 || i % 2 === 0) {
                            formatted.push([]);

                            index++;
                        }

                        formatted[index - 1].push({
                            name: typesSorted[i].name,
                            list: list.filter(arch => arch.type.name === typesSorted[i].name)
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

        async setClassInfo(className, archName) {
            try {
                let url = `/classes/${ className }`;

                if (archName) {
                    url += `/${ archName }`;
                }

                const res = await http.get(url);

                if (res.status !== 200) {
                    console.error(res.statusText);

                    return;
                }

                this.selectedClass = {
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

        deselectClass() {
            this.selectedClass = undefined;
        }
    }
});
