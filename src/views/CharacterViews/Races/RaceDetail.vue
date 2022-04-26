<template>
    <div class="class-detail">
        <section-header
            :title="title"
            :subtitle="subtitle"
            :copy="urlForCopy"
            :level="2"
            fullscreen
        />
    </div>
</template>

<script>
    import { useClassesStore } from '@/store/Character/ClassesStore.ts';
    import { mapActions, mapState } from 'pinia/dist/pinia';
    import SectionHeader from '@/components/SectionHeader';

    export default {
        name: 'RaceDetail',
        components: { SectionHeader },
        async beforeRouteUpdate(to) {
            try {
                await this.setClassInfo(to.params.className, to.params?.classArchetype);
            } catch (err) {
                await this.$router.push({ name: 'NotFound' })
            }
        },
        computed: {
            ...mapState(useClassesStore, {
                currentClass: 'getCurrentClass',
                currentArchetype: 'getCurrentArchetype'
            }),

            title() {
                if (this.$route.name === 'classArchetype') {
                    return `${this.currentClass.name.rus} ${this.currentArchetype.name.rus}`;
                }

                return this.currentArchetype.name.rus
            },

            subtitle() {
                if (this.$route.name === 'classArchetype') {
                    return `${this.currentClass.name.eng} ${this.currentArchetype.name.eng}`;
                }

                return this.currentArchetype.name.eng
            },

            urlForCopy() {
                return window.location.origin + this.$route.fullPath
            }
        },
        methods: {
            ...mapActions(useClassesStore, ['setCurrentClass']),
        }
    }
</script>

<style lang="scss" scoped>

</style>
