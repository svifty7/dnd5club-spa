import { UI } from '@/common/const/UI';
import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useUIStore = defineStore('UIStore', {
    state: () => ({
        theme: '',
        menu: {
            show: false,
            minified: false,
            submenu: ''
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
        }
    }
});
