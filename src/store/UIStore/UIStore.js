import { UI } from '@/common/const/UI';
import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useUIStore = defineStore('UIStore', {
    state: () => ({
        theme: '',
        menu: {
            show: false,
            minified: false,
            submenu: '',
            leftItems: [
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
                    label: 'Ширма',
                    name: 'screens',
                }, {
                    label: 'База знаний',
                    name: 'wiki',
                    children: [{
                        label: 'Боги',
                        name: 'gods',
                    }, {
                        label: 'Правила и термины',
                        name: 'rules'
                    }, {
                        label: 'Источники',
                        name: 'books'
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
                        label: 'Наш Telegram Bot',
                        url: 'https://t.me/dnd5club_bot',
                        external: true
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
            ]
        },
        content: {
            fullscreen: false,
        }
    }),

    getters: {
        getTheme: state => state.theme,
        getMenuConfig: state => state.menu,
        getContentConfig: state => state.content,
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

        closeMenu() {
            this.menu.show = false;
        },

        toggleMenuShowing() {
            this.$patch({
                menu: {
                    ...this.menu,
                    show: !this.menu.show
                }
            });
        },

        toggleMenuSize(payload = undefined) {
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

            this.menu.submenu = payload;
        },

        setFullscreenState(state) {
            this.menu.fullscreen = state;
        }
    }
});
