<template>
    <div class="home">
        <div class="home__header">
            <div class="home__search">
                <label class="home__search_input">
                    <span class="home__search_btn--search">
                        <svg-icon icon-name="search"/>
                    </span>

                    <input
                        v-model="search"
                        type="text"
                        name="search"
                        autocomplete="off"
                        spellcheck="false"
                        placeholder="Поиск по сайту"
                    >
                </label>

                <button
                    v-if="!!search"
                    type="button"
                    class="home__search_btn--reset"
                    @click.left.exact.prevent="search = ''"
                >
                    <svg-icon icon-name="close"/>
                </button>
            </div>

            <a
                v-tooltip.bottom-end="'Наши друзья магазин миниатюр Bad Mimic'"
                target="_blank"
                href="https://badmimic.com/?partner=dnd5.club"
                class="home__store"
            >
                <svg-icon icon-name="store"/>

                <span class="home__store_label">Магазин миниатюр</span>
            </a>
        </div>

        <div class="home__links">
            <router-link
                v-for="(link, index) in computedMenuItems"
                :key="index"
                :to="{name: link.name}"
                class="home__link"
            >
                <div class="home__link_icon">
                    <svg-icon :icon-name="`home-menu-${link.name}`"/>
                </div>

                <div class="home__link_name">
                    {{ link.label }}
                </div>
            </router-link>
        </div>

        <!-- TODO: Убрать абсолютные пути на картинки -->
        <div class="home__info">
            <h3 class="home__info_title">
                Есть ли у нас Discord?
            </h3>

            <p>
                Присоединяйтесь, к <a
                    href="https://discord.gg/zqBnMJVf3z"
                    target="_blank"
                >нашему каналу</a> и участвуйте в обсуждение новых функций на сайте.
            </p>

            <p>
                <a
                    href="https://discord.gg/zqBnMJVf3z"
                    class="become-discord-button"
                    target="_blank"
                >
                    <svg-icon
                        icon-name="discord"
                        size="24"
                        :fill-enable="true"
                        :stroke-enable="false"
                    />

                    <span>Discord</span>
                </a>
            </p>
        </div>

        <div class="home__info">
            <h3 class="home__info_title">
                Как нас поддержать?
            </h3>

            <p>
                У нас есть <a
                    href="https://www.patreon.com/dnd5club"
                    target="_blank"
                ><img
                    src="https://dnd5.club/resources/assets/icon/patreon.png"
                    alt="Мы на Patreon"
                    style="height: 12px;"
                > Patreon</a>, а так-же вы
                можете поддержать нашего <b>Мастер Ломастер</b> на <a
                    href="https://boosty.to/dnd5eclub"
                    target="_blank"
                ><img
                    src="https://dnd5.club/resources/assets/icon/boosty.png"
                    alt="Мы на Boosty"
                    style="height: 12px;"
                > Boosty</a> он создает потрясающие карты.
            </p>

            <p>
                <a
                    href="https://www.patreon.com/bePatron?u=64807880"
                    data-patreon-widget-type="become-patron-button"
                    class="become-patron-button"
                    target="_blank"
                >
                    <svg-icon
                        icon-name="patreon"
                        size="24"
                        :fill-enable="true"
                        :stroke-enable="false"
                    />

                    <span>Стать патроном</span>
                </a>
            </p>
        </div>

        <div class="home__info">
            <h3 class="home__info_title">
                Наши друзья:
            </h3>

            <p class="home__info_friends">
                <a
                    v-tooltip="{content: 'Канал расскжет вам о тонкостях и нюансах игры в онлайне. Поможет разобраться с виртуальными столами.<br/> Упростит подготовку к вашей игре. Автоматизирует максимум процессов игровой механики. <br />Всё, чтобы игра стала атмосфернее и интереснее.', html: true}"
                    href="https://www.youtube.com/channel/UCMfMw5ZX4_rZ4rv4TlY8j8g?partner=dnd5.club"
                    class="home__info_friend"
                    target="_blank"
                >
                    <img
                        src="https://dnd5.club/resources/assets/partner/koroz.png"
                        alt="Онлайн ширма"
                    >

                    <span>«Онлайн ширма»</span>
                </a>
                <a
                    v-tooltip="{content: 'Сервер ставит перед собой цель помочь новичкам, интересующимся D&D в Discord сегменте, <br/>а также стремится стать надежной базой для Discord-комьюнити системы D&D.', html: true}"
                    href="https://discord.gg/Vxu2Cu9mbM?partner=dnd5.club"
                    class="home__info_friend"
                    target="_blank"
                >
                    <img
                        src="https://dnd5.club/resources/assets/partner/Empire_tavern.png"
                        alt="Empire Tavern"
                    >

                    <span>Empire Tavern</span>
                </a>
                <a
                    v-tooltip="{content: 'Это клуб ролевых игр Великого Новгорода Студия «Ravenheart». <br />Если ты хочешь круто провести время, то ты пришел по адресу!', html: true}"
                    href="https://vk.com/ravenheart_studio?partner=dnd5.club"
                    class="home__info_friend"
                    target="_blank"
                >
                    <img
                        src="https://dnd5.club/resources/assets/partner/ravenheart_studio.jpg"
                        alt="Студия «Ravenheart»"
                    >

                    <span>Студия «Ravenheart»</span>
                </a>
                <a
                    v-tooltip="{content: 'Сообщество опытного мастера Andy по настольным и ролевым играм, <br />который хочет сделать ваш досуг максимально интересным и доступным.', html: true}"
                    href="https://vk.com/anykeyspb?partner=dnd5.club"
                    class="home__info_friend"
                    target="_blank"
                >
                    <img
                        src="https://dnd5.club/resources/assets/partner/any_key.png"
                        alt="ANY KEY"
                    >

                    <span>ANY KEY</span>
                </a>
                <a
                    v-tooltip="{content: 'Random Rules это канал про настольные ролевые игры. <br />Любите проводить время с друзьями, играя в Dungeons & Dragons? Вам сюда!', html: true}"
                    href="https://vk.com/rrules?partner=dnd5.club"
                    class="home__info_friend"
                    target="_blank"
                >
                    <img
                        src="https://dnd5.club/resources/assets/partner/random_rules.jpg"
                        alt="Random Rules"
                    >

                    <span>Random Rules</span>
                </a>
                <a
                    v-tooltip="{content: 'DiceHead собирает множество информации по Dungeons & Dragons, <br />выкладывает материалы для вдохновения и стремиться поддерживать сообщество НРИ в России.', html: true}"
                    href="https://vk.com/dicehead_dnd?partner=dnd5.club"
                    class="home__info_friend"
                    target="_blank"
                >
                    <img
                        src="https://dnd5.club/resources/assets/partner/dicehead.jpg"
                        alt="DiceHead | D&amp;D"
                    >

                    <span>DiceHead | D&amp;D</span>
                </a>
                <a
                    v-tooltip="{content: 'Короткие авторские приключения для D&amp;D 5e и других систем.', html: true}"
                    href="https://vk.com/ngdnd?partner=dnd5.club"
                    class="home__info_friend"
                    target="_blank"
                >
                    <img
                        src="https://dnd5.club/resources/assets/partner/ngdnd.jpg"
                        alt="Заметки упыря | Короткие приключения | D&amp;D"
                    >

                    <span>Заметки упыря</span>
                </a>
            </p>
        </div>

        <div class="home__info">
            <h3 class="home__info_title">
                Отказ от ответственности
            </h3>

            <p>
                Материалы на данном сайте приведены исключительно в справочных и ознакомительных целях и не заменяют
                необходимость покупки официальных материалов по игре.
            </p>

            <p>
                Весь графический материал и система Dungeons&amp;Dragons является собственностью корпорации Wizards of
                the Coast.
            </p>
        </div>
    </div>
</template>

<script>
    import SvgIcon from '@/components/UI/SvgIcon';
    import { mapActions, mapState } from 'pinia/dist/pinia';
    import { useHomeStore } from '@/store/HomeStore/index.ts';

    export default {
        name: 'HomeView',
        components: { SvgIcon },
        data() {
            return {
                search: ''
            }
        },
        computed: {
            ...mapState(useHomeStore, {
                computedMenuItems: 'computedMenuItems',
            })
        },
    }
</script>

<style lang="scss" scoped>
    .home {
        padding: 16px;
        width: 100%;
        height: 100%;
        overflow: hidden auto;
        z-index: 1;

        @include media-min($sm) {
            padding: 32px;

            &:before {
                content: '';
                display: block;
                position: absolute;
                bottom: 0;
                right: 0;
                width: 700px;
                height: 700px;
                opacity: 0.3;
                z-index: -1;
                background: {
                    image: var(--bg-img-main);
                    repeat: no-repeat;
                    size: contain;
                    position: right bottom;
                };
            }
        }

        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }

        &__search {
            flex: 1;
            border: 1px solid var(--border);
            border-radius: 50px;
            overflow: hidden;
            height: 48px;
            display: flex;
            align-items: center;
            background-color: var(--bg-secondary);

            @include media-min($md) {
                max-width: 40%;
            }

            &_btn {
                &--search,
                &--reset {
                    @include css_anim();

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 46px;
                    width: 46px;
                    padding: 0;
                    color: var(--text-color-title);
                    flex-shrink: 0;
                    background-color: transparent;
                }

                &--search {
                    svg {
                        width: 24px;
                        height: 24px;
                    }
                }

                &--reset {
                    @include media-min($md) {
                        &:hover {
                            color: var(--primary);
                        }
                    }

                    svg {
                        width: 24px;
                        height: 24px;
                    }
                }
            }

            &_input {
                flex: 1;
                height: 100%;
                display: flex;
                cursor: text;
                align-items: center;

                input {
                    width: 100%;
                    height: 100%;
                    border: 0;
                    background-color: transparent;
                    color: var(--text-color);
                    padding: 0;
                    font: {
                        weight: 300;
                        size: 16px;
                    };
                }
            }
        }

        &__store {
            @include css_anim();

            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 1px solid var(--border);
            width: 48px;
            height: 48px;
            background-color: var(--hover);
            flex-shrink: 0;
            margin-left: 16px;
            color: var(--primary);

            @include media-min($md) {
                width: auto;
                border-radius: 32px;
                padding: 8px 16px;
            }

            svg {
                display: block;
                width: 28px;
                height: 28px;
            }

            &_label {
                @include css_anim();

                display: none;
                color: var(--text-color-title);
                font-weight: 300;
                font-size: 16px;
                margin-left: 8px;

                @include media-min($md) {
                    display: inline-block;
                }
            }

            @include media-min($md) {
                &:hover {
                    @include css_anim();

                    color: var(--text-btn-color);
                    background-color: var(--primary-hover);
                    border-color: var(--primary-hover);

                    .home {
                        &__store {
                            &_label {
                                color: var(--text-btn-color);
                            }
                        }
                    }
                }
            }
        }

        &__links {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 16px;
            margin-top: 32px;

            @include media-min($sm) {
                grid-template-columns: repeat(3, 1fr);
            }

            @include media-min($md) {
                grid-template-columns: repeat(4, 1fr);
            }

            @include media-min($xl) {
                display: flex;
                flex-wrap: wrap;
                grid-template-columns: initial;
            }
        }

        &__link {
            @include css_anim();

            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 12px;
            border-radius: 16px;
            background-color: var(--bg-secondary);
            text-decoration: none;
            color: var(--text-color);

            @include media-min($xl) {
                min-width: calc((100% - 16px * 7) / 8);
                max-width: calc((100% - 16px * 3) / 4);
                flex: 1;
            }

            &_icon {
                @include css_anim();

                display: flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px;
                color: var(--primary);

                @include media-min($sm) {
                    width: 50px;
                    height: 50px;
                }
            }

            &_name {
                font: {
                    weight: 300;
                    family: Open Sans, serif;
                    size: calc(var(--h4-font-size) - 6px);
                };
                line-height: 16px;
                text-align: center;
                margin-top: 8px;
            }

            @include media-min($md) {
                &:hover {
                    color: var(--text-color-active);
                    background-color: var(--bg-sub-menu);

                    .home {
                        &__link {
                            &_icon {
                            }
                        }
                    }
                }
            }
        }

        &__info {
            margin-top: 48px;

            p {
                margin-top: 8px;
            }

            &_firends {
                display: flex;
                flex-wrap: wrap;
            }

            &_friend {
                @include css_anim();

                display: inline-flex;
                align-items: center;
                justify-content: flex-start;
                margin: 8px 8px 0 0;
                padding: 8px;
                border-radius: 8px;
                background-color: var(--bg-secondary);
                color: var(--text-color);
                font-weight: 400;
                text-decoration: none;

                img {
                    width: 20px;
                    height: 20px;
                    overflow: hidden;
                    display: inline-block;
                    border-radius: 50%;
                    border: 1px solid var(--border);
                    object-fit: cover;

                    & + span {
                        margin-left: 4px;
                    }
                }

                @include media-min($md) {
                    &:hover {
                        @include css_anim();

                        color: var(--text-btn-color);
                        background-color: var(--primary-active);
                    }
                }
            }
        }
    }
</style>
