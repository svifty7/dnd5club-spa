<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
    class="svg-icon"
    viewBox="0 0 16 16"
    aria-hidden="true"
    role="img"
  >
    <use :xlink:href="svg"/>
  </svg>
</template>

<script>
  import '@/common/utils/SvgRequire.ts';

  export default {
    name: 'SvgIcon',
    props: {
      iconName: {
        type: String,
        required: true,
      },
      size: {
        type: [Number, String],
        default: 16,
      },
    },
    computed: {
      svg() {
        return `#icon-${this.iconName}`;
      },

      style() {
        return {
          width: `${this.size}px`,
          height: `${this.size}px`,
        };
      },
    },
  };
</script>

<style lang="scss">
  .svg-icon {
    overflow: hidden;
    fill: currentColor;
    flex-shrink: 0;
    display: block;
  }
</style>
