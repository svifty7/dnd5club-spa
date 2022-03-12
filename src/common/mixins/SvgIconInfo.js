export default {
    props: {
        size: {
            type: [Number, String],
            default: 16
        },
    },
    computed: {
        style() {
            return {
                width: `${ this.size }px`,
                height: `${ this.size }px`,
            };
        },
    },
}
