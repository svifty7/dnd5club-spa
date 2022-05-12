import HTTPService from '@/utils/HTTPService';
import { defineStore } from 'pinia';

const http = new HTTPService();

// eslint-disable-next-line import/prefer-default-export
export const useFilterStore = defineStore('FilterStore', {
    state: () => ({
        filters: {},
    }),

    getters: {
        getFilters: state => state.filters,
    },

    actions: {
        async initFilters() {
            try {
                const resp = await http.post('/filters');

                this.filters = resp.data
            } catch (err) {
                console.error(err);
            }
        },
    }
})
