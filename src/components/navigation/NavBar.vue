<template>
    <div
        class="nav-bar"
        :class="{'is-minified': menuConfig.minified}"
    >
        <nav-head/>

        <div
            class="nav-bar__body"
            :class="{ 'is-active': isMenuShow }"
        >
            <nav class="nav-bar__nav-list">
                <nav-item
                    v-for="(item, index) in menuItems"
                    :key="index"
                    :to="item.path"
                    :nav-item="item"
                />
            </nav>

            <div class="nav-bar__controls">
                <nav-item-theme/>
            </div>
        </div>
    </div>
</template>

<script>
    import NavHead from '@/components/navigation/NavHead';
    import NavItem from '@/components/navigation/NavItem/NavItem';
    import { mapActions, mapState } from 'pinia/dist/pinia';
    import NavItemTheme from '@/components/navigation/NavItem/NavItemTheme';
    import { useUIStore } from '@/store/UIStore';
    import { ROUTES } from '@/router/routes.ts';

    export default {
        name: 'NavBar',
        components: {
            NavItemTheme,
            NavItem,
            NavHead
        },
        data() {
            return {
                isMenuShow: false,
            }
        },
        computed: {
            ...mapState(useUIStore, {
                menuConfig: 'getMenuConfig',
            }),

            menuState() {
                return this.menuConfig.show
            },

            menuItems() {
                const getRoutes = routeList => {
                    const hasChildren = route => Array.isArray(route.children) && route.children.length;
                    const filtered = [];

                    for (let i = 0; i < routeList.length; i++) {
                        const route = routeList[i];

                        if (
                            !route?.leftMenu
                            || !route?.label
                            || (!route?.path && !hasChildren(route))
                        ) {
                            continue;
                        }

                        let formatted = {
                            name: route.name,
                            label: route.label,
                            icon: route.name,
                            path: route.path
                        }

                        if (hasChildren(route)) {
                            delete formatted.path;

                            formatted = {
                                ...formatted,
                                children: getRoutes(route.children)
                            }

                            formatted.path = formatted.children[0].path;

                            if (route?.path) {
                                formatted.children[0].path = route.path;
                            }
                        }

                        filtered.push(formatted)
                    }

                    return filtered;
                }

                return getRoutes(ROUTES);
            }
        },
        watch: {
            menuState(newValue) {
                this.isMenuShow = newValue
            }
        },
        mounted() {
            window.addEventListener('resize', this.setMenuShowing);
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.setMenuShowing);
        },
        methods: {
            ...mapActions(useUIStore, {
                toggleMenuSize: 'toggleMenuSize',
            }),

            setMenuShowing() {
                if (window.innerWidth >= 768) {
                    this.isMenuShow = true;

                    return
                }

                this.isMenuShow = this.menuConfig.show;
            },
        }
    };
</script>

<style lang="scss" scoped>
    .nav-bar {
        position: relative;
        top: initial;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 73px;
        background-color: var(--bg-main);
        z-index: 102;
        margin-top: auto;

        @include media-min($md) {
            flex-shrink: 0;
            width: 72px;
            height: 100%;
            margin-top: initial;
            border-right: 1px solid var(--border);
        }

        &__nav-list,
        &__controls {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        &__controls {
            @include media-min($md) {
                margin-top: auto;
            }
        }

        &__body {
            position: absolute;
            top: initial;
            left: 0;
            bottom: 100%;
            background-color: var(--bg-main);
            width: 100%;
            height: calc(100vh - 73px);
            overflow: hidden scroll;
            padding: 32px 16px;
            display: none;

            &.is-active {
                display: flex;
                flex-direction: column;
            }

            @include media-min($md) {
                padding: 24px 0;
                position: relative;
                left: initial;
                bottom: initial;
                overflow: visible;
                display: flex;
                align-items: center;
                flex-direction: column;
            }
        }

        @include media-min($xl) {
            &:not(.is-minified) {
                width: 270px;

                .nav-bar {
                    &__body {
                        padding: 24px 16px;
                        overflow: hidden scroll;
                    }
                }
            }
        }
    }
</style>
