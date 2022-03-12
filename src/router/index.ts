import {
    createRouter,
    createWebHistory,
    RouteComponent,
    RouteRecordRaw
} from 'vue-router';

export interface IRoute {
    label: string
    name?: string
    path?: string
    leftMenu?: boolean
    homePage?: boolean
    component?: RouteComponent
    children?: IRoute[]
}

export const ROUTES: IRoute[] = [
    {
        label: 'Главная',
        name: 'home',
        path: '/',
        component: () => import('@/views/HomeView.vue'),
    }, {
        label: 'Персонаж',
        name: 'character',
        leftMenu: true,
        component: () => import('@/views/HomeView.vue'),
        children: [{
            label: 'Классы',
            name: 'classes',
            path: '/classes',
            leftMenu: true,
            homePage: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Расы',
            name: 'races',
            path: '/races',
            leftMenu: true,
            homePage: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Черты',
            name: 'traits',
            path: '/traits',
            leftMenu: true,
            homePage: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Особенности классов',
            name: 'options',
            path: '/options',
            leftMenu: true,
            homePage: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Предыстории',
            name: 'backgrounds',
            path: '/backgrounds',
            leftMenu: true,
            homePage: true,
            component: () => import('@/views/HomeView.vue'),
        }]
    }, {
        label: 'Заклинания',
        name: 'spells',
        path: '/spells',
        leftMenu: true,
        homePage: true,
        component: () => import('@/views/HomeView.vue'),
    }, {
        label: 'Инвентарь',
        name: 'inventory',
        leftMenu: true,
        component: () => import('@/views/HomeView.vue'),
        children: [{
            label: 'Оружие',
            name: 'weapons',
            path: '/weapons',
            leftMenu: true,
            homePage: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Доспехи',
            name: 'armors',
            path: '/armors',
            leftMenu: true,
            homePage: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Снаряжение',
            name: 'items',
            path: '/items',
            leftMenu: true,
            homePage: true,
            component: () => import('@/views/HomeView.vue'),
        }]
    }, {
        label: 'Бестиарий',
        name: 'creatures',
        path: '/creatures',
        leftMenu: true,
        homePage: true,
        component: () => import('@/views/HomeView.vue'),
    }, {
        label: 'Сокровища',
        name: 'treasures',
        leftMenu: true,
        component: () => import('@/views/HomeView.vue'),
        children: [{
            label: 'Драгоценности',
            name: 'treasures',
            path: '/treasures',
            leftMenu: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Магические предметы',
            name: 'items/magic',
            path: '/items/magic',
            leftMenu: true,
            homePage: true,
            component: () => import('@/views/HomeView.vue'),
        }]
    }, {
        label: 'Боги',
        name: 'gods',
        path: '/gods',
        leftMenu: true,
        component: () => import('@/views/HomeView.vue'),
    }, {
        label: 'Мастерская',
        name: 'workshop',
        leftMenu: true,
        component: () => import('@/views/HomeView.vue'),
        children: [{
            label: 'Ширма',
            name: 'screens',
            path: '/screens',
            leftMenu: true,
            homePage: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Состояния и болезни',
            name: 'conditions',
            path: '/conditions',
            leftMenu: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Правила и термины',
            name: 'rules',
            path: '/rules',
            leftMenu: true,
            component: () => import('@/views/HomeView.vue'),
        }]
    }, {
        label: 'Инструменты',
        name: 'tools',
        leftMenu: true,
        component: () => import('@/views/HomeView.vue'),
        children: [{
            label: 'Торговец',
            name: 'trader',
            path: '/trader',
            leftMenu: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Случайные столкновения',
            name: 'encounters',
            path: '/encounters',
            leftMenu: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Сокровищница',
            name: 'treasury',
            path: '/treasury',
            leftMenu: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Таверна (в разработке)',
            name: 'tavern',
            path: '/tavern',
            leftMenu: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Дикая магия',
            name: 'wildmagic',
            path: '/wildmagic',
            leftMenu: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Безумие',
            name: 'madness',
            path: '/madness',
            leftMenu: true,
            component: () => import('@/views/HomeView.vue'),
        }, {
            label: 'Источники',
            name: 'books',
            path: '/books',
            leftMenu: true,
            component: () => import('@/views/HomeView.vue'),
        }]
    }, {
        label: 'Информация',
        name: 'information',
        leftMenu: true,
        children: [{
            label: 'Наш Discord',
            path: 'https://discord.gg/zqBnMJVf3z',
            leftMenu: true,
        }, {
            label: 'Мы на Patreon',
            path: 'https://www.patreon.com/dnd5club',
            leftMenu: true,
        }, {
            label: 'Мастер на Boosty',
            path: 'https://boosty.to/dnd5eclub',
            leftMenu: true,
        }, {
            label: 'Старый сайт',
            path: 'https://old.dnd5.club/',
            leftMenu: true,
        }]
    }, {
        label: 'Авторизация',
        name: 'login',
        path: '/login',
        component: () => import('@/views/HomeView.vue')
    }, {
        label: 'Регистрация',
        name: 'registration',
        path: '/registration',
        component: () => import('@/views/HomeView.vue')
    }, {
        label: '404',
        name: 'not-found',
        path: '/(.*)',
        component: () => import('@/views/HomeView.vue'),
    }
];

const SPAPages = (): Array<RouteRecordRaw> => {
    const getRoutes = (routeList: IRoute[]): RouteRecordRaw[] => {
        const filtered: Array<RouteRecordRaw> = [];
        const getPath = (route: IRoute) => {
            if (!Array.isArray(route.children) || !route.children.length) {
                if (!route.path) {
                    throw new Error(`router "${ route.label }"${ route.name ? `|"${ route.name }"` : '' } has no path`);
                }

                return route.path
            }

            if (!route.children[0].path) {
                throw new Error(`router "${ route.children[0].label }"${ route.children[0].name
                    ? `|"${ route.children[0].name }"`
                    : '' } has no path`);
            }

            return route.children[0].path
        }

        for (let i = 0; i < routeList.length; i++) {
            const route: IRoute = routeList[i];

            if (
                !route?.name
                || !route?.component
                || (!route?.path && (
                    !Array.isArray(route.children) || !route.children.length
                ))
            ) {
                continue;
            }

            const formatted: RouteRecordRaw = {
                name: route.name,
                path: getPath(route),
                component: route.component,
            }

            if (!!Array.isArray(route.children) && !!route.children.length) {
                formatted.children = getRoutes(route.children);
            }

            filtered.push(formatted)
        }

        return filtered;
    }

    return getRoutes(ROUTES);
}

const SPARoutes: Array<RouteRecordRaw> = SPAPages();

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: SPARoutes,
});

export default router;
