<template>
    <router-link
        v-if="!isExternalLink(navItem)"
        v-slot="{href, navigate, isActive}"
        v-bind="$props"
        :to="{ name: navItem.name }"
        custom
        @mouseenter="setSubmenuPositionClass"
        @mouseleave="setSubmenuPositionClass"
    >
        <div
            class="nav-item"
            v-bind="$attrs"
            :class="{'router-link-active': isActive, ...classList}"
        >
            <a
                :href="href"
                class="nav-item__trigger"
                @click.left.prevent.exact="handleTriggerClick(navigate)"
            >
                <div class="nav-item__icon">
                    <svg-icon :icon-name="`left-menu-${navItem.name}`"/>
                </div>

                <div class="nav-item__name">
                    {{ navItem.label }}
                </div>

                <div
                    v-if="hasChildren"
                    class="nav-item__arrow"
                >
                    <svg-icon icon-name="arrow-stroke"/>
                </div>
            </a>

            <div
                ref="submenu"
                class="nav-item__submenu"
                :class="{ 'is-bottom': !submenuIsVisible }"
            >
                <div class="nav-item__sub-title">
                    {{ navItem.label }}
                </div>

                <div
                    v-for="(child, index) in navItem.children"
                    :key="index"
                    class="nav-item__sub-item--wrapper"
                >
                    <router-link
                        v-if="!isExternalLink(child)"
                        :to="{name: child.name}"
                        class="nav-item__sub-item"
                    >
                        {{ child.label }}
                    </router-link>

                    <a
                        v-else
                        target="_blank"
                        :href="child.url"
                        class="nav-item__sub-item"
                    >
                        {{ child.label }}
                    </a>
                </div>
            </div>
        </div>
    </router-link>

    <div
        v-else
        class="nav-item"
        :class="classList"
        @mouseenter="setSubmenuPositionClass"
        @mouseleave="setSubmenuPositionClass"
    >
        <div
            class="nav-item__trigger"
            @click.left.exact.prevent="toggleSubmenu(navItem.label)"
        >
            <div class="nav-item__icon">
                <svg-icon :icon-name="`left-menu-${navItem.name}`"/>
            </div>

            <div class="nav-item__name">
                {{ navItem.label }}
            </div>

            <div class="nav-item__arrow">
                <svg-icon icon-name="arrow-stroke"/>
            </div>
        </div>

        <div
            ref="submenu"
            class="nav-item__submenu"
            :class="{ 'is-bottom': !submenuIsVisible }"
        >
            <div class="nav-item__sub-title">
                {{ navItem.label }}
            </div>

            <div
                v-for="(child, index) in navItem.children"
                :key="index"
                class="nav-item__sub-item--wrapper"
            >
                <a
                    target="_blank"
                    :href="child.url"
                    class="nav-item__sub-item"
                >
                    {{ child.label }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import SvgIcon from '@/components/UI/SvgIcon';
    import { mapActions, mapState } from 'pinia/dist/pinia';
    import { useUIStore } from '@/store/UIStore';

    export default {
        name: 'NavItem',
        components: { SvgIcon },
        inheritAttrs: false,
        props: {
            navItem: {
                type: Object,
                default: () => ({}),
                required: true
            },
        },
        data() {
            return {
                submenuIsVisible: true,
                disabledLinks: false,
            }
        },
        computed: {
            ...mapState(useUIStore, {
                menuConfig: 'getMenuConfig',
            }),

            classList() {
                return {
                    'is-minified': this.menuConfig.minified,
                    'is-opened': this.menuConfig.submenu === this.navItem.label,
                }
            },

            hasChildren() {
                return 'children' in this.navItem
                    && Array.isArray(this.navItem.children)
                    && !!this.navItem.children.length
            },

            isParentExternalLink() {
                return !this.navItem?.url?.startsWith('http');
            },
        },
        methods: {
            ...mapActions(useUIStore, ['toggleSubmenu']),

            setSubmenuPositionClass() {
                const { submenu } = this.$refs;

                if (!submenu) {
                    return;
                }

                const rect = submenu.getBoundingClientRect();

                this.submenuIsVisible = rect.bottom + 16 < window.innerHeight;
            },

            handleTriggerClick(callback) {
                if (!this.hasChildren) {
                    callback();

                    return;
                }

                this.toggleSubmenu(this.navItem.label);
            },

            isExternalLink(el) {
                return !!el?.external;
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "NavItem.module.scss";
</style>
