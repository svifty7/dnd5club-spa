<template>
    <div class="layout">
        <nav-bar/>

        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import NavBar from '@/components/navigation/NavBar';

    export default {
        name: 'DefaultLayout',
        components: { NavBar }
    }
</script>

<style lang="scss" scoped>
    .layout {
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
