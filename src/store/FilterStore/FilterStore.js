import HTTPService from '@/utils/HTTPService';
import { defineStore } from 'pinia';
import localforage from 'localforage';
import _ from 'lodash';
import { DB_NAME } from '@/common/const/UI';

const http = new HTTPService();

// eslint-disable-next-line import/prefer-default-export
export const useFilterStore = defineStore('FilterStore', {
    state: () => ({
        filter: undefined,
        storeKey: undefined,
        store: localforage.createInstance({
            name: DB_NAME,
            storeName: 'filter',
        })
    }),

    getters: {
        getFilter: state => state.filter,
        isFilterCustomized: state => {
            let status = false;

            const isValueCustomized = value => value.default !== value.value

            const isValuesCustomized = values => {
                let customized = false;

                for (let i = 0; i < values.length && !customized; i++) {
                    customized = isValueCustomized(values[i]);
                }

                return customized;
            }

            const isBlockCustomized = block => {
                if ('value' in block) {
                    return isValueCustomized(block.value);
                }

                return isValuesCustomized(block.values);
            }

            if (Array.isArray(state.filter)) {
                for (let i = 0; i < state.filter.length && !status; i++) {
                    status = isBlockCustomized(state.filter[i]);
                }
            }

            const values = Object.values(state.filter);

            for (let i = 0; i < values.length && !status; i++) {
                const blocks = values[i];

                for (let j = 0; j < blocks.length && !status; j++) {
                    status = isBlockCustomized(blocks[j])
                }
            }

            return status;
        }
    },

    actions: {
        async initFilter(storeKey) {
            try {
                if (!storeKey) {
                    console.error('Argument section is undefined');

                    return;
                }

                this.storeKey = storeKey;

                const resp = await http.post(`/filters/${ this.storeKey }`);

                if (!resp.data || resp.status !== 200) {
                    return;
                }

                const restored = await this.getRestoredFilter(resp.data);

                if (!restored) {
                    return;
                }

                this.filter = restored;

                await this.store.setItem(this.storeKey, restored);
            } catch (err) {
                console.error(err);
            }
        },

        async getRestoredFilter(filter) {
            let restoredFilter;
            let filterKey;

            await this.store.ready();

            const copy = _.cloneDeep(filter);
            const saved = await this.store.getItem(this.storeKey);

            const copyIsNewType = (Array.isArray(copy) && !Array.isArray(saved))
                || (!Array.isArray(copy) && Array.isArray(saved));

            const getRestoredValue = (value, key) => {
                if (!saved || copyIsNewType) {
                    return value.default;
                }

                let savedBlock;

                if (!filterKey) {
                    savedBlock = saved.find(block => block.key === key)
                }

                if (filterKey) {
                    savedBlock = saved[filterKey].find(block => block.key === key);
                }

                if (!savedBlock) {
                    return value.default;
                }

                if ('value' in savedBlock) {
                    return savedBlock.value
                }

                const savedValue = savedBlock.values
                    ?.find(val => val.key === value.key);

                if (!savedValue) {
                    return value.default;
                }

                return savedValue.value;
            }

            const getRestoredValues = (values, key) => {
                const restored = [];

                for (let i = 0; i < values.length; i++) {
                    restored.push({
                        ...values[i],
                        value: getRestoredValue(values[i], key)
                    })
                }

                return restored;
            }

            const getRestoredBlock = block => {
                if ('value' in block) {
                    return {
                        ...block,
                        value: getRestoredValue(block.value, block.key)
                    }
                }

                return {
                    ...block,
                    values: getRestoredValues(block.values, block.key)
                }
            }

            if (Array.isArray(copy)) {
                restoredFilter = [];

                for (let i = 0; i < copy.length; i++) {
                    restoredFilter.push(getRestoredBlock(copy[i]))
                }

                return restoredFilter
            }

            restoredFilter = {};

            const entries = Object.entries(copy);

            for (let i = 0; i < entries.length; i++) {
                const [key, blocks] = entries[i];

                filterKey = key;
                restoredFilter[key] = [];

                for (let j = 0; j < blocks.length; j++) {
                    restoredFilter[key].push(getRestoredBlock(blocks[j]));
                }
            }

            return restoredFilter
        },

        async resetFilter() {
            await this.store.ready();

            const copy = _.cloneDeep(this.filter);

            let initialFilter;

            const getWithDefaults = val => {
                if ('value' in val) {
                    return {
                        ...val,
                        value: val.default
                    };
                }

                const values = [];

                for (let i = 0; i < val.values.length; i++) {
                    values.push(getWithDefaults(val.values[i]))
                }

                return {
                    ...val,
                    values
                };
            }

            if (Array.isArray(copy)) {
                initialFilter = [];

                for (let i = 0; i < copy.length; i++) {
                    initialFilter.push(getWithDefaults(copy[i]));
                }

                await this.saveFilter(initialFilter);

                return initialFilter;
            }

            initialFilter = {};

            const keys = Object.keys(copy);

            for (let i = 0; i < keys.length; i++) {
                initialFilter[keys[i]] = [];

                for (let j = 0; j < copy[keys[i]].length; j++) {
                    initialFilter[keys[i]].push(getWithDefaults(copy[keys[i]][j]))
                }
            }

            await this.saveFilter(initialFilter);

            return initialFilter
        },

        async saveFilter(filter) {
            await this.store.ready();

            const clone = _.cloneDeep(filter);

            this.filter = clone;

            await this.store.setItem(this.storeKey, clone);
        },

        getQueryParams() {
            const params = {};

            const setBlockToParams = block => {
                for (const group of block) {
                    if (group.value) {
                        params[group.key] = group.value;

                        continue;
                    }

                    params[group.key] = group.values
                        .filter(val => val.value)
                        .map(val => val.key);
                }
            }

            if (Array.isArray(this.filter)) {
                for (const block of this.filter) {
                    setBlockToParams(block);
                }
            }

            for (const [key, block] of Object.entries(this.filter)) {
                if (key === 'sources') {
                    params.book = [];

                    for (const group of block) {
                        for (const book of group.values) {
                            if (book.value) {
                                params.book.push(book.key);
                            }
                        }
                    }

                    continue;
                }

                setBlockToParams(block);
            }

            return params;
        }
    }
})
