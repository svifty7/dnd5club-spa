<template>
    <div class="race-detail">
        <section-header
            :title="currentRace.name.rus"
            :subtitle="currentRace.name.eng"
            :copy="urlForCopy"
            :level="2"
            fullscreen
        />
    </div>
</template>

<script>
    import SectionHeader from '@/components/SectionHeader';
    import { useRacesStore } from '@/store/CharacterStore/RacesStore';

    export default {
        name: 'RaceDetail',
        components: { SectionHeader },
        async beforeRouteUpdate(to, from, next) {
            this.loading = true;

            const store = useRacesStore();

            store.deselectRace();
            store.raceInfoQuery(to.params.raceName, to.params?.subrace)
                .then(() => {
                    this.loading = false;
                    this.setTab(0);

                    next();
                })
                .catch(err => {
                    console.error(err)
                });
        },
        data: () => ({
            raceStore: useRacesStore(),
            loading: false,
        }),
        computed: {
            currentRace() {
                return this.raceStore.getCurrentRace;
            },

            urlForCopy() {
                return window.location.origin + this.$route.fullPath
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>

</style>
