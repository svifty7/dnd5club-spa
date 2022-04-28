<template>
    <content-layout :show-right-side="$route.name === 'raceDetail'">
        <template #filter>
            <list-filter>
                <filter-item-source/>

                <filter-item-checkboxes name="Кость хитов"/>
            </list-filter>
        </template>

        <template #items>
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
                    :to="{ path: el.url }"
                    :race-item="el"
                />
            </div>
        </template>
    </content-layout>
</template>

<script>
    import ListFilter from '@/components/filter/ListFilter';
    import FilterItemSource from '@/components/filter/FilterItem/FilterItemSource';
    import FilterItemCheckboxes from '@/components/filter/FilterItem/FilterItemCheckboxes';
    import { mapState } from 'pinia/dist/pinia';
    import RaceItem from '@/views/CharacterViews/Races/RaceItem';
    import { useRacesStore } from '@/store/Character/RacesStore';
    import ContentLayout from '@/components/content/ContentLayout';

    export default {
        name: 'RacesView',
        components: {
            ContentLayout,
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
