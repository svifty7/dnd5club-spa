<template>
    <div
        class="section-header"
        :style="{backgroundImage: bgImage}"
    >
        <div class="section-header__body">
            <div class="section-header__title">
                <div class="section-header__title--text">
                    {{ title }}
                </div>

                <button
                    v-if="copy"
                    class="section-header__title--copy"
                    @click.left.exact.prevent.stop="copyText"
                >
                    <svg-icon icon-name="copy"/>
                </button>
            </div>

            <div
                v-if="subtitle"
                class="section-header__subtitle"
            >
                {{ subtitle }}
            </div>
        </div>

        <div
            v-if="hasControls"
            class="section-header__controls"
        >
            <div
                v-if="hasOptionalControls"
                class="section-header__controls--optional"
            >
                <button
                    v-if="print"
                    type="button"
                    class="section-header__control--optional is-only-desktop"
                    @click.left.exact.prevent.stop="openPrintWindow"
                >
                    <svg-icon icon-name="print"/>
                </button>

                <button
                    v-if="exportFoundry"
                    type="button"
                    class="section-header__control--optional is-only-desktop"
                >
                    <svg-icon icon-name="export-foundry"/>
                </button>
            </div>

            <div
                v-if="hasMainControls"
                class="section-header__controls--main"
            >
                <button
                    v-if="fullscreen"
                    type="button"
                    class="section-header__control--main is-only-desktop"
                >
                    <svg-icon icon-name="fullscreen"/>
                </button>

                <button
                    v-if="fullscreen"
                    type="button"
                    class="section-header__control--main is-only-desktop"
                >
                    <svg-icon icon-name="exit-fullscreen"/>
                </button>

                <button
                    v-if="close"
                    type="button"
                    class="section-header__control--main"
                    @click.left.exact.prevent.stop="close()"
                >
                    <svg-icon icon-name="close"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import SvgIcon from '@/components/UI/SvgIcon';

    export default {
        name: 'SectionHeader',
        components: { SvgIcon },
        props: {
            level: {
                type: [String, Number],
                default: 1,
                validator: value => {
                    if (typeof Number(value) !== 'number') {
                        return false;
                    }

                    const availLevels = [1, 2];

                    return availLevels.includes(Number(value))
                }
            },
            title: {
                type: String,
                required: true
            },
            subtitle: {
                type: String,
                default: ''
            },
            copy: {
                type: String,
                default: ''
            },
            print: {
                type: Boolean,
                default: false
            },
            exportFoundry: {
                type: Boolean,
                default: false
            },
            fullscreen: {
                type: Boolean,
                default: false
            },
            close: {
                type: Function,
                default: undefined
            }
        },
        emits: ['close'],
        computed: {
            bgImage() {
                switch (Number(this.level)) {
                    case 2:
                        return 'var(--bg-title-img-2)';

                    default:
                        return 'var(--bg-title-img)';
                }
            },

            hasOptionalControls() {
                return !!this.print || !!this.exportFoundry;
            },

            hasMainControls() {
                return !!this.close || !!this.fullscreen;
            },

            hasControls() {
                return !!this.hasOptionalControls || !!this.hasMainControls
            }
        },
        methods: {
            async copyText() {
                if (navigator.clipboard) {
                    try {
                        await navigator.clipboard.writeText(this.copy);

                        return;
                    } catch (err) {
                        console.error(err)
                    }
                }

                const field = document.body.appendChild(document.createElement('input'));

                field.value = this.copy;

                field.focus();
                field.select();

                document.execCommand('copy');

                field.parentNode.removeChild(field);
            },

            openPrintWindow() {
                window.print()
            },
        }
    }
</script>

<style lang="scss" scoped>
    .section-header {
        width: 100%;
        height: 72px;
        display: flex;
        align-items: center;
        overflow: hidden;
        flex-shrink: 0;
        background: {
            color: var(--bg-main);
            position: center left;
            repeat: no-repeat;
        }

        &__body {
            padding: 0 16px;
            flex: 1 1 100%;

            @include media-min($md) {
                padding-left: 24px;
            }
        }

        &__title {
            display: flex;
            align-items: center;
            width: fit-content;

            &--text {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: var(--text-color-title);
                font-weight: 300;
                line-height: 32px;
                font-size: calc(var(--h1-font-size) - 12px);
                display: inline;

                @include media-min($md) {
                    font-size: calc(var(--h1-font-size) - 16px);
                }
            }

            &--copy {
                @include css_anim();

                display: none;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                margin-left: 16px;
                padding: 4px;
                border-radius: 8px;
                color: var(--primary);
                background-color: transparent;
                cursor: pointer;
                flex-shrink: 0;
                transform: translateY(2px);

                @include media-min($md) {
                    display: flex;

                    &:hover {
                        background-color: var(--primary-hover);
                        color: var(--text-btn-color);
                    }
                }
            }
        }

        &__subtitle {
            font-size: calc(var(--h2-font-size) - 14px);
            color: var(--text-g-color);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 400;
        }

        &__controls {
            margin-left: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;

            &--main,
            &--optional {
                display: flex;
                align-items: center;
                flex-shrink: 0;
            }
        }

        &__control {
            &--main,
            &--optional {
                @include css_anim();

                display: flex;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                cursor: pointer;
                color: var(--primary);

                &.is-only-desktop {
                    display: none;
                }

                @include media-min($md) {
                    &.is-only-desktop {
                        display: flex;
                    }

                    &:hover {
                        background-color: var(--primary-hover);
                        color: var(--text-btn-color);
                    }
                }
            }

            &--main {
                background-color: var(--bg-secondary);
                border-left: 1px solid var(--border);
                height: 72px;
                padding: 24px;
                flex: 1 0 73px;
            }

            &--optional {
                width: 48px;
                height: 48px;
                padding: 12px;
                border-radius: 8px;
                background-color: transparent;
                flex: 1 0 48px;
                margin-right: 8px;
            }
        }
    }
</style>
