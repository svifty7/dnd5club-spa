import { defineStore } from 'pinia';
import { AxiosResponse } from 'axios';
import HTTPService from '@/utils/HTTPService';
import NSpell from '@/types/SpellJson';

export interface ISpellsStore {
    spells: NSpell.ISpell[]
    selectedSpell: NSpell.ISpell | undefined
}

const http = new HTTPService();

export const useSpellsStore = defineStore('SpellsStore', {
    state: (): ISpellsStore => ({
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
                const apiOptions: NSpell.IRequest = {
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
                const resp: AxiosResponse = await http.post('/spells', apiOptions);

                this.spells = resp.data;
            } catch (err) {
                console.error(err)
            }
        }
    }
})
