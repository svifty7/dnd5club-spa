<template>
    <div class="spells">
        <div class="spells__list">
            <div class="spells__title">
                Классы
            </div>

            <div class="spells__filter">
                <list-filter>
                    <filter-item-source/>

                    <filter-item-checkboxes name="Кость хитов"/>
                </list-filter>
            </div>

            <div class="spells__items">
                <div class="spells__items_body">
                    <div class="spells__items_body--inner">
                        <spell-item
                            v-for="(el, key) in computedSpells"
                            :key="key"
                            :spell-item="el"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div
            v-if="false"
            class="spells__detail"
        >
            spells detail
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'pinia/dist/pinia';
    import { useSpellsStore } from '@/store/SpellsStore/SpellsStore';
    import ListFilter from '@/components/filter/ListFilter';
    import FilterItemSource from '@/components/filter/FilterItem/FilterItemSource';
    import FilterItemCheckboxes from '@/components/filter/FilterItem/FilterItemCheckboxes';
    import SpellItem from '@/views/SpellViews/Spells/SpellItem';

    export default {
        name: 'SpellsView',
        components: {
            SpellItem,
            FilterItemCheckboxes,
            FilterItemSource,
            ListFilter
        },
        data: () => ({}),
        computed: {
            ...mapState(useSpellsStore, {
                computedSpells: 'computedSpells',
                currentSpell(store) {
                    return store.currentSpell
                }
            }),
        },
        beforeMount() {
            this.getSpellList()
        },
        methods: {
            ...mapActions(useSpellsStore, {
                getSpellList: 'getSpellList'
            }),

            getRouterLinkInfo(el) {
                return {
                    name: 'spellDetail',
                    params: {
                        spellName: el.englishName.replaceAll(' ', '_')
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .spells {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        position: relative;

        &__list {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        &__title {
            font-weight: 300;
            width: 100%;
            height: 72px;
            display: flex;
            align-items: center;
            padding-left: 24px;
            font-size: calc(var(--h1-font-size) - 12px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: var(--text-color-title);
            flex-shrink: 0;
            border-bottom: 1px solid var(--border);
            background: {
                color: var(--bg-main);
                image: var(--bg-title-img);
                position: top left;
                repeat: no-repeat;
            }

            @include media-min($sm) {
                font-size: calc(var(--h1-font-size) - 8px);
            }
        }

        &__filter {
            flex-shrink: 0;
        }

        &__items {
            width: 100%;
            height: 100%;
            overflow: hidden auto;
            border-top: 1px solid var(--border);

            &_body {
                width: 100%;
                padding: 16px 24px;

                &--inner {
                    width: 100%;
                }
            }
        }
    }
</style>
