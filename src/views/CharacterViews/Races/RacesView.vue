<template>
    <div class="races">
        <div class="races__list">
            <div class="races__filter">
                <list-filter>
                    <filter-item-source/>

                    <filter-item-checkboxes name="Кость хитов"/>
                </list-filter>
            </div>

            <div class="races__items">
                <div class="races__items_body">
                    <div
                        v-masonry="'races-items'"
                        transition-duration="0.15s"
                        class="races__items_body--inner"
                        item-selector=".race-item"
                        gutter="16"
                        percent-position="true"
                        horizontal-order="true"
                    >
                        <race-item
                            v-for="(el, key) in getRaces"
                            :key="key"
                            :to="{ name: 'raceDetail', params: { raceName: el.name.url } }"
                            :race-item="el"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div
            v-if="false"
            class="races__selected"
        >
            <router-view/>
        </div>
    </div>
</template>

<script>
    import ListFilter from '@/components/filter/ListFilter';
    import FilterItemSource from '@/components/filter/FilterItem/FilterItemSource';
    import FilterItemCheckboxes from '@/components/filter/FilterItem/FilterItemCheckboxes';
    import { mapState } from 'pinia/dist/pinia';
    import RaceItem from '@/views/CharacterViews/Races/RaceItem';
    import { useRacesStore } from '@/store/Character/RacesStore';

    export default {
        name: 'RacesView',
        components: {
            RaceItem,
            FilterItemCheckboxes,
            FilterItemSource,
            ListFilter,
        },
        async beforeRouteEnter() {
            const store = useRacesStore();

            await store.initRaceList();
        },
        computed: {
            ...mapState(useRacesStore, ['getRaces', 'getCurrentRace']),
        },
    }
</script>

<style lang="scss" scoped>
    .races {
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
