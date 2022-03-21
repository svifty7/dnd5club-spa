import { defineStore } from 'pinia';
import { ICharacterClass } from '@/types/ClassJson';

interface IState {
    classes: ICharacterClass[]
    selectedClass: ICharacterClass | undefined
}

// eslint-disable-next-line import/prefer-default-export
export const useClassesStore = defineStore('ClassesStore', {
    state: (): IState => ({
        classes: [],
        selectedClass: undefined
    }),

    getters: {
        computedClassList: state => state.classes,
        currentClass: state => state.selectedClass
    },

    actions: {
        getClassList(): Promise<void> {
            return new Promise(resolve => {
                this.classes = [{
                    name: {
                        rus: 'Бард',
                        eng: 'Bard',
                        url: 'Bard'
                    },
                    book: 'PHB',
                    svg: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12 57L15 60M27 42L51 18M51 18L54 21M51 18L51 15.4142C51 15.149 51.1054 14.8946 51.2929 14.7071L59.7071 6.29289C59.8946 6.10536 60.149 6 60.4142 6H62.5858C62.851 6 63.1054 6.10536 63.2929 6.29289L65.7071 8.70711C65.8946 8.89464 66 9.149 66 9.41421V11.5858C66 11.851 65.8946 12.1054 65.7071 12.2929L57.2929 20.7071C57.1054 20.8946 56.851 21 56.5858 21H54M54 21L39 36M55.5 13.5L51 9M58.5 10.5L54 6M8.99996 63C3.00004 57 5.99975 48 13.4999 40.5C21.0001 33 28.5 34.5 33 39.0001C37.4999 43.5001 38.9999 51 31.4999 58.5C23.9999 66 14.9999 69 8.99996 63ZM25.5 51V51C25.5 48.5147 23.4853 46.5 21 46.5V46.5C18.5147 46.5 16.5 48.5147 16.5 51V51C16.5 53.4853 18.5147 55.5 21 55.5V55.5C23.4853 55.5 25.5 53.4853 25.5 51Z" stroke="#7B61FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>\n',
                    dice: '1к8',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: [{
                                name: {
                                    rus: 'Коллегия Доблести',
                                    eng: 'Valor',
                                    url: 'Valor'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Коллегия Знаний',
                                    eng: 'Lore',
                                    url: 'Lore'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Коллегия Мечей',
                                    eng: 'Swords',
                                    url: 'Swords'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Коллегия Очарования',
                                    eng: 'Glamour',
                                    url: 'Glamour'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Коллегия Шёпотов',
                                    eng: 'Whispers',
                                    url: 'Whispers'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Коллегия Созидания',
                                    eng: 'Creation',
                                    url: 'Creation'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Коллегия Красноречия',
                                    eng: 'Eloquence',
                                    url: 'Eloquence'
                                },
                                source: 'TCE'
                            }]
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: [{
                                name: {
                                    rus: 'Коллегия Духов',
                                    eng: 'Spirits',
                                    url: 'Spirits'
                                },
                                source: 'VRGR'
                            }]
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [{
                                name: {
                                    rus: 'Коллегия Древних',
                                    eng: 'Ancients',
                                    url: 'Ancients'
                                },
                                source: 'PG'
                            }, {
                                name: {
                                    rus: 'Коллегия Ключей',
                                    eng: 'Keys',
                                    url: 'Keys'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Коллегия  Раздора',
                                    eng: 'Discord',
                                    url: 'Discord'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Коллегия  Скорби',
                                    eng: 'Sorrow',
                                    url: 'Sorrow'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Коллегия Сатиры',
                                    eng: 'Satire',
                                    url: 'Satire'
                                },
                                source: 'UA'
                            }, {
                                name: {
                                    rus: 'Коллегия Эпической Поэзии',
                                    eng: 'Epic',
                                    url: 'Epic'
                                },
                                source: 'ODL'
                            }, {
                                name: {
                                    rus: 'Коллегия Плакальщиков',
                                    eng: 'Cryers',
                                    url: 'Cryers'
                                },
                                source: 'EB'
                            }]
                        }
                    }
                }, {
                    name: {
                        rus: 'Варвар',
                        eng: 'Barbarian',
                        url: 'Barbarian'
                    },
                    book: 'PHB',
                    svg: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M45 24L6 63L9 66M42 21C42 21 39 18 39 13.5C39 8.99998 39 5.99998 39 5.99998C39 5.99998 28.5 1.49997 21 8.99998C13.5 16.5 18 27 18 27C18 27 21 27 25.5 27C30 27 33 30 33 30M21 21C21 21 19.5 16.5 24 12C28.5 7.49998 33 8.99998 33 8.99998M39 36C39 36 42 39 42 43.5C42 48 42 51 42 51C42 51 52.5 55.5 60 48C67.5 40.5 63 30 63 30C63 30 60 30 55.5 30C51 30 48 27 48 27M60 36C60 36 61.5 40.5 57 45C52.5 49.5 48 48 48 48" stroke="#7B61FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
                    dice: '1к12',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: [{
                                name: {
                                    rus: 'Путь Берсерка',
                                    eng: 'Berserker',
                                    url: 'Berserker'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Путь Тотемного Воина',
                                    eng: 'Totem Warrior',
                                    url: 'Totem_Warrior'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Путь Буревестника',
                                    eng: 'Storm Herald',
                                    url: 'Storm_Herald'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Путь Предка-хранителя',
                                    eng: 'Ancestral Guardian',
                                    url: 'Ancestral_Guardian'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Путь Фанатика',
                                    eng: 'Zealot',
                                    url: 'Zealot'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Путь Зверя',
                                    eng: 'Beast',
                                    url: 'Beast'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Путь Дикой Магии',
                                    eng: 'Wild Magic',
                                    url: 'Wild_Magic'
                                },
                                source: 'TCE'
                            }]
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: [{
                                name: {
                                    rus: 'Путь Бушующего В Бою',
                                    eng: 'Battlerager',
                                    url: 'Battlerager'
                                },
                                source: 'SCAG'
                            }]
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [{
                                name: {
                                    rus: 'Путь Кровавого Жнеца',
                                    eng: 'Blood Rearer',
                                    url: 'Blood_Rearer'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Путь Священного Рода',
                                    eng: 'Sacred Family',
                                    url: 'Sacred_Family'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Путь Предков',
                                    eng: 'Ancestors',
                                    url: 'Ancestors'
                                },
                                source: 'HH'
                            }, {
                                name: {
                                    rus: 'Путь Порчи',
                                    eng: 'Spoilage',
                                    url: 'Spoilage'
                                },
                                source: 'PG'
                            }, {
                                name: {
                                    rus: 'Путь Храброго Сердца',
                                    eng: 'Braveheart',
                                    url: 'Braveheart'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Путь Титана',
                                    eng: 'Titanium',
                                    url: 'Titanium'
                                },
                                source: 'ODL'
                            }]
                        }
                    }
                }, {
                    name: {
                        rus: 'Воин',
                        eng: 'Fighter',
                        url: 'Fighter'
                    },
                    book: 'PHB',
                    svg: '<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M24.5 42L15.5 51M15.5 51L9.5 45M15.5 51L27.5 63M15.5 51L6.5 60L12.5 66M42.5 24L60.5 6H66.5V12L63.5 15M29 49.5L26 52.5M48.5 42L57.5 51M57.5 51L63.5 45M57.5 51L45.5 63M57.5 51L66.5 60L60.5 66L48.5 54M30.5 24L12.5 6H6.5V12M24.5 30C24.5 25.6389 24.5 24 24.5 24H48.5C48.5 24 48.5 29 48.5 39C48.5 49 36.5 54 36.5 54C36.5 54 24.5 50.25 24.5 39C24.5 35.1872 24.5 32.2358 24.5 30ZM24.5 30L21.5 27L15.5 21M54.5 24L59 19.5" stroke="#7B61FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
                    dice: '1к10',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: [{
                                name: {
                                    rus: 'Мастер Боевых Искусств',
                                    eng: 'Battle Master',
                                    url: 'Battle_Master'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Мистический Рыцарь',
                                    eng: 'Eldritch Knight',
                                    url: 'Eldritch_Knight'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Чемпион',
                                    eng: 'Champion',
                                    url: 'Champion'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Кавалерист',
                                    eng: 'Cavalier',
                                    url: 'Cavalier'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Мистический Лучник',
                                    eng: 'Arcane Archer',
                                    url: 'Arcane_Archer'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Самурай',
                                    eng: 'Samurai',
                                    url: 'Samurai'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Пси-воин',
                                    eng: 'Psi Warrior',
                                    url: 'Psi_Warrior'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Рунный Рыцарь',
                                    eng: 'Rune Knight',
                                    url: 'Rune_Knight'
                                },
                                source: 'TCE'
                            }]
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: [{
                                name: {
                                    rus: 'Рыцарь Пурпурного Дракона',
                                    eng: 'Purple Dragon',
                                    url: 'Purple_Dragon'
                                },
                                source: 'SCAG'
                            }, {
                                name: {
                                    rus: 'Рыцарь Эхо',
                                    eng: 'Echo',
                                    url: 'Echo'
                                },
                                source: 'EGtW'
                            }]
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [{
                                name: {
                                    rus: 'Драгун',
                                    eng: 'Dragoon',
                                    url: 'Dragoon'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Рунный Рыцарь',
                                    eng: 'Runes',
                                    url: 'Runes'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Авангардист',
                                    eng: 'Avant-gardist',
                                    url: 'Avant-gardist'
                                },
                                source: 'AW'
                            }, {
                                name: {
                                    rus: 'Атлет',
                                    eng: 'Athlete',
                                    url: 'Athlete'
                                },
                                source: 'AW'
                            }, {
                                name: {
                                    rus: 'Громила',
                                    eng: 'Brute',
                                    url: 'Brute'
                                },
                                source: 'AW'
                            }, {
                                name: {
                                    rus: 'Безликий',
                                    eng: 'Faceless',
                                    url: 'Faceless'
                                },
                                source: 'AW'
                            }, {
                                name: {
                                    rus: 'Боевой Разум',
                                    eng: 'Warmind',
                                    url: 'Warmind'
                                },
                                source: 'AW'
                            }, {
                                name: {
                                    rus: 'Боевой Волхв',
                                    eng: 'Warmagi',
                                    url: 'Warmagi'
                                },
                                source: 'AW'
                            }, {
                                name: {
                                    rus: 'Певец Битвы',
                                    eng: 'Battlesinger',
                                    url: 'Battlesinger'
                                },
                                source: 'AW'
                            }, {
                                name: {
                                    rus: 'Военный Санитар',
                                    eng: 'Military Orderly',
                                    url: 'Military_Orderly'
                                },
                                source: 'AW'
                            }, {
                                name: {
                                    rus: 'Гладиатор',
                                    eng: 'Gladiator',
                                    url: 'Gladiator'
                                },
                                source: 'AW'
                            }, {
                                name: {
                                    rus: 'Мирмидон',
                                    eng: 'Myrmidon',
                                    url: 'Myrmidon'
                                },
                                source: 'AW'
                            }, {
                                name: {
                                    rus: 'Рыцарь Рощи',
                                    eng: 'Grove',
                                    url: 'Grove'
                                },
                                source: 'AW'
                            }, {
                                name: {
                                    rus: 'Стрелок',
                                    eng: 'Gunslinger',
                                    url: 'Gunslinger'
                                },
                                source: 'CC'
                            }, {
                                name: {
                                    rus: 'Гоплит',
                                    eng: 'Hoplite',
                                    url: 'Hoplite'
                                },
                                source: 'ODL'
                            }, {
                                name: {
                                    rus: 'Фехтовальщик',
                                    eng: 'Swordsman',
                                    url: 'Swordsman'
                                },
                                source: 'AW'
                            }]
                        }
                    }
                }, {
                    name: {
                        rus: 'Волшебник',
                        eng: 'Wizard',
                        url: 'Wizard'
                    },
                    book: 'PHB',
                    svg: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M37.5 15C37.5 15 33 13.5 33 18C33 22.5 36 24 39 24C42 24 48 25.5 48 18C48 10.5 40.5 6 36 6C31.5 6 24 7.5 24 18C24 28.5 37.5 33 39 36C40.5 39 42 42 42 45C42 48 39 51 36 51C33 51 30 48 30 45C30 42 33 39 33 39M18 54C18 54 28.5 60 36 60C43.5 60 54 54 54 54M24 63C24 63 28.5 66 36 66C43.5 66 48 63 48 63" stroke="#7B61FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
                    dice: '1к6',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: [{
                                name: {
                                    rus: 'Школа Воплощения',
                                    eng: 'Evocation',
                                    url: 'Evocation'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Школа Вызова',
                                    eng: 'Conjuration',
                                    url: 'Conjuration'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Школа Иллюзии',
                                    eng: 'Illusion',
                                    url: 'Illusion'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Школа Некромантии',
                                    eng: 'Necromancy',
                                    url: 'Necromancy'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Школа Ограждения',
                                    eng: 'Abjuration',
                                    url: 'Abjuration'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Школа Очарования',
                                    eng: 'Enchantment',
                                    url: 'Enchantment'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Школа Преобразования',
                                    eng: 'Transmutation',
                                    url: 'Transmutation'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Школа Прорицания',
                                    eng: 'Divination',
                                    url: 'Divination'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Военная Магия',
                                    eng: 'Warmage',
                                    url: 'Warmage'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Поющий Клинок',
                                    eng: 'Bladesinging',
                                    url: 'Bladesinging'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Орден Писцов',
                                    eng: 'Scribes',
                                    url: 'Scribes'
                                },
                                source: 'TCE'
                            }]
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: [{
                                name: {
                                    rus: 'Песнь Клинка',
                                    eng: 'Bladesong',
                                    url: 'Bladesong'
                                },
                                source: 'SCAG'
                            }, {
                                name: {
                                    rus: 'Хрономаг',
                                    eng: 'Chronurgy',
                                    url: 'Chronurgy'
                                },
                                source: 'EGtW'
                            }, {
                                name: {
                                    rus: 'Гравитационный Маг',
                                    eng: 'Graviturgy',
                                    url: 'Graviturgy'
                                },
                                source: 'EGtW'
                            }]
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [{
                                name: {
                                    rus: 'Охотник На Магов',
                                    eng: 'Mage Hunter',
                                    url: 'Mage_Hunter'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Ономантия',
                                    eng: 'Onomancy',
                                    url: 'Onomancy'
                                },
                                source: 'UA'
                            }, {
                                name: {
                                    rus: 'Школа Восстановления',
                                    eng: 'Recovery',
                                    url: 'Recovery'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Школа Обмана',
                                    eng: 'Deception',
                                    url: 'Deception'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Философ Академии',
                                    eng: 'Academy Philosopher',
                                    url: 'Academy_Philosopher'
                                },
                                source: 'ODL'
                            }, {
                                name: {
                                    rus: 'Маг Часовых Механизмов',
                                    eng: 'Clockwork magician',
                                    url: 'Clockwork_magician'
                                },
                                source: 'AMCM'
                            }, {
                                name: {
                                    rus: 'Глаголящий Пустоту',
                                    eng: 'Speek Void',
                                    url: 'Speek_Void'
                                },
                                source: 'AMCM'
                            }]
                        }
                    }
                }, {
                    name: {
                        rus: 'Друид',
                        eng: 'Druid',
                        url: 'Druid'
                    },
                    book: 'PHB',
                    svg: '<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0)">\n<path d="M33.18 36.0206C36.1089 38.9495 39.9477 40.4139 43.7865 40.4139M33.18 14.8075C31.7887 16.1989 30.7278 17.7955 29.9974 19.5M43.87 40.4139C42.4889 40.777 41.039 40.9703 39.5439 40.9703C38.9791 40.9703 38.4207 40.9427 37.87 40.8888M43.87 70.4139L37.87 70.4139L37.87 40.8888M37.87 40.8888C29.2832 40.0481 22.5735 32.8075 22.5735 23.9999C22.5735 14.6273 30.1714 7.0294 39.5439 7.0294C44.9296 7.0294 49.7293 9.53817 52.8381 13.4508C47.6496 10.4552 41.1768 9.66922 36.0592 12.5992M51.0832 44.7783C51.0832 44.7783 47.1899 46.1726 45.0832 48.9312C42.9766 51.6898 41.7633 55.1306 42.6566 55.8128C43.5499 56.495 46.5499 54.4186 48.6565 51.6599C50.7632 48.9013 51.0832 44.7783 51.0832 44.7783ZM24.2376 50.2547C24.2376 50.2547 24.8306 54.3474 27.1158 56.96C29.4009 59.5727 32.5321 61.4453 33.3782 60.7053C34.2242 59.9653 32.7851 56.6127 30.5 54C28.2149 51.3874 24.2376 50.2547 24.2376 50.2547Z" stroke="#7B61FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n</g>\n<defs>\n<clipPath id="clip0">\n<rect width="72" height="72" fill="white" transform="translate(0.5)"></rect>\n</clipPath>\n</defs>\n</svg>',
                    dice: '1к8',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: [{
                                name: {
                                    rus: 'Круг Земли',
                                    eng: 'Land',
                                    url: 'Land'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Круг Луны',
                                    eng: 'Moon',
                                    url: 'Moon'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Круг Пастыря',
                                    eng: 'Shepherd',
                                    url: 'Shepherd'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Круг Снов',
                                    eng: 'Dreams',
                                    url: 'Dreams'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Круг Спор',
                                    eng: 'Spores',
                                    url: 'Spores'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Круг Звезд',
                                    eng: 'Stars',
                                    url: 'Stars'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Круг Лесного Пожара',
                                    eng: 'Wildfire',
                                    url: 'Wildfire'
                                },
                                source: 'TCE'
                            }]
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: [{
                                name: {
                                    rus: 'Круг Спор',
                                    eng: 'Spores GGR',
                                    url: 'Spores_GGR'
                                },
                                source: 'GGR'
                            }]
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [{
                                name: {
                                    rus: 'Круг Плодородия',
                                    eng: 'Fertility',
                                    url: 'Fertility'
                                },
                                source: 'PG'
                            }, {
                                name: {
                                    rus: 'Круг Владыки Духов',
                                    eng: 'Lord of Spirits',
                                    url: 'Lord_of_Spirits'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Круг Сезонов',
                                    eng: 'Seasons',
                                    url: 'Seasons'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Круг Жертвоприношений',
                                    eng: 'Sacrifice',
                                    url: 'Sacrifice'
                                },
                                source: 'ODL'
                            }, {
                                name: {
                                    rus: 'Круг Кованых',
                                    eng: 'Warforged',
                                    url: 'Warforged'
                                },
                                source: 'EB'
                            }]
                        }
                    }
                }, {
                    name: {
                        rus: 'Жрец',
                        eng: 'Cleric',
                        url: 'Cleric'
                    },
                    book: 'PHB',
                    svg: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M38.5084 31.759L12.1097 58.1576L15.3422 61.3901L17.4635 59.2688M54.0311 19.4688L53.324 20.1759M53.324 20.1759V20.1759C56.8945 23.7464 56.8945 29.5353 53.324 33.1058L53.0546 33.3752C49.4841 36.9457 43.6951 36.9457 40.1246 33.3752V33.3752C36.5541 29.8047 36.5541 24.0158 40.1246 20.4452L40.394 20.1759C43.9645 16.6054 49.7534 16.6054 53.324 20.1759V20.1759ZM46.6233 36.574L46.6106 37.7988M36.9258 26.8765L35.701 26.8892M42.6506 18.4994L42.0696 17.3191M55.0004 30.8493L56.1807 31.4302M43.8371 40.3875L44.9397 41.4901L46.5559 43.1063L48.2059 41.4564L49.3314 40.3308C51.9206 39.7841 54.3978 38.497 56.4218 36.473C56.8582 36.0366 57.2604 35.5791 57.6282 35.1039L60.9401 33.773L60.0742 30.2259C61.1393 26.3751 60.5308 22.1867 58.2367 18.8214L58.24 18.4923L58.2737 15.2261L55.0075 15.2598L54.6785 15.2632C51.3132 12.969 47.1248 12.3605 43.2739 13.4257L39.7269 12.5598L38.3959 15.8716C37.9208 16.2395 37.4633 16.6417 37.0268 17.0781C35.0028 19.1021 33.7157 21.5793 33.169 24.1684L32.0434 25.294L30.3935 26.9439L32.0098 28.5602L33.1124 29.6628M49.7884 23.7114C48.0311 21.9541 45.1818 21.9541 43.4245 23.7114" stroke="#7B61FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
                    dice: '1к8',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: [{
                                name: {
                                    rus: 'Домен Бури',
                                    eng: 'Tempest',
                                    url: 'Tempest'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Домен Войны',
                                    eng: 'War',
                                    url: 'War'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Домен Жизни',
                                    eng: 'Life',
                                    url: 'Life'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Домен Знания',
                                    eng: 'Knowledge',
                                    url: 'Knowledge'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Домен Обмана',
                                    eng: 'Trickery',
                                    url: 'Trickery'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Домен Природы',
                                    eng: 'Nature',
                                    url: 'Nature'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Домен Света',
                                    eng: 'Light',
                                    url: 'Light'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Домен Кузни',
                                    eng: 'Forge',
                                    url: 'Forge'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Домен Упокоения',
                                    eng: 'Grave',
                                    url: 'Grave'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Домен Смерти',
                                    eng: 'Death',
                                    url: 'Death'
                                },
                                source: 'DMG'
                            }, {
                                name: {
                                    rus: 'Домен Порядка',
                                    eng: 'Order',
                                    url: 'Order'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Домен Мира',
                                    eng: 'Peace',
                                    url: 'Peace'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Домен Сумрака',
                                    eng: 'Twilight',
                                    url: 'Twilight'
                                },
                                source: 'TCE'
                            }]
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: [{
                                name: {
                                    rus: 'Домен Магии',
                                    eng: 'Arcana',
                                    url: 'Arcana'
                                },
                                source: 'SCAG'
                            }]
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [{
                                name: {
                                    rus: 'Домен Энтропии',
                                    eng: 'Entropy',
                                    url: 'Entropy'
                                },
                                source: 'LSM'
                            }, {
                                name: {
                                    rus: 'Домен Пророчества',
                                    eng: 'Prophecy',
                                    url: 'Prophecy'
                                },
                                source: 'ODL'
                            }, {
                                name: {
                                    rus: 'Домен Часовых Механизмов',
                                    eng: 'Clock mechanisms',
                                    url: 'Clock_mechanisms'
                                },
                                source: 'AMCM'
                            }, {
                                name: {
                                    rus: 'Домен Разума',
                                    eng: 'Intelligence',
                                    url: 'Intelligence'
                                },
                                source: 'EB'
                            }]
                        }
                    }
                }, {
                    name: {
                        rus: 'Изобретатель',
                        eng: 'Artificer',
                        url: 'Artificer'
                    },
                    book: 'TCE',
                    svg: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.3988 11.5774L11.5777 16.3986L15.8883 22.706C14.2124 25.2362 13.0013 28.101 12.3765 31.1788L6 32.5909V39.4091L12.3765 40.8212C13.0013 43.899 14.2124 46.7638 15.8883 49.294L11.5777 55.6014L16.3988 60.4226L22.7065 56.1122C25.2367 57.7879 28.1014 58.999 31.1791 59.6237L32.5909 66H39.4091L40.8214 59.6237C43.8992 58.999 46.7641 57.7878 49.2943 56.112L55.6017 60.4226L60.4228 55.6014L56.1124 49.2937C57.7882 46.7636 58.9992 43.8988 59.624 40.8212L66 39.4091V32.5909L59.624 31.1788C58.9992 28.1012 57.7882 25.2364 56.1124 22.7063L60.4228 16.3986L55.6017 11.5774L49.2943 15.888C46.7641 14.2122 43.8992 13.001 40.8214 12.3763L39.4091 6H32.5909L31.1791 12.3763C28.1014 13.001 25.2367 14.2121 22.7065 15.8878L16.3988 11.5774Z" stroke="#4D4DAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M41.9999 22.2481C45.4602 23.76 48.2399 26.5396 49.7518 30M49.7518 42C48.2399 45.4603 45.4602 48.24 41.9999 49.7518M29.9999 49.7518C26.5396 48.24 23.7599 45.4603 22.248 42M22.248 30C23.7599 26.5396 26.5396 23.76 29.9999 22.2481" stroke="#4D4DAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M42 42C45.7048 38.2952 54 36 54 36C54 36 45.7048 33.7048 42 30C38.2952 26.2952 36 18 36 18C36 18 33.7048 26.2952 30 30C26.2952 33.7048 18 36 18 36C18 36 26.2952 38.2952 30 42C33.7048 45.7048 36 54 36 54C36 54 38.2952 45.7048 42 42Z" stroke="#4D4DAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>\n',
                    dice: '1к8',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: [{
                                name: {
                                    rus: 'Алхимик',
                                    eng: 'Alchemist',
                                    url: 'Alchemist'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Артиллерист',
                                    eng: 'Artillerist',
                                    url: 'Artillerist'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Боевой Кузнец',
                                    eng: 'Battle Smith',
                                    url: 'Battle_Smith'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Бронник',
                                    eng: 'Armorer',
                                    url: 'Armorer'
                                },
                                source: 'TCE'
                            }]
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: []
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [{
                                name: {
                                    rus: 'Мастер Кузнечного Дела',
                                    eng: 'Forming',
                                    url: 'Forming'
                                },
                                source: 'EB'
                            }, {
                                name: {
                                    rus: 'Инакомыслящий',
                                    eng: 'Dissenter',
                                    url: 'Dissenter'
                                },
                                source: 'EB'
                            }]
                        }
                    }
                }, {
                    name: {
                        rus: 'Колдун',
                        eng: 'Warlock',
                        url: 'Warlock'
                    },
                    book: 'PHB',
                    svg: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M27 27L36 3L45 27M48 27L60 18L57 33M24 27L12 18L15 33M30 57L36 69L42 57M45 57L51 60V54M52.5 52.5H57V48M27 57L21 60V54M19.5 52.5H15V48M57 42C57 42 49.5 54 36 54C22.5 54 15 42 15 42C15 42 22.5 30 36 30C49.5 30 57 42 57 42ZM36 48V48C39.3137 48 42 45.3137 42 42V42C42 38.6863 39.3137 36 36 36V36C32.6863 36 30 38.6863 30 42V42C30 45.3137 32.6863 48 36 48Z" stroke="#7B61FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
                    dice: '1к8',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: [{
                                name: {
                                    rus: 'Архифея',
                                    eng: 'Archfey',
                                    url: 'Archfey'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Исчадие',
                                    eng: 'Fiend',
                                    url: 'Fiend'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Великий Древний',
                                    eng: 'Great Old One',
                                    url: 'Great_Old_One'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Ведьмовской Клинок',
                                    eng: 'Hexblade',
                                    url: 'Hexblade'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Небожитель',
                                    eng: 'Celestial',
                                    url: 'Celestial'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Бездонный',
                                    eng: 'Fathomless',
                                    url: 'Fathomless'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Гений',
                                    eng: 'Genie',
                                    url: 'Genie'
                                },
                                source: 'TCE'
                            }]
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: [{
                                name: {
                                    rus: 'Бессмертные',
                                    eng: 'Undying',
                                    url: 'Undying'
                                },
                                source: 'SCAG'
                            }, {
                                name: {
                                    rus: 'Нежить',
                                    eng: 'Undead',
                                    url: 'Undead'
                                },
                                source: 'VRGR'
                            }]
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [{
                                name: {
                                    rus: 'Хаос',
                                    eng: 'Chaos',
                                    url: 'Chaos'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Мойры',
                                    eng: 'Moira',
                                    url: 'Moira'
                                },
                                source: 'ODL'
                            }, {
                                name: {
                                    rus: 'Бог-машина',
                                    eng: 'Deus ex machina',
                                    url: 'Deus_ex_machina'
                                },
                                source: 'AMCM'
                            }]
                        }
                    }
                }, {
                    name: {
                        rus: 'Кровавый охотник',
                        eng: 'Blood Hunter',
                        url: 'Blood_Hunter'
                    },
                    book: 'CC',
                    svg: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M45 51.7241C48.2409 49.7872 51 46.2405 51 39.7895C51 38.5621 50.8668 37.2927 50.6256 36M27 51.7241C23.7591 49.7872 21 46.2405 21 39.7895C21 38.5621 21.1332 37.2927 21.3744 36M46.0835 24C41.7095 15.7613 36 9 36 9C36 9 30.2905 15.7613 25.9165 24M36 66C36 66 38.4446 60.9626 39.1727 53.746C39.3001 52.4832 39.375 51.1536 39.375 49.7727C39.375 40.5 38.25 34.3182 38.25 34.3182L40.5 32.3863L45 33L49.5 30L45 27L40.6633 27.7228C40.5546 27.7409 40.4446 27.75 40.3345 27.75H38.25L37.5 18H34.5L33.75 27.75H31.6655C31.5554 27.75 31.4454 27.7409 31.3367 27.7228L27 27L22.5 30L27 33L31.5 32.3863L33.75 34.3182C33.75 34.3182 32.625 40.5 32.625 49.7727C32.625 51.1536 32.6999 52.4832 32.8273 53.746C33.5554 60.9626 36 66 36 66Z" stroke="#7B61FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
                    dice: '1к10',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: []
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: []
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [{
                                name: {
                                    rus: 'Орден Призрачных Убийц',
                                    eng: 'Ghost killer',
                                    url: 'Ghost_killer'
                                },
                                source: 'CC'
                            }, {
                                name: {
                                    rus: 'Орден Осквернённых Душ',
                                    eng: 'Desecrated Soul',
                                    url: 'Desecrated_Soul'
                                },
                                source: 'CC'
                            }, {
                                name: {
                                    rus: 'Орден Мутантов',
                                    eng: 'Order of the Mutant',
                                    url: 'Order_of_the_Mutant'
                                },
                                source: 'CC'
                            }, {
                                name: {
                                    rus: 'Орден Ликантропов',
                                    eng: 'Lycanthrope',
                                    url: 'Lycanthrope'
                                },
                                source: 'CC'
                            }]
                        }
                    }
                }, {
                    name: {
                        rus: 'Монах',
                        eng: 'Monk',
                        url: 'Monk'
                    },
                    book: 'PHB',
                    svg: '<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M21.5 34.5L18.8032 45.2873C18.6041 46.0835 18.5953 46.9205 18.8996 47.6827C19.5977 49.4308 21.2816 52.5 24.5 52.5C29 52.5 30.5 46.5 30.5 46.5C30.5 46.5 32 52.5 36.5 52.5M36.5 52.5C41 52.5 42.5 46.5 42.5 46.5C42.5 46.5 44 52.5 48.5 52.5C53 52.5 54.5 46.5 54.5 46.5C54.5 46.5 56 49.5 59 49.5C60.8545 49.5 62.1358 48.3536 62.8439 47.4782C63.332 46.8747 63.5 46.0959 63.5 45.3197V25.5C63.5 25.5 63.5 25.5 63.5 25.5C63.5 25.5 63.5 21 59 21C54.5 21 54.5 25.5 54.5 25.5C54.5 25.5 53 18 48.5 18C44 18 42.5 22.5 42.5 22.5C42.5 22.5 41 18 36.5 18C32 18 30.5 24 30.5 24C30.5 24 27.5 19.5 24.5 19.5C22.0983 19.5 19.6966 22.3841 18.8342 23.5344C18.6047 23.8405 18.4322 24.1808 18.2979 24.539L10.708 44.7787C9.93768 46.8328 10.0575 49.1149 11.0386 51.0771V51.0771C11.9743 52.9486 13.6152 54.3717 15.6002 55.0334L21.5 57M36.5 52.5L35.2279 56.3162C35.0918 56.7246 34.7097 57 34.2792 57H30.5M54.5 31.5V40.5M54.5 31.5L53 30M54.5 31.5L56 30M42.5 40.5V30M42.5 30L41 28.5M42.5 30L44 28.5M30.5 30V40.5M30.5 30L29 28.5M30.5 30L32 28.5" stroke="#7B61FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
                    dice: '1к8',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: [{
                                name: {
                                    rus: 'Путь Открытой Ладони',
                                    eng: 'Open Hand',
                                    url: 'Open_Hand'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Путь Тени',
                                    eng: 'Shadow',
                                    url: 'Shadow'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Путь Четырёх Стихий',
                                    eng: 'Four Elements',
                                    url: 'Four_Elements'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Путь Кенсэя',
                                    eng: 'Kensei',
                                    url: 'Kensei'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Путь Пьяного Мастера',
                                    eng: 'Drunken Master',
                                    url: 'Drunken_Master'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Путь Солнечной Души',
                                    eng: 'Sun Soul',
                                    url: 'Sun_Soul'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Путь Милосердия',
                                    eng: 'Mercy',
                                    url: 'Mercy'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Путь Астрального Я',
                                    eng: 'Astral self',
                                    url: 'Astral_self'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Путь Восходящего Дракона',
                                    eng: 'Ascendant Dragon',
                                    url: 'Ascendant_Dragon'
                                },
                                source: 'FTD'
                            }]
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: [{
                                name: {
                                    rus: 'Путь Долгой Смерти',
                                    eng: 'Long Death',
                                    url: 'Long_Death'
                                },
                                source: 'SCAG'
                            }]
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [{
                                name: {
                                    rus: 'Путь Шипов',
                                    eng: 'Pinch',
                                    url: 'Pinch'
                                },
                                source: 'PG'
                            }, {
                                name: {
                                    rus: 'Путь Искупления',
                                    eng: 'Redemption',
                                    url: 'Redemption'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Путь Сочувствия',
                                    eng: 'Empathy',
                                    url: 'Empathy'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Путь Щита',
                                    eng: 'Shield',
                                    url: 'Shield'
                                },
                                source: 'ODL'
                            }, {
                                name: {
                                    rus: 'Путь Живого Оружия',
                                    eng: 'Living weapon',
                                    url: 'Living_weapon'
                                },
                                source: 'EB'
                            }]
                        }
                    }
                }, {
                    name: {
                        rus: 'Паладин',
                        eng: 'Paladin',
                        url: 'Paladin'
                    },
                    book: 'PHB',
                    svg: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M52.7409 27C52.7409 27 55.7409 24 57.2409 19.5C58.7409 15 58.7409 9 58.7409 9C58.7409 9 64.7409 19.5 63.2409 28.5C61.7409 37.5 55.7409 48 55.7409 48M16.741 27C16.741 27 13.741 24 12.241 19.5C10.741 15 10.741 9 10.741 9C10.741 9 4.74097 19.5 6.24097 28.5C7.74097 37.5 13.741 48 13.741 48M24 32.1429C24 32.1429 24 22.5 34.5 22.5M27.2409 37.2857V63L19.7409 55.2857V32.1429C19.7409 32.1429 19.7409 32.1429 19.7409 32.1429C19.7409 32.1429 19.7409 18 34.7409 18C49.7409 18 49.7409 32.1429 49.7409 32.1429C49.7409 32.1429 49.7409 32.1429 49.7409 32.1429V55.2857L42.2409 63V37.2857L34.7409 42.4286L27.2409 37.2857Z" stroke="#7B61FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
                    dice: '1к10',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: [{
                                name: {
                                    rus: 'Клятва Преданности',
                                    eng: 'Devotion',
                                    url: 'Devotion'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Клятва Древних',
                                    eng: 'Ancients',
                                    url: 'Ancients'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Клятва Мести',
                                    eng: 'Vengeance',
                                    url: 'Vengeance'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Клятва Искупления',
                                    eng: 'Redemption',
                                    url: 'Redemption'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Клятва Покорения',
                                    eng: 'Conquest',
                                    url: 'Conquest'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Клятвопреступник',
                                    eng: 'Oathbreaker',
                                    url: 'Oathbreaker'
                                },
                                source: 'DMG'
                            }, {
                                name: {
                                    rus: 'Клятва Славы',
                                    eng: 'Glory',
                                    url: 'Glory'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Клятва Стражей',
                                    eng: 'Watchers',
                                    url: 'Watchers'
                                },
                                source: 'TCE'
                            }]
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: [{
                                name: {
                                    rus: 'Клятва Короны',
                                    eng: 'Crown',
                                    url: 'Crown'
                                },
                                source: 'SCAG'
                            }]
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [{
                                name: {
                                    rus: 'Клятва Предначертания',
                                    eng: 'Destiny',
                                    url: 'Destiny'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Клятва Хищничества',
                                    eng: 'Predation',
                                    url: 'Predation'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Присяга Повелителя Драконов',
                                    eng: 'Dragonlords Oath',
                                    url: 'Dragonlords_Oath'
                                },
                                source: 'ODL'
                            }]
                        }
                    }
                }, {
                    name: {
                        rus: 'Плут',
                        eng: 'Rogue',
                        url: 'Rogue'
                    },
                    book: 'PHB',
                    svg: '<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0)">\n<path d="M33.3179 47.0459C23.772 56.5919 15.2867 58.7132 15.2867 58.7132C15.2867 58.7132 18.4687 49.1673 26.954 40.682C35.4393 32.1967 42.1568 27.6005 42.1568 27.6005L44.9852 29.0147M44.9852 29.0147L36.4999 24.7721L31.5923 22.3183C29.6164 21.3303 28.8155 18.9276 29.8035 16.9517L36.4999 3.55888L45.9192 19.2577C46.0033 19.3979 46.1043 19.5273 46.22 19.6429L48.1672 21.5901L49.2278 22.6508M44.9852 29.0147L46.3994 31.8432C46.3994 31.8432 45.0691 33.9717 41.8372 37.8207M44.9852 29.0147L49.2278 37.5L51.6816 42.4076C52.6696 44.3835 55.0723 45.1844 57.0482 44.1964L70.441 37.5L54.7423 28.0807C54.602 27.9966 54.4727 27.8956 54.357 27.78L52.4098 25.8327L51.3492 24.7721M49.2278 22.6508L55.5918 14.1655L59.8344 18.4081L51.3492 24.7721M49.2278 22.6508L51.3492 24.7721M37.5606 15.2261L39.6819 17.3475V21.5901L37.5606 19.4688V15.2261ZM58.7738 36.4393L56.6525 34.318H52.4098L54.5311 36.4393H58.7738Z" stroke="#7B61FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n</g>\n<defs>\n<clipPath id="clip0">\n<rect width="72" height="72" fill="white" transform="translate(0.5)"></rect>\n</clipPath>\n</defs>\n</svg>',
                    dice: '1к8',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: [{
                                name: {
                                    rus: 'Вор',
                                    eng: 'Thief',
                                    url: 'Thief'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Убийца',
                                    eng: 'Assassin',
                                    url: 'Assassin'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Мистический Ловкач',
                                    eng: 'Arcane Trickster',
                                    url: 'Arcane_Trickster'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Дуэлянт',
                                    eng: 'Swashbuckler',
                                    url: 'Swashbuckler'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Комбинатор',
                                    eng: 'Mastermind',
                                    url: 'Mastermind'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Скаут',
                                    eng: 'Scout',
                                    url: 'Scout'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Сыщик',
                                    eng: 'Inquisitive',
                                    url: 'Inquisitive'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Фантом',
                                    eng: 'Phantom',
                                    url: 'Phantom'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Клинок Души',
                                    eng: 'Soulknife',
                                    url: 'Soulknife'
                                },
                                source: 'TCE'
                            }]
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: []
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [{
                                name: {
                                    rus: 'Археолог',
                                    eng: 'Archaeologist',
                                    url: 'Archaeologist'
                                },
                                source: 'ATH'
                            }, {
                                name: {
                                    rus: 'Корсар',
                                    eng: 'Corsair',
                                    url: 'Corsair'
                                },
                                source: 'ATH'
                            }, {
                                name: {
                                    rus: 'Ниндзя',
                                    eng: 'Ninja',
                                    url: 'Ninja'
                                },
                                source: 'ATH'
                            }, {
                                name: {
                                    rus: 'Самозванец',
                                    eng: 'Impostor',
                                    url: 'Impostor'
                                },
                                source: 'ATH'
                            }, {
                                name: {
                                    rus: 'Тенеплёт',
                                    eng: 'Shadowlet',
                                    url: 'Shadowlet'
                                },
                                source: 'ATH'
                            }, {
                                name: {
                                    rus: 'Шут',
                                    eng: 'Jester',
                                    url: 'Jester'
                                },
                                source: 'ATH'
                            }, {
                                name: {
                                    rus: 'Божественный Вестник',
                                    eng: 'Divine Messenger',
                                    url: 'Divine_Messenger'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Одиссеец',
                                    eng: 'Odyssey',
                                    url: 'Odyssey'
                                },
                                source: 'ODL'
                            }]
                        }
                    }
                }, {
                    name: {
                        rus: 'Следопыт',
                        eng: 'Ranger',
                        url: 'Ranger'
                    },
                    book: 'PHB',
                    svg: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M36 63V60M36 28.5V54M36 18V12M36 12L33 15M36 12L39 15M33 63L36 60M36 60L39 63M36 60V54M39 57L36 54M36 54L33 57M15 36L31.5 52.5M40.5 52.5L57 36M63 30L69 24M69 24H64.5M69 24V28.5M9 30L3 24M3 24V28.5M3 24H7.5M30 60L23.25 56.25M42 60L55.5 52.5M62.25 48.75L69 45C69 45 61.5 24 36 24C10.5 24 3 45 3 45L16.5 52.5" stroke="#7B61FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
                    dice: '1к10',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: [{
                                name: {
                                    rus: 'Охотник',
                                    eng: 'Hunter',
                                    url: 'Hunter'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Повелитель Зверей',
                                    eng: 'Beast Master',
                                    url: 'Beast_Master'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Странник Горизонта',
                                    eng: 'Horizon Walker',
                                    url: 'Horizon_Walker'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Сумрачный Охотник',
                                    eng: 'Gloom Stalker',
                                    url: 'Gloom_Stalker'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Убийца Монстров',
                                    eng: 'Monster Slayer',
                                    url: 'Monster_Slayer'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Фейский Странник',
                                    eng: 'Fey Wanderer',
                                    url: 'Fey_Wanderer'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Роевод',
                                    eng: 'Swarmkeeper',
                                    url: 'Swarmkeeper'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Дрейковод',
                                    eng: 'Drakewarden',
                                    url: 'Drakewarden'
                                },
                                source: 'FTD'
                            }]
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: []
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [{
                                name: {
                                    rus: 'Повелитель Растений',
                                    eng: 'Plants Master',
                                    url: 'Plants_Master'
                                },
                                source: 'PG'
                            }, {
                                name: {
                                    rus: 'Странник Пустошей',
                                    eng: 'Wasteland Walker',
                                    url: 'Wasteland_Walker'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Городской Разведчик',
                                    eng: 'Urban Scout',
                                    url: 'Urban_Scout'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Конклав Амазонок',
                                    eng: 'Conclave of the Amazons',
                                    url: 'Conclave_of_the_Amazons'
                                },
                                source: 'ODL'
                            }]
                        }
                    }
                }, {
                    name: {
                        rus: 'Чародей',
                        eng: 'Sorcerer',
                        url: 'Sorcerer'
                    },
                    book: 'PHB',
                    svg: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_1367_2912)">\n<path d="M49.753 50.9913C49.7446 51.3259 49.9588 51.6256 50.2782 51.7258C50.5975 51.826 50.9446 51.7025 51.1289 51.4231L50.5028 51.0102C51.1289 51.4231 51.1292 51.4227 51.1295 51.4223L51.1301 51.4213L51.1318 51.4187L51.1363 51.4117L51.1503 51.3899C51.1617 51.3718 51.1772 51.3468 51.1964 51.315C51.2347 51.2513 51.2876 51.1604 51.3514 51.0431C51.4788 50.8085 51.6495 50.4682 51.8329 50.03C52.1996 49.1537 52.6177 47.883 52.8391 46.2817C53.1721 43.8736 53.0567 40.7411 51.6828 37.1051C53.5722 39.818 54.8635 43.4468 54.8635 46.9428C54.8635 56.9404 45.9251 65.2546 35.1562 65.2546C24.3913 65.2546 15.75 57.0645 15.75 47.0634C15.75 44.1775 16.5031 41.458 17.9615 39.0908C18.4403 38.3184 19.3525 37.1689 20.2688 36.1062C21.191 35.0367 22.0507 34.1325 22.41 33.8305C22.4156 33.8258 22.4211 33.821 22.4265 33.8162C23.378 32.968 24.3671 32.1444 25.379 31.3018C26.0932 30.7072 26.8187 30.103 27.5504 29.4741C29.2913 27.9778 31.007 26.3896 32.4563 24.6232L32.4564 24.623C35.8122 20.5312 36.0895 16.0504 35.6809 12.8915C36.0006 13.7652 36.2615 14.7684 36.4269 15.8604C36.8853 18.8878 36.6009 22.5342 34.8792 25.9326C33.9809 27.7019 32.1275 30.4106 29.537 32.9736L29.5367 32.974C25.3954 37.0772 23.8533 41.5014 23.9267 44.3047C24.0941 50.7611 29.1074 56.0596 35.553 56.0596C41.9863 56.0596 47.1795 50.7794 47.1795 44.2853C47.1795 43.0054 46.9771 41.7734 46.6034 40.6199C48.2067 42.5671 49.8831 45.847 49.753 50.9913Z" stroke="#4D4DAA" stroke-width="1.5" stroke-linejoin="round"></path>\n<path d="M38 47C39.2349 45.7651 42 45 42 45C42 45 39.2349 44.2349 38 43C36.7651 41.7651 36 39 36 39C36 39 35.2349 41.7651 34 43C32.7651 44.2349 30 45 30 45C30 45 32.7651 45.7651 34 47C35.2349 48.2349 36 51 36 51C36 51 36.7651 48.2349 38 47Z" stroke="#4D4DAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n</g>\n<defs>\n<clipPath id="clip0_1367_2912">\n<rect width="45" height="57" fill="white" transform="translate(12 9)"></rect>\n</clipPath>\n</defs>\n</svg>\n',
                    dice: '1к6',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: [{
                                name: {
                                    rus: 'Наследие Драконьей Крови',
                                    eng: 'Draconic',
                                    url: 'Draconic'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Дикая Магия',
                                    eng: 'Wild Magic',
                                    url: 'Wild_Magic'
                                },
                                source: 'PHB'
                            }, {
                                name: {
                                    rus: 'Божественная Душа',
                                    eng: 'Divine Soul',
                                    url: 'Divine_Soul'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Теневая Магия',
                                    eng: 'Shadow',
                                    url: 'Shadow'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Штормовое Колдовство',
                                    eng: 'Storm',
                                    url: 'Storm'
                                },
                                source: 'XGE'
                            }, {
                                name: {
                                    rus: 'Искажённый Разум',
                                    eng: 'Aberrant Mind',
                                    url: 'Aberrant_Mind'
                                },
                                source: 'TCE'
                            }, {
                                name: {
                                    rus: 'Заводная Душа',
                                    eng: 'Clockwork Soul',
                                    url: 'Clockwork_Soul'
                                },
                                source: 'TCE'
                            }]
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: []
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [{
                                name: {
                                    rus: 'Отмеченный Порчей',
                                    eng: 'Marked by corruption',
                                    url: 'Marked_by_corruption'
                                },
                                source: 'PG'
                            }, {
                                name: {
                                    rus: 'Магия Фей',
                                    eng: 'Fairy Magic',
                                    url: 'Fairy_Magic'
                                },
                                source: 'LPZAE'
                            }, {
                                name: {
                                    rus: 'Полубог',
                                    eng: 'Demigod',
                                    url: 'Demigod'
                                },
                                source: 'ODL'
                            }, {
                                name: {
                                    rus: 'Лунная Магия',
                                    eng: 'Lunar magic',
                                    url: 'Lunar_magic'
                                },
                                source: 'UA'
                            }]
                        }
                    }
                }, {
                    name: {
                        rus: 'Напарник боец',
                        eng: 'Warrior Sidekick',
                        url: 'Warrior_Sidekick'
                    },
                    book: 'TCE',
                    svg: '',
                    dice: '1к10',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: []
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: []
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: []
                        }
                    }
                }, {
                    name: {
                        rus: 'Напарник заклинатель',
                        eng: 'Spellcaster Sidekick',
                        url: 'Spellcaster_Sidekick'
                    },
                    book: 'TCE',
                    svg: '',
                    dice: '1к6',
                    archetypes: {
                        main: {
                            name: 'Основное',
                            list: []
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: []
                        },
                    }
                }, {
                    name: {
                        rus: 'Напарник эксперт',
                        eng: 'Expert Sidekick',
                        url: 'Expert_Sidekick'
                    },
                    book: 'TCE',
                    svg: '',
                    dice: '1к8',
                    archetypes: {
                        main: {
                            name: 'Основное',
                        },
                        settings: {
                            name: 'Сеттинги',
                            list: undefined
                        },
                        homebrew: {
                            name: 'Homebrew',
                            list: [],
                        }
                    }
                }];

                resolve();
            })
        },

        setCurrentClass(urlName: string): void {
            this.selectedClass = this.classes.find((classItem: ICharacterClass) => classItem.name.url === urlName);
        }
    }
});