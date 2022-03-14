export interface IRoute {
    label: string
    name?: string
    path?: string
    component?: string // Only relative path from @/views
    leftMenu?: boolean
    homePage?: boolean
    children?: IRoute[]
}

export const ROUTES: IRoute[] = [
    {
        label: 'Главная',
        name: 'home',
        path: '/',
        component: '/HomeView.vue',
    }, {
        label: 'Персонаж',
        name: 'character',
        component: '/CharacterViews/CharacterLayout.vue',
        leftMenu: true,
        children: [{
            label: 'Классы',
            name: 'classes',
            path: '/classes',
            component: '/CharacterViews/Classes/ClassesView.vue',
            leftMenu: true,
            homePage: true,
        }, {
            label: 'Расы',
            name: 'races',
            path: '/races',
            component: '/CharacterViews/Races/RacesView.vue',
            leftMenu: true,
            homePage: true,
        }, {
            label: 'Черты',
            name: 'traits',
            path: '/traits',
            component: '/CharacterViews/Traits/TraitsView.vue',
            leftMenu: true,
            homePage: true,
        }, {
            label: 'Особенности классов',
            name: 'options',
            path: '/options',
            component: '/CharacterViews/Options/OptionsView.vue',
            leftMenu: true,
            homePage: true,
        }, {
            label: 'Предыстории',
            name: 'backgrounds',
            path: '/backgrounds',
            component: '/CharacterViews/Backgrounds/BackgroundsView.vue',
            leftMenu: true,
            homePage: true,
        }]
    }, {
        label: 'Заклинания',
        name: 'spells',
        path: '/spells',
        component: '/SpellViews/Spells/SpellsView.vue',
        leftMenu: true,
        homePage: true,
    }, {
        label: 'Инвентарь',
        name: 'inventory',
        component: '/InventoryViews/InventoryLayout.vue',
        leftMenu: true,
        children: [{
            label: 'Оружие',
            name: 'weapons',
            path: '/weapons',
            component: '/InventoryViews/Weapons/WeaponsView.vue',
            leftMenu: true,
            homePage: true,
        }, {
            label: 'Доспехи',
            name: 'armors',
            path: '/armors',
            component: '/InventoryViews/Armors/ArmorsView.vue',
            leftMenu: true,
            homePage: true,
        }, {
            label: 'Снаряжение',
            name: 'items',
            path: '/items',
            component: '/InventoryViews/Items/ItemsView.vue',
            leftMenu: true,
            homePage: true,
        }]
    }, {
        label: 'Бестиарий',
        name: 'creatures',
        path: '/creatures',
        component: '/CreatureViews/Creatures/CreaturesView.vue',
        leftMenu: true,
        homePage: true,
    }, {
        label: 'Сокровища',
        name: 'treasure',
        component: '/TreasureViews/TreasureLayout.vue',
        leftMenu: true,
        children: [{
            label: 'Драгоценности',
            name: 'treasures',
            path: '/treasures',
            component: '/TreasureViews/Treasures/TreasuresView.vue',
            leftMenu: true,
        }, {
            label: 'Магические предметы',
            name: 'magic-items',
            path: '/items/magic',
            component: '/TreasureViews/MagicItems/MagicItemsView.vue',
            leftMenu: true,
            homePage: true,
        }]
    }, {
        label: 'Боги',
        name: 'gods',
        path: '/gods',
        component: '/GodViews/Gods/GodsView.vue',
        leftMenu: true,
    }, {
        label: 'Мастерская',
        name: 'workshop',
        component: '/WorkshopViews/WorkshopLayout.vue',
        leftMenu: true,
        children: [{
            label: 'Ширма',
            name: 'screens',
            path: '/screens',
            component: '/WorkshopViews/Screens/ScreensView.vue',
            leftMenu: true,
            homePage: true,
        }, {
            label: 'Состояния и болезни',
            name: 'conditions',
            path: '/conditions',
            component: '/WorkshopViews/Conditions/ConditionsView.vue',
            leftMenu: true,
        }, {
            label: 'Правила и термины',
            name: 'rules',
            path: '/rules',
            component: '/WorkshopViews/Rules/RulesView.vue',
            leftMenu: true,
        }]
    }, {
        label: 'Инструменты',
        name: 'tools',
        leftMenu: true,
        component: '/ToolViews/ToolLayout.vue',
        children: [{
            label: 'Торговец',
            name: 'trader',
            path: '/trader',
            component: '/ToolViews/Trader/TraderView.vue',
            leftMenu: true,
        }, {
            label: 'Случайные столкновения',
            name: 'encounters',
            path: '/encounters',
            component: '/ToolViews/Encounters/EncountersView.vue',
            leftMenu: true,
        }, {
            label: 'Сокровищница',
            name: 'treasury',
            path: '/treasury',
            component: '/ToolViews/Treasury/TreasuryView.vue',
            leftMenu: true,
        }, {
            label: 'Таверна (в разработке)',
            name: 'tavern',
            path: '/tavern',
            component: '/ToolViews/Tavern/TavernView.vue',
            leftMenu: true,
        }, {
            label: 'Дикая магия',
            name: 'wild-magic',
            path: '/wildmagic',
            component: '/ToolViews/WildMagic/WildMagicView.vue',
            leftMenu: true,
        }, {
            label: 'Безумие',
            name: 'madness',
            path: '/madness',
            component: '/ToolViews/Madness/MadnessView.vue',
            leftMenu: true,
        }, {
            label: 'Источники',
            name: 'books',
            path: '/books',
            component: '/ToolViews/Books/BooksView.vue',
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
        component: '/AccountViews/Login/LoginView.vue',
    }, {
        label: 'Регистрация',
        name: 'registration',
        path: '/registration',
        component: '/AccountViews/Registration/RegistrationView.vue',
    }, {
        label: '404',
        name: 'not-found',
        path: '/(.*)',
        component: '/NotFoundView.vue',
    }
];
