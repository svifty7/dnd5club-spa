<template>
    <router-link
        v-if="typeof classItem.name.url !== 'undefined'"
        v-slot="{href, navigate, isActive}"
        v-bind="$props"
        custom
        :to="{ name: 'classDetail', params: { className: classItem.name.url } }"
    >
        <div
            v-masonry-tile
            v-bind="$attrs"
            class="class-item"
            :class="{ 'router-link-active': isActive }"
        >
            <div class="class-item__content">
                <div class="class-item__main">
                    <a
                        :href="href"
                        class="class-item__link"
                        @click.left.prevent.exact="navigate()"
                    >
                        <!-- eslint-disable vue/no-v-html -->
                        <span
                            class="class-item__icon"
                            v-html="classItem.svg"
                        />
                        <!-- eslint-enable vue/no-v-html -->

                        <span class="class-item__body">
                            <span class="class-item__body_row">
                                <span class="class-item__name">
                                    <span class="class-item__name--rus">
                                        {{ classItem.name.rus }}
                                    </span>

                                    <span class="class-item__name--eng">
                                        [{{ classItem.name.eng }}]
                                    </span>
                                </span>

                                <span class="class-item__book">
                                    {{ classItem.book }}
                                </span>
                            </span>

                            <span class="class-item__body_row">
                                <span class="class-item__dice">
                                    {{ classItem.dice }}
                                </span>
                            </span>
                        </span>
                    </a>

                    <button
                        v-if="hasArchetypes"
                        type="button"
                        class="class-item__toggle"
                        :class="{ 'is-active': submenu.show }"
                        @click.left.exact.prevent="toggleArch"
                    >
                        <svg-icon icon-name="expand-down"/>
                    </button>
                </div>

                <div
                    v-if="hasArchetypes"
                    :class="{ 'is-active': submenu.show }"
                    class="class-item__arch-list"
                >
                    <div class="class-item__arch-list_col">
                        <div
                            v-if="classItem?.archetypes?.main?.list?.length"
                            class="class-item__arch-type"
                        >
                            <div class="class-item__arch-type_name">
                                {{ classItem.archetypes.main.name }}
                            </div>

                            <div class="class-item__arch-type_items">
                                <router-link
                                    v-for="(arch, archKey) in classItem.archetypes.main.list"
                                    :key="archKey"
                                    :to="{ name: 'archetype', params: {
                                        className: classItem.name.url,
                                        archetype: arch.name.url
                                    } }"
                                    class="class-item__arch-item"
                                >
                                    <span class="class-item__arch-item_name">{{ arch.name.rus }}</span>

                                    <span class="class-item__arch-item_book">
                                        {{ `${ arch.source } / ${ arch.name.eng }` }}
                                    </span>
                                </router-link>
                            </div>
                        </div>

                        <div
                            v-if="classItem?.archetypes?.settings?.list?.length"
                            class="class-item__arch-type"
                        >
                            <div class="class-item__arch-type_name">
                                {{ classItem.archetypes.settings.name }}
                            </div>

                            <div class="class-item__arch-type_items">
                                <router-link
                                    v-for="(arch, archKey) in classItem.archetypes.settings.list"
                                    :key="archKey"
                                    :to="{ name: 'archetype', params: {
                                        className: classItem.name.url,
                                        archetype: arch.name.url
                                    } }"
                                    class="class-item__arch-item"
                                >
                                    <span class="class-item__arch-item_name">{{ arch.name.rus }}</span>

                                    <span class="class-item__arch-item_book">
                                        {{ `${ arch.source } / ${ arch.name.eng }` }}
                                    </span>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div
                        v-if="classItem?.archetypes?.homebrew?.list?.length"
                        class="class-item__arch-list_col"
                    >
                        <div
                            class="class-item__arch-type"
                        >
                            <div class="class-item__arch-type_name">
                                {{ classItem.archetypes.homebrew.name }}
                            </div>

                            <div class="class-item__arch-type_items">
                                <router-link
                                    v-for="(arch, archKey) in classItem.archetypes.homebrew.list"
                                    :key="archKey"
                                    :to="{ name: 'archetype', params: {
                                        className: classItem.name.url,
                                        archetype: arch.name.url
                                    } }"
                                    class="class-item__arch-item"
                                >
                                    <span class="class-item__arch-item_name">{{ arch.name.rus }}</span>

                                    <span class="class-item__arch-item_book">
                                        {{ `${ arch.source } / ${ arch.name.eng }` }}
                                    </span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
    import SvgIcon from '@/components/UI/SvgIcon';
    import { RouterLink } from 'vue-router';

    export default {
        name: 'ClassItem',
        components: { SvgIcon },
        props: {
            classItem: {
                type: Object,
                default: () => null,
                required: true
            },
            ...RouterLink.props,
        },
        data() {
            return {
                submenu: {
                    show: false
                }
            }
        },
        computed: {
            hasArchetypes() {
                return !!this.classItem?.archetypes?.main?.list?.length
                    || !!this.classItem?.archetypes?.settings?.list?.length
                    || !!this.classItem?.archetypes?.homebrew?.list?.length
            },

            isOpenedArchetypes() {
                if (this.$route.params?.className === this.classItem.name?.url) {
                    return true
                }

                return this.submenu.show
            }
        },
        watch: {
            submenu: {
                deep: true,
                handler() {
                    this.updateGrid();
                }
            },

            isOpenedArchetypes() {
                this.updateGrid();
            }
        },
        methods: {
            toggleArch() {
                this.submenu.show = !this.submenu.show;
            },

            updateGrid() {
                this.$nextTick(() => this.$redrawVueMasonry('classes-items'))
            }
        }
    }
</script>

<style lang="scss" scoped>
    .class-item {
        width: 100%;
        margin-bottom: 16px;

        @include media-min($md) {
            width: calc(50% - 8px);
        }

        &__content {
            background-color: var(--bg-secondary);
            border: 1px solid var(--bg-secondary);
            border-radius: 16px;
            overflow: hidden;
            width: 100%;
        }

        &__main {
            width: 100%;
            display: flex;
        }

        &__link {
            width: 100%;
            display: flex;
        }

        &__icon {
            padding: 16px 0 16px 16px;
            width: 66px;
            height: 82px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;

            ::v-deep(> svg) {
                width: 50px;
                height: 50px;

                path {
                    stroke: var(--primary);
                }
            }

            & + .class-item {
                &__body {
                    padding-left: 16px;
                }
            }
        }

        &__body {
            padding: 16px 16px 16px 98px;
            width: 100%;

            &_row {
                display: flex;

                &:nth-child(n+2) {
                    margin-top: 8px;
                }
            }
        }

        &__name {
            &--rus {
                display: inline;
                font-size: calc(var(--h5-font-size) + 2px);
                font-weight: 500;
                color: var(--text-color-title);
                line-height: normal;
            }

            &--eng {
                display: inline;
                font-size: calc(var(--h5-font-size) + 2px);
                font-weight: 500;
                color: var(--text-g-color);
                line-height: normal;
            }
        }

        &__book {
            color: var(--text-g-color);
            margin-left: auto;
            line-height: normal;
        }

        &__dice {
            color: var(--text-g-color);
            line-height: normal;
        }

        &__toggle {
            color: var(--primary);
            width: 32px;
            height: 82px;
            padding: 0;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;

            &:hover {
                background-color: var(--hover);
            }

            svg {
                @include css_anim();

                width: 24px;
                height: 24px;
            }

            &.is-active {
                svg {
                    transform: rotate(-180deg);
                }
            }
        }

        &__arch {
            &-list {
                padding: 0 16px 16px 82px;
                display: none;

                &_col {
                    flex: 1;

                    &:nth-child(n+2) {
                        margin-left: 16px;
                    }
                }

                &.is-active {
                    display: flex;
                }
            }

            &-type {
                &:nth-child(n+2) {
                    margin-top: 16px;
                }

                &_name {
                    font: {
                        size: calc(var(--h5-font-size) + 2px);
                        family: 'Lora', serif;
                        weight: 300;
                    };
                    color: var(--text-color-title);
                    padding: 0 8px;
                }
            }

            &-item {
                display: inline-block;
                padding: 4px 8px;
                border-radius: 8px;
                color: var(--text-color);
                font-size: var(--main-font-size);
                margin-top: 4px;

                &_book {
                    margin-left: 4px;
                    color: var(--text-g-color);
                    font-size: calc(var(--main-font-size) - 2px);
                }

                &:hover {
                    background-color: var(--hover);
                }

                &.router-link-active {
                    background-color: var(--primary-active);
                }
            }
        }

        &:hover {
            .class-item {
                &__content {
                    background-color: var(--bg-sub-menu)
                }
            }
        }

        &.router-link-active {
            .class-item {
                &__content {
                    border-color: var(--primary);
                    background-color: var(--bg-sub-menu)
                }

                &__toggle {
                    svg {
                        transform: rotate(-180deg);
                    }
                }

                &__arch-list {
                    display: flex;
                }
            }
        }
    }
</style>
