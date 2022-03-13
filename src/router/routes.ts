export interface IRoute {
    label: string
    name?: string
    path?: string
    leftMenu?: boolean
    homePage?: boolean
    children?: IRoute[]
}

export const ROUTES: IRoute[] = [
    {
        label: 'Главная',
        name: 'home',
        path: '/',
    }, {
        label: 'Персонаж',
        name: 'character',
        leftMenu: true,
        children: [{
            label: 'Классы',
            name: 'classes',
            path: '/classes',
            leftMenu: true,
            homePage: true,
        }, {
            label: 'Расы',
            name: 'races',
            path: '/races',
            leftMenu: true,
            homePage: true,
        }, {
            label: 'Черты',
            name: 'traits',
            path: '/traits',
            leftMenu: true,
            homePage: true,
        }, {
            label: 'Особенности классов',
            name: 'options',
            path: '/options',
            leftMenu: true,
            homePage: true,
        }, {
            label: 'Предыстории',
            name: 'backgrounds',
            path: '/backgrounds',
            leftMenu: true,
            homePage: true,
        }]
    }, {
        label: 'Заклинания',
        name: 'spells',
        path: '/spells',
        leftMenu: true,
        homePage: true,
    }, {
        label: 'Инвентарь',
        name: 'inventory',
        leftMenu: true,
        children: [{
            label: 'Оружие',
            name: 'weapons',
            path: '/weapons',
            leftMenu: true,
            homePage: true,
        }, {
            label: 'Доспехи',
            name: 'armors',
            path: '/armors',
            leftMenu: true,
            homePage: true,
        }, {
            label: 'Снаряжение',
            name: 'items',
            path: '/items',
            leftMenu: true,
            homePage: true,
        }]
    }, {
        label: 'Бестиарий',
        name: 'creatures',
        path: '/creatures',
        leftMenu: true,
        homePage: true,
    }, {
        label: 'Сокровища',
        name: 'treasures',
        leftMenu: true,
        children: [{
            label: 'Драгоценности',
            name: 'treasures',
            path: '/treasures',
            leftMenu: true,
        }, {
            label: 'Магические предметы',
            name: 'magic-items',
            path: '/items/magic',
            leftMenu: true,
            homePage: true,
        }]
    }, {
        label: 'Боги',
        name: 'gods',
        path: '/gods',
        leftMenu: true,
    }, {
        label: 'Мастерская',
        name: 'workshop',
        leftMenu: true,
        children: [{
            label: 'Ширма',
            name: 'screens',
            path: '/screens',
            leftMenu: true,
            homePage: true,
        }, {
            label: 'Состояния и болезни',
            name: 'conditions',
            path: '/conditions',
            leftMenu: true,
        }, {
            label: 'Правила и термины',
            name: 'rules',
            path: '/rules',
            leftMenu: true,
        }]
    }, {
        label: 'Инструменты',
        name: 'tools',
        leftMenu: true,
        children: [{
            label: 'Торговец',
            name: 'trader',
            path: '/trader',
            leftMenu: true,
        }, {
            label: 'Случайные столкновения',
            name: 'encounters',
            path: '/encounters',
            leftMenu: true,
        }, {
            label: 'Сокровищница',
            name: 'treasury',
            path: '/treasury',
            leftMenu: true,
        }, {
            label: 'Таверна (в разработке)',
            name: 'tavern',
            path: '/tavern',
            leftMenu: true,
        }, {
            label: 'Дикая магия',
            name: 'wildmagic',
            path: '/wildmagic',
            leftMenu: true,
        }, {
            label: 'Безумие',
            name: 'madness',
            path: '/madness',
            leftMenu: true,
        }, {
            label: 'Источники',
            name: 'books',
            path: '/books',
            leftMenu: true,
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
    }, {
        label: 'Регистрация',
        name: 'registration',
        path: '/registration',
    }, {
        label: '404',
        name: 'not-found',
        path: '/(.*)',
    }
];
