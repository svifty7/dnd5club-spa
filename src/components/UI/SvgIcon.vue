<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :style="style"
        class="svg-icon"
        :class="classList"
        viewBox="0 0 16 16"
        aria-hidden="true"
        role="img"
    >
        <use :xlink:href="svg"/>
    </svg>
</template>

<script>
    import '@/common/utils/SvgRequire.ts';
    import SvgIconInfo from '@/common/mixins/SvgIconInfo';

    export default {
        name: 'SvgIcon',
        mixins: [SvgIconInfo],
        props: {
            iconName: {
                type: String,
                required: true,
            },
            strokeEnable: {
                type: Boolean,
                default: true
            },
            fillEnable: {
                type: Boolean,
                default: false
            },
        },
        computed: {
            svg() {
                return `#icon-${ this.iconName }`;
            },

            classList() {
                return {
                    'svg-color--stroke': !this.fillEnable,
                    'svg-color--fill': this.fillEnable && !this.strokeEnable,
                    'svg-color': this.fillEnable && this.strokeEnable
                }
            }
        }
    };
</script>

<style lang="scss">
    .svg-icon {
        overflow: hidden;
        flex-shrink: 0;
        display: block;

        &.svg-color {
            stroke: currentColor;
            fill: currentColor;

            &--stroke {
                stroke: currentColor;
                fill: none;
            }

            &--fill {
                fill: currentColor;
                stroke: none;
            }
        }
    }
</style>
