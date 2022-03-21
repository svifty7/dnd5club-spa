<template>
    <div class="classes">
        <div class="classes__list">
            <div class="classes__title">
                Классы
            </div>

            <div class="classes__filter">
                <list-filter>
                    <filter-item-source/>

                    <filter-item-checkboxes name="Кость хитов"/>
                </list-filter>
            </div>

            <div class="classes__items">
                <perfect-scrollbar>
                    <div class="classes__items_body">
                        <div
                            v-masonry="'classes-items'"
                            transition-duration="0.15s"
                            class="classes__items_body--inner"
                            item-selector=".class-item"
                            gutter="16"
                            percent-position="true"
                        >
                            <class-item
                                v-for="(el, key) in classList"
                                :key="key"
                                :to="{ name: 'classDetail', params: { className: el.name.url } }"
                                :class-item="el"
                            />
                        </div>
                    </div>
                </perfect-scrollbar>
            </div>
        </div>

        <div
            v-if="false"
            class="classes__selected"
        >
            <router-view/>
        </div>
    </div>
</template>

<script>
    import ClassItem from '@/views/CharacterViews/Classes/ClassItem';
    import ListFilter from '@/components/filter/ListFilter';
    import FilterItemSource from '@/components/filter/FilterItem/FilterItemSource';
    import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
    import FilterItemCheckboxes from '@/components/filter/FilterItem/FilterItemCheckboxes';
    import { useClassesStore } from '@/store/ClassesStore';
    import { mapActions, mapState } from 'pinia/dist/pinia';

    export default {
        name: 'ClassesView',
        components: {
            FilterItemCheckboxes,
            FilterItemSource,
            ListFilter,
            ClassItem,
            PerfectScrollbar
        },
        computed: {
            ...mapState(useClassesStore, {
                classList: 'computedClassList',
                currentClass(store) {
                    return store.computedSelectedClass
                }
            }),
        },
        beforeMount() {
            this.getClassList()
        },
        methods: {
            ...mapActions(useClassesStore, {
                getClassList: 'getClassList'
            })
        },
    }
</script>

<style lang="scss" scoped>
    .classes {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        position: relative;

        &__list {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        &__title {
            font-weight: 300;
            width: 100%;
            height: 72px;
            display: flex;
            align-items: center;
            padding-left: 24px;
            font-size: calc(var(--h1-font-size) - 12px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: var(--text-color-title);
            flex-shrink: 0;
            border-bottom: 1px solid var(--border);
            background: {
                color: var(--bg-main);
                image: var(--bg-title-img);
                position: top left;
                repeat: no-repeat;
            }

            @include media-min($sm) {
                font-size: calc(var(--h1-font-size) - 8px);
            }
        }

        &__filter {
            flex-shrink: 0;
        }

        &__items {
            width: 100%;
            height: 100%;
            overflow: hidden auto;
            border-top: 1px solid var(--border);

            &_body {
                width: 100%;
                padding: 16px 24px;

                &--inner {
                    width: 100%;
                }
            }
        }

        //&.is-selected {
        //    .classes {
        //        &__list {
        //            width: 37%;
        //        }
        //
        //        &__selected {
        //            width: 63%;
        //        }
        //    }
        //}
    }
</style>
