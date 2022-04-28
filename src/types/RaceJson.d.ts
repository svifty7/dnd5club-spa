declare namespace NCharacterRace {
    interface IName {
        rus: string
        eng: string
    }

    interface ISource {
        shortName: string
        name: string
    }

    interface ISubRaceType {
        name: string
        order: number
    }

    interface ISubRace {
        name: IName
        url: string
        type: ISubRaceType
        abilities: string
        source: ISource
    }

    interface IRace {
        name: IName
        url: string
        abilities: string
        source: ISource
        icon?: string
        subraces?: ISubRace[]
    }
}

export default NCharacterRace
