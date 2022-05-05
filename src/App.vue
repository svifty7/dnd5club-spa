<template>
    <div
        id="dnd5club"
        class="dnd5club"
    >
        <nav-bar/>

        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'pinia/dist/pinia';
    import { useUIStore } from '@/store/UIStore/UIStore';
    import NavBar from '@/components/navigation/NavBar';

    export default {
        name: 'App',
        components: {
            NavBar,
        },
        computed: {
            routeInfo() {
                return this.$route
            }
        },
        mounted() {
            this.setTheme();

            document.documentElement.style.setProperty('--max-vh', `${ window.innerHeight }px`);

            window.addEventListener('resize', () => {
                document.documentElement.style.setProperty('--max-vh', `${ window.innerHeight }px`);
            });
        },
        methods: {
            ...mapActions(useUIStore, ['setTheme']),
        }
    };
</script>

<style lang="scss" scoped>
    .dnd5club {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;

        @include media-min($md) {
            flex-direction: row;
        }

        .content {
            width: 100%;
            position: relative;
            max-width: 1320px;
            margin: 0 auto;
        }
    }
</style>
