<template>
    <div class="filter">
        <div class="filter__body">
            <div class="filter__search">
                <label class="filter__search_field">
                    <span class="filter__search_field_icon">
                        <svg-icon icon-name="search"/>
                    </span>

                    <input
                        v-model="search"
                        type="text"
                        placeholder="Поиск..."
                        @change.prevent="$emit('search')"
                    >
                </label>

                <button
                    v-if="!!search"
                    type="button"
                    class="filter__search_clear"
                    @click.left.exact.prevent="search = ''"
                >
                    <svg-icon icon-name="close"/>
                </button>
            </div>

            <button
                type="button"
                class="filter__button"
                :class="{ 'is-opened': filter.show }"
                @click.left.exact.prevent="filter.show = !filter.show"
            >
                <svg-icon
                    icon-name="filter"
                    :stroke-enable="!filter.show"
                    :fill-enable="filter.show"
                />

                <span>Фильтр</span>
            </button>

            <button
                v-tooltip.bottom-end="'Стереть фильтр'"
                type="button"
                class="filter__button"
                @click.left.exact.prevent="$emit('clear-filter')"
            >
                <svg-icon icon-name="clear-filter"/>
            </button>
        </div>

        <div
            v-if="filter.show"
            class="filter__dropdown"
        >
            <perfect-scrollbar>
                <div class="filter__dropdown_body">
                    <slot/>
                </div>
            </perfect-scrollbar>
        </div>
    </div>
</template>

<script>
    import SvgIcon from '@/components/UI/SvgIcon';
    import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

    export default {
        name: 'ListFilter',
        components: { SvgIcon, PerfectScrollbar },
        emits: ['clear-filter', 'search'],
        data: () => ({
            search: '',
            filter: {
                show: false
            }
        })
    }
</script>

<style lang="scss" scoped>
    .filter {
        position: relative;

        &__body {
            width: 100%;
            display: flex;
            position: relative;
        }

        &__search {
            flex: 1;
            display: flex;

            &_field {
                flex: 1;
                display: flex;
                align-items: center;
                cursor: text;

                &_icon {
                    width: 42px;
                    height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;

                    svg {
                        width: 24px;
                        height: 24px;
                        color: var(--primary);
                    }
                }

                input {
                    width: 100%;
                    height: 100%;
                    border: 0;
                    background-color: transparent;
                    color: var(--text-color);
                    padding: 0;
                }
            }

            &_clear {
                @include css_anim();

                display: flex;
                align-items: center;
                justify-content: center;
                width: 42px;
                height: 42px;
                flex-shrink: 0;
                color: var(--primary);

                @include media-min($md) {
                    &:hover {
                        color: var(--text-btn-color);
                        background-color: var(--primary-hover);
                    }
                }

                svg {
                    width: 24px;
                    height: 24px;
                }
            }
        }

        &__button {
            @include css_anim();

            display: flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            padding: 8px;
            border-left: 1px solid var(--border);

            svg {
                @include css_anim();

                width: 24px;
                height: 24px;
                color: var(--primary);
            }

            span {
                @include css_anim();

                margin-left: 4px;
                color: var(--text-color);
            }

            &.is-opened {
                @include css_anim();

                background-color: var(--primary-active);

                svg {
                    color: var(--text-btn-color);
                }

                span {
                    color: var(--text-btn-color);
                }
            }

            @include media-min($md) {
                &:hover {
                    @include css_anim();

                    background-color: var(--primary-hover);

                    svg {
                        color: var(--text-btn-color);
                    }

                    span {
                        color: var(--text-btn-color);
                    }
                }
            }
        }

        &__dropdown {
            position: absolute;
            top: 100%;
            background-color: var(--bg-sub-menu);
            border-top: 1px solid var(--border);
            width: 100%;
            max-height: calc(100vh - 72px - 42px - 73px); // head, filter, menu
            overflow: hidden auto;
            z-index: 10;

            &_body {
                width: 100%;
                padding: 16px;
            }
        }
    }
</style>
