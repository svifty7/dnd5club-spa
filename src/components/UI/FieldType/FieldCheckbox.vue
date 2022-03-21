<template>
    <label
        v-if="type === 'crumb'"
        class="field-checkbox field-checkbox--crumb"
    >
        <input
            type="checkbox"
            :value="value"
            @change.prevent="$emit('change')"
        >

        <span
            v-tooltip="tooltip"
            class="field-checkbox__label"
        >
            <slot/>
        </span>
    </label>

    <label
        v-else-if="type === 'toggle'"
        class="field-checkbox field-checkbox--toggle"
    >
        <input
            type="checkbox"
            :value="value"
            @change.prevent="$emit('change')"
        >

        <span class="field-checkbox__faker"/>

        <span
            v-if="$slots.default"
            class="field-checkbox__label"
        >
            <slot/>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'FieldCheckbox',
        props: {
            value: {
                type: Boolean,
                default: false,
            },

            type: {
                type: String,
                default: 'crumb',
                validator: value => ['crumb', 'toggle'].includes(value)
            },

            tooltip: {
                type: String,
                default: ''
            }
        },
        emits: ['change']
    }
</script>

<style lang="scss" scoped>
    .field-checkbox {
        cursor: pointer;

        input {
            display: none;
            opacity: 0;
        }

        &--crumb {
            display: inline-block;
            width: fit-content;

            .field-checkbox {
                &__label {
                    @include css_anim();

                    display: inline-block;
                    padding: 4px 8px;
                    border-radius: 4px;
                    background-color: var(--hover);
                    color: var(--text-color);
                }
            }

            input {
                &:not(:checked) {
                    & + .field-checkbox {
                        &__label {
                            @include media-min($md) {
                                &:hover {
                                    background-color: var(--primary-hover);
                                    color: var(--text-btn-color);
                                }
                            }
                        }
                    }
                }

                &:checked {
                    & + .field-checkbox {
                        &__label {
                            @include css_anim();

                            display: inline-block;
                            padding: 4px 8px;
                            border-radius: 4px;
                            background-color: var(--primary-active);
                            color: var(--text-btn-color);
                        }
                    }
                }
            }
        }

        &--toggle {
            display: inline-flex;

            .field-checkbox {
                &__faker {
                    @include css_anim();

                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    width: 34px;
                    height: 20px;
                    border: 2px solid transparent;
                    background-color: var(--hover);
                    border-radius: 26px;
                    padding: 1px;
                    flex-shrink: 0;

                    &:after {
                        @include css_anim();

                        content: '';
                        display: block;
                        border-radius: 50%;
                        background-color: var(--text-btn-color);
                        width: 14px;
                        height: 14px;
                    }
                }
            }

            @include media-min($md) {
                &:hover {
                    .field-checkbox {
                        &__faker {
                            border-color: #aef;
                        }
                    }
                }
            }

            input {
                &:checked {
                    & + .field-checkbox {
                        &__faker {
                            background-color: var(--primary);

                            &:after {
                                transform: translateX(100%);
                            }
                        }
                    }
                }
            }
        }
    }
</style>
