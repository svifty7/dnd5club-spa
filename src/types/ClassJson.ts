export interface ISourceName {
    rus: string
    eng: string
    url: string
}

export interface ISource {
    name: ISourceName
    source: string
}

export interface ISourceType {
    name: string
    list?: ISource[]
}

export interface ISourceTypeList {
    main?: ISourceType
    settings?: ISourceType
    homebrew?: ISourceType
}

export interface ICharacterClassName {
    rus: string
    eng: string
    url: string
}

export interface ICharacterClass {
    name: ICharacterClassName
    book: string
    svg: string | SVGElement
    dice: string
    archetypes?: ISourceTypeList
}
