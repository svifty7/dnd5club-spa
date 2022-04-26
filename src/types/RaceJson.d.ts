declare namespace NCharacterRace {
    interface IName {
        rus: string;
        eng: string;
        url: string;
    }

    interface ISource {
        shortName: string;
        name: string;
    }

    interface ISubRace {
        name: IName;
        type: string
        abilities: string;
        source: ISource;
    }

    interface IRace {
        name: IName;
        abilities: string;
        source: ISource;
        icon?: string;
        subraces?: ISubRace[];
    }
}

export default NCharacterRace
