import { defineStore } from 'pinia';

export interface IMenuItem {
    label: string
    name?: string
    external?: boolean
    url?: string
}

export interface IHomeStore {
    menuItems: IMenuItem[]
}

export const useHomeStore = defineStore('HomeStore', {
    state: (): IHomeStore => ({
        menuItems: []
    }),

    getters: {
        computedMenuItems: state => state.menuItems
    },

    actions: {
        async getMenuItems(): Promise<void> {
            return new Promise(resolve => {
                this.menuItems = [
                    {
                        label: 'Классы',
                        name: 'classes',
                    }, {
                        label: 'Расы',
                        name: 'races',
                    }, {
                        label: 'Черты',
                        name: 'traits',
                    }, {
                        label: 'Особенности классов',
                        name: 'options',
                    }, {
                        label: 'Предыстории',
                        name: 'backgrounds',
                    }, {
                        label: 'Заклинания',
                        name: 'spells',
                    }, {
                        label: 'Оружие',
                        name: 'weapons',
                    }, {
                        label: 'Доспехи',
                        name: 'armors',
                    }, {
                        label: 'Снаряжение',
                        name: 'items',
                    }, {
                        label: 'Бестиарий',
                        name: 'creatures',
                    }, {
                        label: 'Магические предметы',
                        name: 'magic-items',
                    }, {
                        label: 'Ширма',
                        name: 'screens',
                    },
                ]

                resolve();
            })
        }
    }
})
