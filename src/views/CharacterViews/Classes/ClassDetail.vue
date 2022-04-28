<template>
    <div
        v-if="!loading"
        class="class-detail"
    >
        <section-header
            :title="currentClass.name.rus"
            :subtitle="currentClass.name.eng"
            :copy="urlForCopy"
            :close="closeClass"
            fullscreen
        />

        <div class="class-detail__tabs">
            <button
                v-for="(tab, tabKey) in currentClass.tabs"
                :key="tabKey"
                class="class-detail__tab"
                :class="{ 'is-active': currentTab.name === tab.name }"
                @click.left.exact.prevent="setTab(tabKey)"
            >
                <span class="class-detail__tab_icon">
                    <svg-icon :icon-name="tab.icon"/>
                </span>

                <span class="class-detail__tab_name">
                    {{ tab.name }}
                </span>
            </button>
        </div>

        <div class="class-detail__body">
            {{ currentTab?.name }}
        </div>
    </div>

    <div
        v-else
        class="class-detail"
    >
        <div class="class-detail__loader">
            <div class="class-detail__loader_img">
                <img
                    :src="require('@/assets/img/loader.png')"
                    alt=""
                >
            </div>
        </div>
    </div>
</template>

<script>
    import { useClassesStore } from '@/store/Character/ClassesStore.ts';
    import SectionHeader from '@/components/SectionHeader';
    import SvgIcon from '@/components/UI/SvgIcon';

    export default {
        name: 'ClassDetail',
        components: {
            SvgIcon,
            SectionHeader
        },
        beforeRouteUpdate(to, from, next) {
            this.loading = true;

            const store = useClassesStore();

            store.deselectClass();
            store.setClassInfo(to.params.className, to.params?.classArchetype)
                .then(() => {
                    this.loading = false;
                    this.setTab(0);

                    next();
                })
                .catch(err => {
                    console.log(err)
                });
        },
        data: () => ({
            classesStore: useClassesStore(),
            loading: false,
            currentTab: undefined
        }),
        computed: {
            urlForCopy() {
                return window.location.origin + this.$route.fullPath
            },

            currentClass() {
                return this.classesStore.getCurrentClass
            }
        },
        beforeMount() {
            this.setTab(0);
        },
        methods: {
            closeClass() {
                this.$router.push({ name: 'classes' });
            },

            setTab(index) {
                this.currentTab = this.currentClass.tabs[index];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .class-detail {
        overflow: hidden;
        width: 100%;
        height: 100%;
        background-color: var(--bg-secondary);

        &__loader {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            &_img {
                width: 70%;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;

                &:before {
                    content: '';
                    display: block;
                    width: 100%;
                    padding-bottom: 100%;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    position: absolute;
                    filter: drop-shadow(0 0 12px var(--bg-main));
                }
            }
        }

        &__tabs {
            display: flex;
            width: 100%;
            overflow: auto;
            border: {
                width: 1px 0;
                style: solid;
                color: var(--border);
            };
        }

        &__tab {
            @include css_anim();

            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 1 100%;
            min-width: fit-content;
            padding: 0 64px;
            cursor: pointer;
            height: 46px;

            & + & {
                border-left: 1px solid var(--border);
            }

            &_icon {
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                color: var(--primary);
            }

            &_name {
                color: var(--text-color);
                margin-left: 16px;
                white-space: nowrap;
                font-size: var(--main-font-size);
            }

            @include media-min($md) {
                &:hover {
                    background-color: var(--bg-sub-menu);
                }
            }

            &.is-active {
                background-color: var(--primary-active);

                .class-detail__tab {
                    &_icon,
                    &_name {
                        color: var(--text-btn-color);
                    }
                }
            }
        }
    }
</style>
