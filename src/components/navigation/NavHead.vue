<template>
    <div
        class="nav-head"
        :class="{'is-minified': menuConfig.minified}"
    >
        <router-link
            v-if="false"
            :to="{ name: 'login' }"
            class="nav-head__login"
        >
            <svg-icon
                icon-name="login"
                size="24"
            />
        </router-link>

        <router-link
            :to="{name: 'home'}"
            class="nav-head__logo"
        >
            <site-logo/>
        </router-link>

        <button
            type="button"
            class="nav-head__minify"
            @click.left.exact.prevent="toggleMenuSize()"
        >
            <svg-icon
                icon-name="arrow-full"
                size="24"
            />
        </button>

        <button
            type="button"
            class="nav-head__sandwich"
            @click.left.exact.prevent="toggleMenuShowing"
        >
            <svg-icon
                icon-name="sandwich"
                size="24"
            />
        </button>
    </div>
</template>

<script>
    import SvgIcon from '@/components/UI/SvgIcon';
    import SiteLogo from '@/components/UI/SiteLogo';
    import { mapActions, mapState } from 'pinia/dist/pinia';
    import { useUIStore } from '@/store/UIStore';

    export default {
        name: 'NavHead',
        components: {
            SiteLogo,
            SvgIcon
        },
        computed: {
            ...mapState(useUIStore, {
                menuConfig: 'getMenuConfig',
            }),
        },
        methods: {
            ...mapActions(useUIStore, {
                toggleMenuShowing: 'toggleMenuShowing',
                toggleMenuSize: 'toggleMenuSize',
            }),
        }
    }
</script>

<style lang="scss" scoped>
    .nav-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--hover);
        position: relative;
        width: 100%;
        height: 100%;
        border-top: 1px solid var(--border);

        @include media-min($md) {
            height: 72px;
            border-top: 0;
            border-bottom: 1px solid var(--border);
        }

        > * {
            flex-shrink: 0;
        }

        &__logo {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 72px;
            height: 72px;
            position: relative;

            svg {
                width: 52px;
                height: 52px;
            }

            &:after {
                content: 'β';
                display: block;
                position: absolute;
                top: 8px;
                right: 5px;
                color: var(--primary);
                font-size: 17px;
                font-weight: 600;
            }
        }

        &__minify {
            width: 24px;
            height: 24px;
            display: none;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 1px solid var(--border);
            position: absolute;
            right: -12px;
            background-color: var(--bg-main);
            color: var(--primary);

            @include media-min($xl) {
                display: flex;
            }
        }

        &__sandwich {
            color: var(--primary);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 72px;
            height: 72px;

            @include media-min($md) {
                display: none;
            }
        }

        &.is-minified:not(.is-maximized) {
            .nav-head {
                &__minify {
                    transform: rotate(180deg);
                }
            }
        }
    }
</style>
