<template>
    <default-layout/>
</template>

<script>
    import DefaultLayout from '@/views/_layout/DefaultLayout';
    import { mapActions, mapState } from 'pinia/dist/pinia';
    import { useUIStore } from '@/store/UIStore';

    export default {
        name: 'App',
        components: {
            DefaultLayout
        },
        computed: {
            ...mapState(useUIStore, {
                theme: 'getTheme',
            }),
        },
        mounted() {
            this.setTheme();
        },
        methods: {
            ...mapActions(useUIStore, {
                setTheme: 'setTheme'
            })
        }
    };
</script>
