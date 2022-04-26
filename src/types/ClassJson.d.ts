export declare namespace NCharacterClass {
    interface IName {
        rus: string
        eng: string
        url: string
    }

    interface ISource {
        name: string
        short: string
    }

    interface IArchetype {
        name: IName
        type: string
        source: ISource
    }

    interface IClass {
        name: IName
        icon: string
        source: ISource
        dice: string
        archetypes?: IArchetype[]
    }
}

export default NCharacterClass
