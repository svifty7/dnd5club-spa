import {
    createRouter,
    createWebHistory,
} from 'vue-router';
import { useHomeStore } from '@/store/HomeStore';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import('@/views/HomeView.vue'),
            beforeEnter: async () => {
                const homeStore = useHomeStore();

                try {
                    await homeStore.getMenuItems();
                } catch {
                    throw new Error('undefined error');
                }
            }
        }, {
            name: 'character',
            path: '/character',
            redirect: '/classes',
            component: () => import('@/views/CharacterViews/CharacterLayout.vue'),
            children: [{
                name: 'classes',
                path: '/classes',
                component: () => import('@/views/CharacterViews/Classes/ClassesView.vue'),
                children: [{
                    name: 'classDetail',
                    path: '/classes/:className',
                    component: () => import('@/views/CharacterViews/Classes/ClassDetail.vue'),
                    children: [{
                        name: 'archetype',
                        path: '/classes/:className/:archetype',
                        component: () => import('@/views/CharacterViews/Classes/ClassDetail.vue'),
                    }]
                }]
            }, {
                name: 'races',
                path: '/races',
                component: () => import('@/views/CharacterViews/Races/RacesView.vue'),
            }, {
                name: 'traits',
                path: '/traits',
                component: () => import('@/views/CharacterViews/Traits/TraitsView.vue'),
            }, {
                name: 'options',
                path: '/options',
                component: () => import('@/views/CharacterViews/Options/OptionsView.vue'),
            }, {
                name: 'backgrounds',
                path: '/backgrounds',
                component: () => import('@/views/CharacterViews/Backgrounds/BackgroundsView.vue'),
            }]
        }, {
            name: 'spells',
            path: '/spells',
            component: () => import('@/views/SpellViews/Spells/SpellsView.vue'),
        }, {
            name: 'inventory',
            path: '/inventory',
            redirect: '/weapons',
            component: () => import('@/views/InventoryViews/InventoryLayout.vue'),
            children: [{
                name: 'weapons',
                path: '/weapons',
                component: () => import('@/views/InventoryViews/Weapons/WeaponsView.vue'),
            }, {
                name: 'armors',
                path: '/armors',
                component: () => import('@/views/InventoryViews/Armors/ArmorsView.vue'),
            }, {
                name: 'items',
                path: '/items',
                component: () => import('@/views/InventoryViews/Items/ItemsView.vue'),
            }]
        }, {
            name: 'creatures',
            path: '/creatures',
            component: () => import('@/views/CreatureViews/Creatures/CreaturesView.vue'),
        }, {
            name: 'treasure',
            path: '/treasure',
            redirect: '/treasures',
            component: () => import('@/views/TreasureViews/TreasureLayout.vue'),
            children: [{
                name: 'treasures',
                path: '/treasures',
                component: () => import('@/views/TreasureViews/Treasures/TreasuresView.vue'),
            }, {
                name: 'magic-items',
                path: '/items/magic',
                component: () => import('@/views/TreasureViews/MagicItems/MagicItemsView.vue'),
            }]
        }, {
            name: 'screens',
            path: '/screens',
            component: () => import('@/views/ScreenViews/Screens/ScreensView.vue'),
        }, {
            name: 'wiki',
            path: '/wiki',
            component: () => import('@/views/WikiViews/WikiLayout.vue'),
            children: [{
                name: 'gods',
                path: '/gods',
                component: () => import('@/views/WikiViews/Gods/GodsView.vue'),
            }, {
                name: 'rules',
                path: '/rules',
                component: () => import('@/views/WikiViews/Rules/RulesView.vue'),
            }, {
                name: 'books',
                path: '/books',
                component: () => import('@/views/WikiViews/Books/BooksView.vue'),
            }]
        }, {
            name: 'tools',
            path: '/tools',
            redirect: '/trader',
            component: () => import('@/views/ToolViews/ToolLayout.vue'),
            children: [{
                name: 'trader',
                path: '/trader',
                component: () => import('@/views/ToolViews/Trader/TraderView.vue'),
            }, {
                name: 'encounters',
                path: '/encounters',
                component: () => import('@/views/ToolViews/Encounters/EncountersView.vue'),
            }, {
                name: 'treasury',
                path: '/treasury',
                component: () => import('@/views/ToolViews/Treasury/TreasuryView.vue'),
            }, {
                name: 'tavern',
                path: '/tavern',
                component: () => import('@/views/ToolViews/Tavern/TavernView.vue'),
            }, {
                name: 'wild-magic',
                path: '/wildmagic',
                component: () => import('@/views/ToolViews/WildMagic/WildMagicView.vue'),
            }, {
                name: 'madness',
                path: '/madness',
                component: () => import('@/views/ToolViews/Madness/MadnessView.vue'),
            }]
        }, {
            name: 'login',
            path: '/login',
            component: () => import('@/views/AccountViews/Login/LoginView.vue'),
        }, {
            name: 'registration',
            path: '/registration',
            component: () => import('@/views/AccountViews/Registration/RegistrationView.vue'),
        }, {
            name: 'not-found',
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/NotFoundView.vue'),
        }
    ],
});

export default router;
