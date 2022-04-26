<template>
    <div class="classes">
        <div class="classes__list">
            <div class="classes__filter">
                <list-filter>
                    <filter-item-source/>

                    <filter-item-checkboxes name="Кость хитов"/>
                </list-filter>
            </div>

            <div class="classes__items">
                <div
                    v-masonry="'classes-items'"
                    transition-duration="0.15s"
                    class="classes__items_body"
                    item-selector=".class-item"
                    gutter="16"
                    percent-position="true"
                    horizontal-order="true"
                >
                    <class-item
                        v-for="(el, key) in getClasses"
                        :key="key"
                        :to="{ name: 'classDetail', params: { className: el.name.url } }"
                        :class-item="el"
                    />
                </div>
            </div>
        </div>

        <div
            v-if="$route.name === 'classDetail'"
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
    import FilterItemCheckboxes from '@/components/filter/FilterItem/FilterItemCheckboxes';
    import { useClassesStore } from '@/store/Character/ClassesStore';
    import { mapState } from 'pinia/dist/pinia';

    export default {
        name: 'ClassesView',
        components: {
            FilterItemCheckboxes,
            FilterItemSource,
            ListFilter,
            ClassItem,
        },
        async beforeRouteEnter() {
            const store = useClassesStore();

            await store.initClassList();
        },
        computed: {
            ...mapState(useClassesStore, ['getClasses', 'getCurrentClass']),
        },
    }
</script>

<style lang="scss" scoped>
    .classes {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        position: relative;
        padding: 24px;

        &__list {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        &__filter {
            flex-shrink: 0;
        }

        &__items,
        &__body {
            width: 100%;
        }

        &__items {
            margin-top: 24px;
        }
    }
</style>
