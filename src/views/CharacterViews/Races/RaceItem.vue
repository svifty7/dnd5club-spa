<template>
    <router-link
        v-if="typeof raceItem.url !== 'undefined'"
        v-slot="{href, navigate, isActive}"
        v-bind="$props"
        custom
        :to="{ path: raceItem.url }"
    >
        <div
            ref="raceItem"
            v-bind="$attrs"
            v-masonry-tile
            class="race-item"
            :class="getParentClasses(isActive)"
        >
            <div class="race-item__content">
                <div class="race-item__main">
                    <a
                        :href="href"
                        class="race-item__link"
                        @click.left.prevent.exact="navigate()"
                    >
                        <span class="race-item__icon">
                            <svg-icon :icon-name="raceItem.icon"/>
                        </span>

                        <span class="race-item__body">
                            <span class="race-item__body_row">
                                <span class="race-item__name">
                                    <span class="race-item__name--rus">
                                        {{ raceItem.name.rus }}
                                    </span>

                                    <span class="race-item__name--eng">
                                        [{{ raceItem.name.eng }}]
                                    </span>
                                </span>

                                <span
                                    v-tooltip="{ content: raceItem.source.name }"
                                    class="race-item__book"
                                >
                                    {{ raceItem.source.shortName }}
                                </span>
                            </span>

                            <span class="race-item__body_row">
                                <span class="race-item__abilities">
                                    {{ raceItem.abilities }}
                                </span>
                            </span>
                        </span>
                    </a>

                    <button
                        v-if="hasSubraces"
                        v-tooltip.left="{ content: 'Разновидности' }"
                        type="button"
                        class="race-item__toggle"
                        :class="{ 'is-active': submenu.show }"
                        @click.left.exact.prevent="toggleSubrace"
                    >
                        <svg-icon icon-name="expand-down"/>
                    </button>
                </div>

                <div
                    v-if="hasSubraces"
                    :class="{ 'is-active': isOpenedSubraces }"
                    class="race-item__subrace-list"
                >
                    <div
                        v-for="(col, colKey) in raceItem.subraces"
                        :key="colKey"
                        class="race-item__subrace-list_col"
                    >
                        <div
                            v-for="(group, groupKey) in col"
                            :key="groupKey"
                            class="race-item__subrace-type"
                        >
                            <div class="race-item__subrace-type_name">
                                {{ group.name }}
                            </div>

                            <div class="race-item__subrace-type_items">
                                <router-link
                                    v-for="(subrace, subraceKey) in group.list"
                                    :key="subraceKey"
                                    :to="{ path: subrace.url }"
                                    class="race-item__subrace-item"
                                >
                                    <span class="race-item__subrace-item_name">{{ subrace.name.rus }}</span>

                                    <span class="race-item__subrace-item_book">
                                        <span v-tooltip="{ content: subrace.source.name }">
                                            {{ subrace.source.shortName }}
                                        </span>

                                        /

                                        <span>{{ subrace.name.eng }}</span>
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
    import { useResizeObserver } from '@vueuse/core/index';

    export default {
        name: 'RaceItem',
        components: { SvgIcon },
        inheritAttrs: false,
        props: {
            raceItem: {
                type: Object,
                default: () => null,
                required: true
            },
            ...RouterLink.props
        },
        data() {
            return {
                submenu: {
                    show: false
                },
            }
        },
        computed: {
            isOpenedSubraces() {
                if (this.$route.params?.raceName === this.raceItem.url) {
                    return true
                }

                return this.submenu.show
            },

            hasSubraces() {
                return !!this.raceItem?.subraces?.length
            },
        },
        watch: {
            submenu: {
                deep: true,
                handler() {
                    this.updateGrid();
                }
            },

            isOpenedSubraces() {
                this.updateGrid();
            },
        },
        mounted() {
            this.$nextTick(() => {
                useResizeObserver(this.$refs.raceItem, this.updateGrid);
            });
        },
        methods: {
            getParentClasses(isActive) {
                return {
                    'router-link-active': isActive || this.$route.fullPath.match(new RegExp(`^${ this.raceItem.url }`)),
                    'is-race-selected': this.$route.name === 'raceDetail',
                    'is-green': this.raceItem.type?.name.toLowerCase() === 'homebrew'
                }
            },

            toggleSubrace() {
                this.submenu.show = !this.submenu.show;
            },

            updateGrid() {
                this.$nextTick(() => this.$redrawVueMasonry('races-items'))
            },
        }
    }
</script>

<style lang="scss" scoped>
    .race-item {
        width: 100%;
        margin-bottom: 16px;

        @include media-min($md) {
            width: calc(50% - 8px);
        }

        @include media-min($xxl) {
            width: calc(100% / 3 - 16px * 2 / 3);
        }

        &.is-race-selected {
            width: 100%;
        }

        &__content {
            background-color: var(--bg-table-list);
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
            padding: 10px 0 10px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;

            ::v-deep(> svg) {
                width: 42px;
                height: 42px;
                color: var(--primary);
            }

            & + .race-item {
                &__body {
                    padding-left: 16px;
                }
            }
        }

        &__body {
            padding: 10px 12px 10px 16px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            &_row {
                display: flex;
            }
        }

        &__name {
            padding-right: 8px;

            &--rus,
            &--eng {
                display: inline;
                font-size: var(--h5-font-size);;
                font-weight: 500;
                color: var(--text-color-title);
                line-height: normal;
            }

            &--eng {
                color: var(--text-g-color);
            }
        }

        &__book {
            color: var(--text-g-color);
            margin-left: auto;
            line-height: normal;
            font-size: var(--main-font-size);
        }

        &__abilities {
            color: var(--text-g-color);
            line-height: normal;
            font-size: calc(var(--h5-font-size) - 1px);
        }

        &__toggle {
            color: var(--primary);
            width: 32px;
            padding: 0;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--bg-sub-menu);

            @include media-min($md) {
                &:hover {
                    background-color: var(--hover);
                }
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

        &__subrace {
            &-list {
                padding: 0 16px 16px 62px;
                display: none;
                flex-direction: column;
                gap: 16px;

                &_col {
                    flex: 1;
                }

                &.is-active {
                    display: flex;
                }
            }

            &-type {
                &:nth-child(n+2) {
                    margin-top: 16px;
                }

                &_items {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    @include media-min($sm) {
                        min-width: 216px;
                        max-width: 100%;
                    }
                }

                &_name {
                    font: {
                        size: calc(var(--h5-font-size) + 2px);
                        family: "Lora", serif;
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

                @include media-min($md) {
                    &:hover {
                        background-color: var(--hover);
                    }
                }

                &.router-link-active {
                    background-color: var(--primary-active);
                }
            }
        }

        @include media-min($md) {
            &:hover {
                .race-item {
                    &__content {
                        background-color: var(--bg-sub-menu)
                    }
                }
            }
        }

        &.is-green {
            .race-item {
                &__content {
                    background: var(--bg-homebrew-gradient-left);
                }
            }
        }

        &.router-link-active {
            .race-item {
                &__content {
                    border-color: var(--primary);
                }

                &__toggle {
                    display: none;
                }

                &__subrace-list {
                    display: flex;
                }
            }
        }
    }
</style>
