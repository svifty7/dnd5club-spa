import {
    createRouter,
    createWebHistory, RouteComponent,
    RouteRecordRaw
} from 'vue-router';
import { IRoute, ROUTES } from '@/router/routes';

const SPAPages = (): Array<RouteRecordRaw> => {
    const getRoutes = (routeList: IRoute[]): RouteRecordRaw[] => {
        const filtered: Array<RouteRecordRaw> = [];
        const isExternalLink = (path: string): boolean => path.startsWith('http');
        const getPath = (route: IRoute): string => {
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
        };
        const getComponent = (route: IRoute): RouteComponent => {
            if (!route?.component) {
                return import('@/views/HomeView.vue')
            }
            return import(`@/views${route.component}`);
        }

        for (let i = 0; i < routeList.length; i++) {
            const route: IRoute = routeList[i];

            if (
                !route?.name
                || ((!route?.path || !route?.component) && (!Array.isArray(route.children) || !route.children.length))
                || isExternalLink(getPath(route))
            ) {
                continue;
            }

            const formatted: RouteRecordRaw = {
                name: route.name,
                path: route.path || getPath(route),
                component: () => getComponent(route),
            }

            if (!!Array.isArray(route.children) && !!route.children.length) {
                const children = getRoutes(route.children);

                if (children.length) {
                    formatted.children = getRoutes(route.children);
                }
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
