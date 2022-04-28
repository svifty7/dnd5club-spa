export declare namespace NCharacterClass {
    interface IName {
        rus: string
        eng: string
    }

    interface ISource {
        name: string
        short: string
    }

    interface IArchType {
        name: string
        order: number
    }

    interface IArchetype {
        name: IName
        url: string
        type: IArchType
        source: ISource
    }

    interface IClass {
        name: IName
        url: string
        icon: string
        source: ISource
        dice: string
        archetypes?: IArchetype[]
    }
}

export default NCharacterClass
