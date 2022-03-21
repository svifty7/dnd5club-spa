<template>
    <div class="filter-item">
        <div class="filter-item__header">
            <div
                class="filter-item__trigger"
                @click.left.exact.prevent="opened = !opened"
            >
                <div class="filter-item__name">
                    {{ name }}
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
            <field-checkbox>
                1d6
            </field-checkbox>

            <field-checkbox>
                1d8
            </field-checkbox>

            <field-checkbox>
                1d10
            </field-checkbox>

            <field-checkbox>
                1d12
            </field-checkbox>
        </div>
    </div>
</template>

<script>
    import SvgIcon from '@/components/UI/SvgIcon';
    import FieldCheckbox from '@/components/UI/FieldType/FieldCheckbox';

    export default {
        name: 'FilterItemCheckboxes',
        components: {
            FieldCheckbox,
            SvgIcon
        },
        props: {
            name: {
                type: String,
                default: '',
                required: true
            },
            options: {
                type: Object,
                default: () => ({})
            }
        },
        data: () => ({
            opened: false
        })
    }
</script>

<style lang="scss" scoped>
    @import "FilterItem.module";
</style>
