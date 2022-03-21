import { UI } from '@/common/const/UI';
import { defineStore } from 'pinia';

export interface ILeftMenuItem {
    label: string
    name?: string
    url?: string
    external?: boolean
    children?: ILeftMenuItem[]
}

export interface IMenu {
    show: boolean
    minified: boolean
    submenu: string
    leftItems: ILeftMenuItem[]
}

export interface IUIStore {
    theme: string
    menu: IMenu
}

// eslint-disable-next-line import/prefer-default-export
export const useUIStore = defineStore('UIStore', {
    state: (): IUIStore => ({
        theme: '',
        menu: {
            show: false,
            minified: false,
            submenu: '',
            leftItems: []
        }
    }),

    getters: {
        getTheme: state => state.theme,
        getMenuConfig: state => state.menu,
    },

    actions: {
        setTheme(payload = '') {
            const storageTheme = localStorage.getItem(UI.Theme.storageKey) || 'dark';
            const themeName = payload || storageTheme;

            this.theme = themeName;

            localStorage.setItem(UI.Theme.storageKey, themeName);

            const html = document.querySelector('html');

            if (!html) {
                return;
            }

            html.dataset.theme = `theme-${ themeName }`;
        },

        toggleMenuShowing() {
            this.menu.show = !this.menu.show;
        },

        toggleMenuSize(payload: boolean | undefined = undefined) {
            this.toggleSubmenu();

            if (payload === undefined) {
                this.menu.minified = !this.menu.minified;

                return;
            }

            this.menu.minified = payload;
        },

        toggleSubmenu(payload = '') {
            if (this.menu.submenu === payload) {
                this.menu.submenu = '';

                return;
            }

            this.menu.submenu = payload
        },

        async getLeftMenuItems(): Promise<void> {
            return new Promise(resolve => {
                this.menu.leftItems = [
                    {
                        label: 'Персонаж',
                        name: 'character',
                        children: [{
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
                        }]
                    }, {
                        label: 'Заклинания',
                        name: 'spells',
                    }, {
                        label: 'Инвентарь',
                        name: 'inventory',
                        children: [{
                            label: 'Оружие',
                            name: 'weapons',
                        }, {
                            label: 'Доспехи',
                            name: 'armors',
                        }, {
                            label: 'Снаряжение',
                            name: 'items',
                        }]
                    }, {
                        label: 'Бестиарий',
                        name: 'creatures',
                    }, {
                        label: 'Сокровища',
                        name: 'treasure',
                        children: [{
                            label: 'Драгоценности',
                            name: 'treasures',
                        }, {
                            label: 'Магические предметы',
                            name: 'magic-items',
                        }]
                    }, {
                        label: 'Боги',
                        name: 'gods',
                    }, {
                        label: 'Мастерская',
                        name: 'workshop',
                        children: [{
                            label: 'Ширма',
                            name: 'screens',
                        }, {
                            label: 'Состояния и болезни',
                            name: 'conditions',
                        }, {
                            label: 'Правила и термины',
                            name: 'rules',
                        }]
                    }, {
                        label: 'Инструменты',
                        name: 'tools',
                        children: [{
                            label: 'Торговец',
                            name: 'trader',
                        }, {
                            label: 'Случайные столкновения',
                            name: 'encounters',
                        }, {
                            label: 'Сокровищница',
                            name: 'treasury',
                        }, {
                            label: 'Таверна (в разработке)',
                            name: 'tavern',
                        }, {
                            label: 'Дикая магия',
                            name: 'wild-magic',
                        }, {
                            label: 'Безумие',
                            name: 'madness',
                        }, {
                            label: 'Источники',
                            name: 'books',
                        }]
                    }, {
                        label: 'Информация',
                        name: 'information',
                        external: true,
                        children: [{
                            label: 'Наш Discord',
                            url: 'https://discord.gg/zqBnMJVf3z',
                            external: true,
                        }, {
                            label: 'Мы на Patreon',
                            url: 'https://www.patreon.com/dnd5club',
                            external: true,
                        }, {
                            label: 'Мастер на Boosty',
                            url: 'https://boosty.to/dnd5eclub',
                            external: true,
                        }, {
                            label: 'Старый сайт',
                            url: 'https://old.dnd5.club/',
                            external: true,
                        }]
                    }
                ];

                resolve();
            })
        }
    }
});
