<template>
    <div class="class-detail">
        CLASS
    </div>
</template>

<script>
    import { useClassesStore } from '@/store/ClassesStore/index.ts';
    import { mapState } from 'pinia/dist/pinia';

    export default {
        name: 'ClassDetail',
        computed: {
            ...mapState(useClassesStore, {
                classList: 'computedClassList',
                currentClass: 'currentClass'
            }),
            //
            // currentClass() {
            //     return this.classList.find(classItem => classItem.name.url === this.$route.params.className);
            // }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => vm.setCurrentClass(to.params.className))
        },
        beforeRouteUpdate(to, from, next) {
            next(vm => vm.setCurrentClass(to.params.className))
        },
        methods: {
            async setCurrentClass(urlName) {
                const store = useClassesStore();

                store.setCurrentClass(urlName);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
