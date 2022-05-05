import { defineStore } from 'pinia';
import HTTPService from '@/utils/HTTPService';

const http = new HTTPService();

// eslint-disable-next-line import/prefer-default-export
export const useSpellsStore = defineStore('SpellsStore', {
    state: () => ({
        spells: [],
        selectedSpell: undefined
    }),

    getters: {
        computedSpells: state => state.spells,
        currentSpell: state => state.selectedSpell
    },

    actions: {
        async getSpellList() {
            try {
                const apiOptions = {
                    page: 1,
                    limit: 30,
                    search: {
                        exact: false,
                        value: ''
                    },
                    order: [{
                        field: 'level',
                        direction: 'asc'
                    }, {
                        field: 'name',
                        direction: 'asc'
                    }]
                };
                const resp = await http.post('/spells', apiOptions);

                this.spells = resp.data;
            } catch (err) {
                console.error(err)
            }
        }
    }
})
