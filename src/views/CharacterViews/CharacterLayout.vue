<template>
    <div class="character-layout">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'CharacterLayout'
    }
</script>

<style lang="scss" scoped>
    .character-layout {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
