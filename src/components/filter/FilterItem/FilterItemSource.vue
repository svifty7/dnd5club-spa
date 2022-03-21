<template>
    <div class="filter-item">
        <div class="filter-item__header">
            <div
                class="filter-item__trigger"
                @click.left.exact.prevent="opened = !opened"
            >
                <div class="filter-item__name">
                    Источники
                </div>

                <button
                    type="button"
                    class="filter-item__button filter-item__button--toggle"
                    @click.self.left.exact.prevent="opened = !opened"
                >
                    <svg-icon icon-name="arrow-stroke"/>
                </button>
            </div>

            <button
                type="button"
                class="filter-item__button filter-item__button--reset"
            >
                <svg-icon icon-name="close"/>
            </button>
        </div>

        <div
            v-if="opened"
            class="filter-item__body"
        >
            <div class="filter-item__source-group">
                <div class="filter-item__source-group_body">
                    <field-checkbox tooltip="Player's Handbook">
                        PHB
                    </field-checkbox>

                    <field-checkbox tooltip="Tasha's Cauldron of Everything">
                        TCE
                    </field-checkbox>

                    <field-checkbox tooltip="Dungeon master's guide">
                        DMG
                    </field-checkbox>

                    <field-checkbox tooltip="Xanathar's Guide to Everything">
                        XGE
                    </field-checkbox>

                    <field-checkbox tooltip="Fizban's Treasury of Dragons">
                        FTD
                    </field-checkbox>
                </div>
            </div>

            <div class="filter-item__source-group">
                <div class="filter-item__source-group_head">
                    <div class="filter-item__source-group_name">
                        Сеттинги
                    </div>

                    <field-checkbox type="toggle"/>
                </div>

                <div class="filter-item__source-group_body">
                    <field-checkbox tooltip="Player's Handbook">
                        PHB
                    </field-checkbox>

                    <field-checkbox tooltip="Tasha's Cauldron of Everything">
                        TCE
                    </field-checkbox>

                    <field-checkbox tooltip="Dungeon master's guide">
                        DMG
                    </field-checkbox>

                    <field-checkbox tooltip="Xanathar's Guide to Everything">
                        XGE
                    </field-checkbox>

                    <field-checkbox tooltip="Fizban's Treasury of Dragons">
                        FTD
                    </field-checkbox>
                </div>
            </div>

            <div class="filter-item__source-group">
                <div class="filter-item__source-group_head">
                    <div class="filter-item__source-group_name">
                        Homebrew
                    </div>

                    <field-checkbox type="toggle"/>
                </div>

                <div class="filter-item__source-group_body">
                    <field-checkbox tooltip="Player's Handbook">
                        PHB
                    </field-checkbox>

                    <field-checkbox tooltip="Tasha's Cauldron of Everything">
                        TCE
                    </field-checkbox>

                    <field-checkbox tooltip="Dungeon master's guide">
                        DMG
                    </field-checkbox>

                    <field-checkbox tooltip="Xanathar's Guide to Everything">
                        XGE
                    </field-checkbox>

                    <field-checkbox tooltip="Fizban's Treasury of Dragons">
                        FTD
                    </field-checkbox>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SvgIcon from '@/components/UI/SvgIcon';
    import FieldCheckbox from '@/components/UI/FieldType/FieldCheckbox';

    export default {
        name: 'FilterItemSource',
        components: {
            FieldCheckbox,
            SvgIcon
        },
        props: {
            options: {
                type: Object,
                default: () => ({})
            }
        },
        data: () => ({
            opened: true
        })
    }
</script>

<style lang="scss" scoped>
    @import "FilterItem.module";

    .filter-item {
        border-color: var(--primary);

        &__body {
            flex-direction: column;
            flex-wrap: nowrap;
            gap: initial;
        }

        &__source-group {
            & + & {
                margin-top: 16px;
            }

            &_head {
                display: flex;
                align-items: center;
                cursor: default;

                & + .filter-item {
                    &__source-group {
                        &_body {
                            margin-top: 4px;
                        }
                    }
                }
            }

            &_name {
                display: flex;
                flex: 1;
                align-items: center;
                padding-right: 8px;

                &:after {
                    content: '';
                    display: block;
                    flex: 1;
                    height: 1px;
                    background-color: var(--border);
                    margin-left: 8px;
                }
            }

            &_body {
                display: flex;
                gap: 4px;
                flex-wrap: wrap;
            }
        }
    }
</style>
