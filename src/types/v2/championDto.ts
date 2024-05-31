import { Locale } from "./model";

export type ChampionDto = {
  [key: string]: {
    name: string;
    // eslint-disable-next-line no-unused-vars
    shortenName: { [K in Locale]?: string };
    color: { primary: string; secondary: string };
    apiKey: string;
  };
};

export const championDto: ChampionDto = {
  //? Personal Color
  Aatrox: {
    name: "Aatrox",
    shortenName: { en_US: "Aatrox" },
    color: {
      primary: "#de2500",
      secondary: "#920000",
    },
    apiKey: "Aatrox",
  },
  //? Personal Color
  Ahri: {
    name: "Ahri",
    shortenName: { en_US: "Ahri" },
    color: {
      primary: "#EE82EE",
      secondary: "#FFC0CB",
    },
    apiKey: "Ahri",
  },
  //? Personal Color
  Akali: {
    name: "Akali",
    shortenName: { en_US: "Akali" },
    color: {
      primary: "#2ECC71",
      secondary: "#27AE60",
    },
    apiKey: "Akali",
  },
  //? Personal Color
  Akshan: {
    name: "Akshan",
    shortenName: { en_US: "Akshan" },
    color: {
      primary: "#5DADE2",
      secondary: "#2E86C1",
    },
    apiKey: "Akshan",
  },
  //? Personal Color
  Alistar: {
    name: "Alistar",
    shortenName: { en_US: "Alistar" },
    color: {
      primary: "#B7950B",
      secondary: "#7D6608",
    },
    apiKey: "Alistar",
  },
  //? Personal Color
  Amumu: {
    name: "Amumu",
    shortenName: { en_US: "Amumu" },
    color: {
      primary: "#1ABC9C",
      secondary: "#16A085",
    },
    apiKey: "Amumu",
  },
  //? Personal Color
  Anivia: {
    name: "Anivia",
    shortenName: { en_US: "Anivia" },
    color: {
      primary: "#5DADE2",
      secondary: "#3498DB",
    },
    apiKey: "Anivia",
  },
  //? Personal Color
  Annie: {
    name: "Annie",
    shortenName: { en_US: "Annie" },
    color: {
      primary: "#922B21",
      secondary: "#641E16",
    },
    apiKey: "Annie",
  },
  Aphelios: {
    name: "Aphelios",
    shortenName: { en_US: "Aphelios" },
    color: {
      primary: "#9AC5F4",
      secondary: "#0E46A3",
    },
    apiKey: "Aphelios",
  },
  //? Personal Color
  Ashe: {
    name: "Ashe",
    shortenName: { en_US: "Ashe" },
    color: {
      primary: "#85C1E9",
      secondary: "#3498DB",
    },
    apiKey: "Ashe",
  },
  AurelionSol: {
    name: "Aurelion Sol",
    shortenName: { en_US: "Sol" },
    color: {
      primary: "#867AE9",
      secondary: "#503ef8",
    },
    apiKey: "Aurelion Sol",
  },
  //? Personal Color
  Azir: {
    name: "Azir",
    shortenName: { en_US: "Azir" },
    color: {
      primary: "#F7DC6F",
      secondary: "#F1C40F",
    },
    apiKey: "Azir",
  },
  //? Personal Color
  Bard: {
    name: "Bard",
    shortenName: { en_US: "Bard" },
    color: {
      primary: "#D35400",
      secondary: "#E67E22",
    },
    apiKey: "Bard",
  },
  //? Personal Color
  Belveth: {
    name: "Bel'Veth",
    shortenName: { en_US: "Bel'Veth" },
    color: {
      primary: "#C0392B",
      secondary: "#A93226",
    },
    apiKey: "Bel'Veth",
  },
  //? Personal Color
  Blitzcrank: {
    name: "Blitzcrank",
    shortenName: { en_US: "Blitz" },
    color: {
      primary: "#F1C40F",
      secondary: "#F39C12",
    },
    apiKey: "Blitzcrank",
  },
  //? Personal Color
  Brand: {
    name: "Brand",
    shortenName: { en_US: "Brand" },
    color: {
      primary: "#C0392B",
      secondary: "#E74C3C",
    },
    apiKey: "Brand",
  },
  //? Personal Color
  Braum: {
    name: "Braum",
    shortenName: { en_US: "Braum" },
    color: {
      primary: "#5D6D7E",
      secondary: "#34495E",
    },
    apiKey: "Braum",
  },
  //? Personal Color
  Briar: {
    name: "Briar",
    shortenName: { en_US: "Briar" },
    color: {
      primary: "#117A65",
      secondary: "#0E6655",
    },
    apiKey: "Briar",
  },
  //? Personal Color
  Caitlyn: {
    name: "Caitlyn",
    shortenName: { en_US: "Caitlyn" },
    color: {
      primary: "#7FB3D5",
      secondary: "#5499C7",
    },
    apiKey: "Caitlyn",
  },
  //? Personal Color
  Camille: {
    name: "Camille",
    shortenName: { en_US: "Camille" },
    color: {
      primary: "#48C9B0",
      secondary: "#1ABC9C",
    },
    apiKey: "Camille",
  },
  //? Personal Color
  Cassiopeia: {
    name: "Cassiopeia",
    shortenName: { en_US: "Cassi" },
    color: {
      primary: "#58D68D",
      secondary: "#2ECC71",
    },
    apiKey: "Cassiopeia",
  },
  //? Personal Color
  Chogath: {
    name: "Cho'Gath",
    shortenName: { en_US: "Cho'Gath" },
    color: {
      primary: "#839192",
      secondary: "#707B7C",
    },
    apiKey: "Cho'Gath",
  },
  //? Personal Color
  Corki: {
    name: "Corki",
    shortenName: { en_US: "Corki" },
    color: {
      primary: "#DC7633",
      secondary: "#BA4A00",
    },
    apiKey: "Corki",
  },
  //? Personal Color
  Darius: {
    name: "Darius",
    shortenName: { en_US: "Darius" },
    color: {
      primary: "#641E16",
      secondary: "#7B241C",
    },
    apiKey: "Darius",
  },
  Diana: {
    name: "Diana",
    shortenName: { en_US: "Diana" },
    color: {
      primary: "#9ec1d9",
      secondary: "#303e51",
    },
    apiKey: "Diana",
  },
  //? Personal Color
  DrMundo: {
    name: "Mundo",
    shortenName: { en_US: "Mundo" },
    color: {
      primary: "#58D68D",
      secondary: "#28B463",
    },
    apiKey: "Mundo",
  },
  //? Personal Color
  Draven: {
    name: "Draven",
    shortenName: { en_US: "Draven" },
    color: {
      primary: "#C0392B",
      secondary: "#922B21",
    },
    apiKey: "Draven",
  },
  //? Personal Color
  Ekko: {
    name: "Ekko",
    shortenName: { en_US: "Ekko" },
    color: {
      primary: "#5499C7",
      secondary: "#2980B9",
    },
    apiKey: "Ekko",
  },
  //? Personal Color
  Elise: {
    name: "Elise",
    shortenName: { en_US: "Elise" },
    color: {
      primary: "#922B21",
      secondary: "#641E16",
    },
    apiKey: "Elise",
  },
  //? Personal Color
  Evelynn: {
    name: "Evelynn",
    shortenName: { en_US: "Evelynn" },
    color: {
      primary: "#9B59B6",
      secondary: "#8E44AD",
    },
    apiKey: "Evelynn",
  },
  //? Personal Color
  Ezreal: {
    name: "Ezreal",
    shortenName: { en_US: "Ezreal" },
    color: {
      primary: "#F4D03F",
      secondary: "#F7DC6F",
    },
    apiKey: "Ezreal",
  },
  //? Personal Color
  FiddleSticks: {
    name: "FiddleSticks",
    shortenName: { en_US: "Fiddle" },
    color: {
      primary: "#6C3483",
      secondary: "#5B2C6F",
    },
    apiKey: "Fiddlesticks", //! 예외
  },
  //? Personal Color
  Fiora: {
    name: "Fiora",
    shortenName: { en_US: "Fiora" },
    color: {
      primary: "#CB4335",
      secondary: "#922B21",
    },
    apiKey: "Fiora",
  },
  //? Personal Color
  Fizz: {
    name: "Fizz",
    shortenName: { en_US: "Fizz" },
    color: {
      primary: "#48C9B0",
      secondary: "#1ABC9C",
    },
    apiKey: "Fizz",
  },
  //? Personal Color
  Galio: {
    name: "Galio",
    shortenName: { en_US: "Galio" },
    color: {
      primary: "#34495E",
      secondary: "#2C3E50",
    },
    apiKey: "Galio",
  },
  //? Personal Color
  Gangplank: {
    name: "Gangplank",
    shortenName: { en_US: "Gangplank" },
    color: {
      primary: "#D35400",
      secondary: "#E67E22",
    },
    apiKey: "Gangplank",
  },
  //? Personal Color
  Garen: {
    name: "Garen",
    shortenName: { en_US: "Garen" },
    color: {
      primary: "#239B56",
      secondary: "#1D8348",
    },
    apiKey: "Garen",
  },
  //? Personal Color
  Gnar: {
    name: "Gnar",
    shortenName: { en_US: "Gnar" },
    color: {
      primary: "#A569BD",
      secondary: "#8E44AD",
    },
    apiKey: "Gnar",
  },
  Gragas: {
    name: "Gragas",
    shortenName: { en_US: "Gragas" },
    color: {
      primary: "#ffe8a5",
      secondary: "#FFD966",
    },
    apiKey: "Gragas",
  },
  //? Personal Color
  Graves: {
    name: "Graves",
    shortenName: { en_US: "Graves" },
    color: {
      primary: "#616A6B",
      secondary: "#424949",
    },
    apiKey: "Graves",
  },
  //? Personal Color
  Gwen: {
    name: "Gwen",
    shortenName: { en_US: "Gwen" },
    color: {
      primary: "#AED6F1",
      secondary: "#85C1E9",
    },
    apiKey: "Gwen",
  },
  //? Personal Color
  Hecarim: {
    name: "Hecarim",
    shortenName: { en_US: "Hecarim" },
    color: {
      primary: "#2E86C1",
      secondary: "#1B4F72",
    },
    apiKey: "Hecarim",
  },
  //? Personal Color
  Heimerdinger: {
    name: "Heimerdinger",
    shortenName: { en_US: "Heimer" },
    color: {
      primary: "#F4D03F",
      secondary: "#F5B041",
    },
    apiKey: "Heimerdinger",
  },
  //? Personal Color
  Hwei: {
    name: "Hwei",
    shortenName: { en_US: "Hwei" },
    color: {
      primary: "#8E44AD",
      secondary: "#9B59B6",
    },
    apiKey: "Hwei",
  },
  //? Personal Color
  Illaoi: {
    name: "Illaoi",
    shortenName: { en_US: "Illaoi" },
    color: {
      primary: "#117864",
      secondary: "#0E6251",
    },
    apiKey: "Illaoi",
  },
  //? Personal Color
  Irelia: {
    name: "Irelia",
    shortenName: { en_US: "Irelia" },
    color: {
      primary: "#2980B9",
      secondary: "#3498DB",
    },
    apiKey: "Irelia",
  },
  //? Personal Color
  Ivern: {
    name: "Ivern",
    shortenName: { en_US: "Ivern" },
    color: {
      primary: "#27AE60",
      secondary: "#2ECC71",
    },
    apiKey: "Ivern",
  },
  //? Personal Color
  Janna: {
    name: "Janna",
    shortenName: { en_US: "Janna" },
    color: {
      primary: "#AED6F1",
      secondary: "#85C1E9",
    },
    apiKey: "Janna",
  },
  JarvanIV: {
    name: "Jarvan IV",
    shortenName: { en_US: "Jarvan IV" },
    color: {
      primary: "#FFB319",
      secondary: "#FFAB76",
    },
    apiKey: "Jarvan IV",
  },
  //? Personal Color
  Jax: {
    name: "Jax",
    shortenName: { en_US: "Jax" },
    color: {
      primary: "#784212",
      secondary: "#6E2C00",
    },
    apiKey: "Jax",
  },
  //? Personal Color
  Jayce: {
    name: "Jayce",
    shortenName: { en_US: "Jayce" },
    color: {
      primary: "#5499C7",
      secondary: "#2980B9",
    },
    apiKey: "Jayce",
  },
  //? Personal Color
  Jhin: {
    name: "Jhin",
    shortenName: { en_US: "Jhin" },
    color: {
      primary: "#641E16",
      secondary: "#7B241C",
    },
    apiKey: "Jhin",
  },
  //? Personal Color
  Jinx: {
    name: "Jinx",
    shortenName: { en_US: "Jinx" },
    color: {
      primary: "#C0392B",
      secondary: "#E74C3C",
    },
    apiKey: "Jinx",
  },
  //? Personal Color
  KSante: {
    name: "K'Sante",
    shortenName: { en_US: "K'Sante" },
    color: {
      primary: "#F39C12",
      secondary: "#F1C40F",
    },
    apiKey: "K'Sante",
  },
  //? Personal Color
  Kaisa: {
    name: "Kai'Sa",
    shortenName: { en_US: "Kai'Sa" },
    color: {
      primary: "#7D3C98",
      secondary: "#4A235A",
    },
    apiKey: "Kai'Sa",
  },
  //? Personal Color
  Kalista: {
    name: "Kalista",
    shortenName: { en_US: "Kalista" },
    color: {
      primary: "#117A65",
      secondary: "#0E6655",
    },
    apiKey: "Kalista",
  },
  //? Personal Color
  Karma: {
    name: "Karma",
    shortenName: { en_US: "Karma" },
    color: {
      primary: "#F7DC6F",
      secondary: "#FAD7A0",
    },
    apiKey: "Karma",
  },
  //? Personal Color
  Karthus: {
    name: "Karthus",
    shortenName: { en_US: "Karthus" },
    color: {
      primary: "#5B2C6F",
      secondary: "#7D3C98",
    },
    apiKey: "Karthus",
  },
  //? Personal Color
  Kassadin: {
    name: "Kassadin",
    shortenName: { en_US: "Kassadin" },
    color: {
      primary: "#3498DB",
      secondary: "#5DADE2",
    },
    apiKey: "Kassadin",
  },
  //? Personal Color
  Katarina: {
    name: "Katarina",
    shortenName: { en_US: "Katarina" },
    color: {
      primary: "#CB4335",
      secondary: "#922B21",
    },
    apiKey: "Katarina",
  },
  //? Personal Color
  Kayle: {
    name: "Kayle",
    shortenName: { en_US: "Kayle" },
    color: {
      primary: "#F7DC6F",
      secondary: "#F4D03F",
    },
    apiKey: "Kayle",
  },
  //? Personal Color
  Kayn: {
    name: "Kayn",
    shortenName: { en_US: "Kayn" },
    color: {
      primary: "#34495E",
      secondary: "#2E4053",
    },
    apiKey: "Kayn",
  },
  //? Personal Color
  Kennen: {
    name: "Kennen",
    shortenName: { en_US: "Kennen" },
    color: {
      primary: "#85C1E9",
      secondary: "#AED6F1",
    },
    apiKey: "Kennen",
  },
  //? Personal Color
  Khazix: {
    name: "Kha'Zix",
    shortenName: { en_US: "Kha'Zix" },
    color: {
      primary: "#1ABC9C",
      secondary: "#16A085",
    },
    apiKey: "Kha'Zix",
  },
  Kindred: {
    name: "Kindred",
    shortenName: { en_US: "Kindred" },
    color: {
      primary: "#92B4EC",
      secondary: "#B1BCE6",
    },
    apiKey: "Kindred",
  },
  //? Personal Color
  Kled: {
    name: "Kled",
    shortenName: { en_US: "Kled" },
    color: {
      primary: "#C0392B",
      secondary: "#E74C3C",
    },
    apiKey: "Kled",
  },
  //? Personal Color
  KogMaw: {
    name: "Kog'Maw",
    shortenName: { en_US: "Kog'Maw" },
    color: {
      primary: "#F39C12",
      secondary: "#F1C40F",
    },
    apiKey: "Kog'Maw",
  },
  //? Personal Color
  Leblanc: {
    name: "LeBlanc",
    shortenName: { en_US: "LeBlanc" },
    color: {
      primary: "#76448A",
      secondary: "#633974",
    },
    apiKey: "LeBlanc",
  },
  LeeSin: {
    name: "Lee Sin",
    shortenName: { en_US: "Lee Sin", ko_KR: "리신" },
    color: {
      primary: "#F2613F",
      secondary: "#FF6363",
    },
    apiKey: "Lee Sin",
  },
  //? Personal Color
  Leona: {
    name: "Leona",
    shortenName: { en_US: "Leona" },
    color: {
      primary: "#F1C40F",
      secondary: "#F39C12",
    },
    apiKey: "Leona",
  },
  //? Personal Color
  Lillia: {
    name: "Lillia",
    shortenName: { en_US: "Lillia" },
    color: {
      primary: "#9B59B6",
      secondary: "#8E44AD",
    },
    apiKey: "Lillia",
  },
  //? Personal Color
  Lissandra: {
    name: "Lissandra",
    shortenName: { en_US: "Lissandra" },
    color: {
      primary: "#5DADE2",
      secondary: "#3498DB",
    },
    apiKey: "Lissandra",
  },
  //? Personal Color
  Lucian: {
    name: "Lucian",
    shortenName: { en_US: "Lucian" },
    color: {
      primary: "#8b92b9",
      secondary: "#433f54",
    },
    apiKey: "Lucian",
  },
  //? Personal Color
  Lulu: {
    name: "Lulu",
    shortenName: { en_US: "Lulu" },
    color: {
      primary: "#F7DC6F",
      secondary: "#F4D03F",
    },
    apiKey: "Lulu",
  },
  //? Personal Color
  Lux: {
    name: "Lux",
    shortenName: { en_US: "Lux" },
    color: {
      primary: "#FAD7A0",
      secondary: "#FDEBD0",
    },
    apiKey: "Lux",
  },
  //? Personal Color
  Malphite: {
    name: "Malphite",
    shortenName: { en_US: "Malphite" },
    color: {
      primary: "#626567",
      secondary: "#515A5A",
    },
    apiKey: "Malphite",
  },
  //? Personal Color
  Malzahar: {
    name: "Malzahar",
    shortenName: { en_US: "Malzahar" },
    color: {
      primary: "#8E44AD",
      secondary: "#7D3C98",
    },
    apiKey: "Malzahar",
  },
  //? Personal Color
  Maokai: {
    name: "Maokai",
    shortenName: { en_US: "Maokai" },
    color: {
      primary: "#145A32",
      secondary: "#196F3D",
    },
    apiKey: "Maokai",
  },
  //? Personal Color
  MasterYi: {
    name: "Master Yi",
    shortenName: { en_US: "Master Yi" },
    color: {
      primary: "#79e199",
      secondary: "#16411a",
    },
    apiKey: "Master Yi",
  },
  //? Personal Color
  Milio: {
    name: "Milio",
    shortenName: { en_US: "Milio" },
    color: {
      primary: "#F4D03F",
      secondary: "#F7DC6F",
    },
    apiKey: "Milio",
  },
  //? Personal Color
  MissFortune: {
    name: "Miss Fortune",
    shortenName: { en_US: "Fortune" },
    color: {
      primary: "#E74C3C",
      secondary: "#CB4335",
    },
    apiKey: "Miss Fortune",
  },
  //? Personal Color
  Mordekaiser: {
    name: "Mordekaiser",
    shortenName: { en_US: "Morde" },
    color: {
      primary: "#34495E",
      secondary: "#2C3E50",
    },
    apiKey: "Mordekaiser",
  },
  //? Personal Color
  Morgana: {
    name: "Morgana",
    shortenName: { en_US: "Morgana" },
    color: {
      primary: "#797D7F",
      secondary: "#626567",
    },
    apiKey: "Morgana",
  },
  //? Personal Color
  Naafiri: {
    name: "Naafiri",
    shortenName: { en_US: "Naafiri" },
    color: {
      primary: "#C0392B",
      secondary: "#922B21",
    },
    apiKey: "Naafiri",
  },
  //? Personal Color
  Nami: {
    name: "Nami",
    shortenName: { en_US: "Nami" },
    color: {
      primary: "#85C1E9",
      secondary: "#AED6F1",
    },
    apiKey: "Nami",
  },
  //? Personal Color
  Nasus: {
    name: "Nasus",
    shortenName: { en_US: "Nasus" },
    color: {
      primary: "#F39C12",
      secondary: "#D68910",
    },
    apiKey: "Nasus",
  },
  //? Personal Color
  Nautilus: {
    name: "Nautilus",
    shortenName: { en_US: "Nautilus" },
    color: {
      primary: "#34495E",
      secondary: "#2C3E50",
    },
    apiKey: "Nautilus",
  },
  //? Personal Color
  Neeko: {
    name: "Neeko",
    shortenName: { en_US: "Neeko" },
    color: {
      primary: "#58D68D",
      secondary: "#2ECC71",
    },
    apiKey: "Neeko",
  },
  //? Personal Color
  Nidalee: {
    name: "Nidalee",
    shortenName: { en_US: "Nidalee" },
    color: {
      primary: "#229954",
      secondary: "#27AE60",
    },
    apiKey: "Nidalee",
  },
  //? Personal Color
  Nilah: {
    name: "Nilah",
    shortenName: { en_US: "Nilah" },
    color: {
      primary: "#3498DB",
      secondary: "#5DADE2",
    },
    apiKey: "Nilah",
  },
  Nocturne: {
    name: "Nocturne",
    shortenName: { en_US: "Nocturne" },
    color: {
      primary: "#0c9dd4",
      secondary: "#1d2e78",
    },
    apiKey: "Nocturne",
  },
  //? Personal Color
  Nunu: {
    name: "Nunu",
    shortenName: { en_US: "Nunu" },
    color: {
      primary: "#5499C7",
      secondary: "#2980B9",
    },
    apiKey: "Nunu",
  },
  //? Personal Color
  Olaf: {
    name: "Olaf",
    shortenName: { en_US: "Olaf" },
    color: {
      primary: "#C0392B",
      secondary: "#E74C3C",
    },
    apiKey: "Olaf",
  },
  //? Personal Color
  Orianna: {
    name: "Orianna",
    shortenName: { en_US: "Orianna" },
    color: {
      primary: "#85929E",
      secondary: "#5D6D7E",
    },
    apiKey: "Orianna",
  },
  Ornn: {
    name: "Ornn",
    shortenName: { en_US: "Ornn" },
    color: {
      primary: "#c61141",
      secondary: "#370924",
    },
    apiKey: "Ornn",
  },
  //? Personal Color
  Pantheon: {
    name: "Pantheon",
    shortenName: { en_US: "Pantheon" },
    color: {
      primary: "#7B241C",
      secondary: "#922B21",
    },
    apiKey: "Pantheon",
  },
  //? Personal Color
  Poppy: {
    name: "Poppy",
    shortenName: { en_US: "Poppy" },
    color: {
      primary: "#5DADE2",
      secondary: "#3498DB",
    },
    apiKey: "Poppy",
  },
  //? Personal Color
  Pyke: {
    name: "Pyke",
    shortenName: { en_US: "Pyke" },
    color: {
      primary: "#1B4F72",
      secondary: "#154360",
    },
    apiKey: "Pyke",
  },
  //? Personal Color
  Qiyana: {
    name: "Qiyana",
    shortenName: { en_US: "Qiyana" },
    color: {
      primary: "#27AE60",
      secondary: "#229954",
    },
    apiKey: "Qiyana",
  },
  //? Personal Color
  Quinn: {
    name: "Quinn",
    shortenName: { en_US: "Quinn" },
    color: {
      primary: "#7E5109",
      secondary: "#6E2C00",
    },
    apiKey: "Quinn",
  },
  //? Personal Color
  Rakan: {
    name: "Rakan",
    shortenName: { en_US: "Rakan" },
    color: {
      primary: "#F1948A",
      secondary: "#EC7063",
    },
    apiKey: "Rakan",
  },
  //? Personal Color
  Rammus: {
    name: "Rammus",
    shortenName: { en_US: "Rammus" },
    color: {
      primary: "#9C640C",
      secondary: "#7E5109",
    },
    apiKey: "Rammus",
  },
  RekSai: {
    name: "Rek'Sai",
    shortenName: { en_US: "Rek'Sai" },
    color: {
      primary: "#D09CFA",
      secondary: "#A555EC",
    },
    apiKey: "Rek'Sai",
  },
  //? Personal Color
  Rell: {
    name: "Rell",
    shortenName: { en_US: "Rell" },
    color: {
      primary: "#922B21",
      secondary: "#7B241C",
    },
    apiKey: "Rell",
  },
  //? Personal Color
  Renata: {
    name: "Renata",
    shortenName: { en_US: "Renata" },
    color: {
      primary: "#D5D8DC",
      secondary: "#ABB2B9",
    },
    apiKey: "Renata",
  },
  //? Personal Color
  Renekton: {
    name: "Renekton",
    shortenName: { en_US: "Renekton" },
    color: {
      primary: "#922B21",
      secondary: "#7B241C",
    },
    apiKey: "Renekton",
  },
  //? Personal Color
  Rengar: {
    name: "Rengar",
    shortenName: { en_US: "Rengar" },
    color: {
      primary: "#27AE60",
      secondary: "#229954",
    },
    apiKey: "Rengar",
  },
  //? Personal Color
  Riven: {
    name: "Riven",
    shortenName: { en_US: "Riven" },
    color: {
      primary: "#7D3C98",
      secondary: "#6C3483",
    },
    apiKey: "Riven",
  },
  //? Personal Color
  Rumble: {
    name: "Rumble",
    shortenName: { en_US: "Rumble" },
    color: {
      primary: "#E67E22",
      secondary: "#D35400",
    },
    apiKey: "Rumble",
  },
  //? Personal Color
  Ryze: {
    name: "Ryze",
    shortenName: { en_US: "Ryze" },
    color: {
      primary: "#5DADE2",
      secondary: "#3498DB",
    },
    apiKey: "Ryze",
  },
  //? Personal Color
  Samira: {
    name: "Samira",
    shortenName: { en_US: "Samira" },
    color: {
      primary: "#C0392B",
      secondary: "#922B21",
    },
    apiKey: "Samira",
  },
  //? Personal Color
  Sejuani: {
    name: "Sejuani",
    shortenName: { en_US: "Sejuani" },
    color: {
      primary: "#AED6F1",
      secondary: "#85C1E9",
    },
    apiKey: "Sejuani",
  },
  //? Personal Color
  Senna: {
    name: "Senna",
    shortenName: { en_US: "Senna" },
    color: {
      primary: "#a6f2f5",
      secondary: "#164e6d",
    },
    apiKey: "Senna",
  },
  //? Personal Color
  Seraphine: {
    name: "Seraphine",
    shortenName: { en_US: "Seraphine" },
    color: {
      primary: "#F5B7B1",
      secondary: "#F1948A",
    },
    apiKey: "Seraphine",
  },
  //? Personal Color
  Sett: {
    name: "Sett",
    shortenName: { en_US: "Sett" },
    color: {
      primary: "#C0392B",
      secondary: "#E74C3C",
    },
    apiKey: "Sett",
  },
  //? Personal Color
  Shaco: {
    name: "Shaco",
    shortenName: { en_US: "Shaco" },
    color: {
      primary: "#9B59B6",
      secondary: "#8E44AD",
    },
    apiKey: "Shaco",
  },
  //? Personal Color
  Shen: {
    name: "Shen",
    shortenName: { en_US: "Shen" },
    color: {
      primary: "#3498DB",
      secondary: "#2980B9",
    },
    apiKey: "Shen",
  },
  //? Personal Color
  Shyvana: {
    name: "Shyvana",
    shortenName: { en_US: "Shyvana" },
    color: {
      primary: "#C0392B",
      secondary: "#922B21",
    },
    apiKey: "Shyvana",
  },
  //? Personal Color
  Singed: {
    name: "Singed",
    shortenName: { en_US: "Singed" },
    color: {
      primary: "#27AE60",
      secondary: "#229954",
    },
    apiKey: "Singed",
  },
  //? Personal Color
  Sion: {
    name: "Sion",
    shortenName: { en_US: "Sion" },
    color: {
      primary: "#7B241C",
      secondary: "#641E16",
    },
    apiKey: "Sion",
  },
  //? Personal Color
  Sivir: {
    name: "Sivir",
    shortenName: { en_US: "Sivir" },
    color: {
      primary: "#D4AC0D",
      secondary: "#B7950B",
    },
    apiKey: "Sivir",
  },
  //? Personal Color
  Skarner: {
    name: "Skarner",
    shortenName: { en_US: "Skarner" },
    color: {
      primary: "#5DADE2",
      secondary: "#3498DB",
    },
    apiKey: "Skarner",
  },
  //? Personal Color
  Smolder: {
    name: "Smolder",
    shortenName: { en_US: "Smolder" },
    color: {
      primary: "#E74C3C",
      secondary: "#CB4335",
    },
    apiKey: "Smolder",
  },
  //? Personal Color
  Sona: {
    name: "Sona",
    shortenName: { en_US: "Sona" },
    color: {
      primary: "#5499C7",
      secondary: "#2980B9",
    },
    apiKey: "Sona",
  },
  //? Personal Color
  Soraka: {
    name: "Soraka",
    shortenName: { en_US: "Soraka" },
    color: {
      primary: "#F7DC6F",
      secondary: "#F4D03F",
    },
    apiKey: "Soraka",
  },
  //? Personal Color
  Swain: {
    name: "Swain",
    shortenName: { en_US: "Swain" },
    color: {
      primary: "#641E16",
      secondary: "#7B241C",
    },
    apiKey: "Swain",
  },
  Sylas: {
    name: "Sylas",
    shortenName: { en_US: "Sylas" },
    color: {
      primary: "#B1BCE6",
      secondary: "#92B4EC",
    },
    apiKey: "Sylas",
  },
  //? Personal Color
  Syndra: {
    name: "Syndra",
    shortenName: { en_US: "Syndra" },
    color: {
      primary: "#7D3C98",
      secondary: "#6C3483",
    },
    apiKey: "Syndra",
  },
  //? Personal Color
  TahmKench: {
    name: "Tahm Kench",
    shortenName: { en_US: "Kench" },
    color: {
      primary: "#5499C7",
      secondary: "#2980B9",
    },
    apiKey: "Tahm Kench",
  },
  //? Personal Color
  Taliyah: {
    name: "Taliyah",
    shortenName: { en_US: "Taliyah" },
    color: {
      primary: "#117A65",
      secondary: "#0E6655",
    },
    apiKey: "Taliyah",
  },
  //? Personal Color
  Talon: {
    name: "Talon",
    shortenName: { en_US: "Talon" },
    color: {
      primary: "#34495E",
      secondary: "#2C3E50",
    },
    apiKey: "Talon",
  },
  //? Personal Color
  Taric: {
    name: "Taric",
    shortenName: { en_US: "Taric" },
    color: {
      primary: "#85C1E9",
      secondary: "#AED6F1",
    },
    apiKey: "Taric",
  },
  //? Personal Color
  Teemo: {
    name: "Teemo",
    shortenName: { en_US: "Teemo" },
    color: {
      primary: "#F39C12",
      secondary: "#F1C40F",
    },
    apiKey: "Teemo",
  },
  //? Personal Color
  Thresh: {
    name: "Thresh",
    shortenName: { en_US: "Thresh" },
    color: {
      primary: "#16A085",
      secondary: "#1ABC9C",
    },
    apiKey: "Thresh",
  },
  //? Personal Color
  Tristana: {
    name: "Tristana",
    shortenName: { en_US: "Tristana" },
    color: {
      primary: "#3498DB",
      secondary: "#5DADE2",
    },
    apiKey: "Tristana",
  },
  //? Personal Color
  Trundle: {
    name: "Trundle",
    shortenName: { en_US: "Trundle" },
    color: {
      primary: "#1B4F72",
      secondary: "#154360",
    },
    apiKey: "Trundle",
  },
  //? Personal Color
  Tryndamere: {
    name: "Tryndamere",
    shortenName: { en_US: "Trynd" },
    color: {
      primary: "#C0392B",
      secondary: "#922B21",
    },
    apiKey: "Tryndamere",
  },
  //? Personal Color
  TwistedFate: {
    name: "Twisted Fate",
    shortenName: { en_US: "Twisted", ko_KR: "트페" },
    color: {
      primary: "#89a4bc",
      secondary: "#7aa8dc",
    },
    apiKey: "Twisted Fate",
  },
  Twitch: {
    name: "Twitch",
    shortenName: { en_US: "Twitch" },
    color: {
      primary: "#B980F0",
      secondary: "#6C3483",
    },
    apiKey: "Twitch",
  },
  //? Personal Color
  Udyr: {
    name: "Udyr",
    shortenName: { en_US: "Udyr" },
    color: {
      primary: "#D35400",
      secondary: "#E67E22",
    },
    apiKey: "Udyr",
  },
  //? Personal Color
  Urgot: {
    name: "Urgot",
    shortenName: { en_US: "Urgot" },
    color: {
      primary: "#34495E",
      secondary: "#2C3E50",
    },
    apiKey: "Urgot",
  },
  //? Personal Color
  Varus: {
    name: "Varus",
    shortenName: { en_US: "Varus" },
    color: {
      primary: "#1ABC9C",
      secondary: "#16A085",
    },
    apiKey: "Varus",
  },
  //? Personal Color
  Vayne: {
    name: "Vayne",
    shortenName: { en_US: "Vayne" },
    color: {
      primary: "#7B241C",
      secondary: "#641E16",
    },
    apiKey: "Vayne",
  },
  //? Personal Color
  Veigar: {
    name: "Veigar",
    shortenName: { en_US: "Veigar" },
    color: {
      primary: "#8E44AD",
      secondary: "#9B59B6",
    },
    apiKey: "Veigar",
  },
  //? Personal Color
  Velkoz: {
    name: "Vel'Koz",
    shortenName: { en_US: "Vel'Koz" },
    color: {
      primary: "#5DADE2",
      secondary: "#3498DB",
    },
    apiKey: "Vel'Koz",
  },
  //? Personal Color
  Vex: {
    name: "Vex",
    shortenName: { en_US: "Vex" },
    color: {
      primary: "#34495E",
      secondary: "#2C3E50",
    },
    apiKey: "Vex",
  },
  //? Personal Color
  Vi: {
    name: "Vi",
    shortenName: { en_US: "Vi" },
    color: {
      primary: "#C0392B",
      secondary: "#E74C3C",
    },
    apiKey: "Vi",
  },
  //? Personal Color
  Viego: {
    name: "Viego",
    shortenName: { en_US: "Viego" },
    color: {
      primary: "#1ad0ab",
      secondary: "#156f5b",
    },
    apiKey: "Viego",
  },
  //? Personal Color
  Viktor: {
    name: "Viktor",
    shortenName: { en_US: "Viktor" },
    color: {
      primary: "#5499C7",
      secondary: "#2980B9",
    },
    apiKey: "Viktor",
  },
  //? Personal Color
  Vladimir: {
    name: "Vladimir",
    shortenName: { en_US: "Vladimir" },
    color: {
      primary: "#922B21",
      secondary: "#641E16",
    },
    apiKey: "Vladimir",
  },
  //? Personal Color
  Volibear: {
    name: "Volibear",
    shortenName: { en_US: "Volibear" },
    color: {
      primary: "#1B4F72",
      secondary: "#154360",
    },
    apiKey: "Volibear",
  },
  //? Personal Color
  Warwick: {
    name: "Warwick",
    shortenName: { en_US: "Warwick" },
    color: {
      primary: "#7E5109",
      secondary: "#6E2C00",
    },
    apiKey: "Warwick",
  },
  //? Personal Color
  MonkeyKing: {
    name: "Wukong",
    shortenName: { en_US: "Wukong" },
    color: {
      primary: "#D4AC0D",
      secondary: "#B7950B",
    },
    apiKey: "Wukong",
  },
  //? Personal Color
  Xayah: {
    name: "Xayah",
    shortenName: { en_US: "Xayah" },
    color: {
      primary: "#922B21",
      secondary: "#641E16",
    },
    apiKey: "Xayah",
  },
  //? Personal Color
  Xerath: {
    name: "Xerath",
    shortenName: { en_US: "Xerath" },
    color: {
      primary: "#85C1E9",
      secondary: "#AED6F1",
    },
    apiKey: "Xerath",
  },
  //? Personal Color
  XinZhao: {
    name: "Xin Zhao",
    shortenName: { en_US: "Xin Zhao" },
    color: {
      primary: "#C0392B",
      secondary: "#E74C3C",
    },
    apiKey: "Xin Zhao",
  },
  //? Personal Color
  Yasuo: {
    name: "Yasuo",
    shortenName: { en_US: "Yasuo" },
    color: {
      primary: "#5499C7",
      secondary: "#2980B9",
    },
    apiKey: "Yasuo",
  },
  //? Personal Color
  Yone: {
    name: "Yone",
    shortenName: { en_US: "Yone" },
    color: {
      primary: "#1ABC9C",
      secondary: "#16A085",
    },
    apiKey: "Yone",
  },
  //? Personal Color
  Yorick: {
    name: "Yorick",
    shortenName: { en_US: "Yorick" },
    color: {
      primary: "#6C3483",
      secondary: "#5B2C6F",
    },
    apiKey: "Yorick",
  },
  //? Personal Color
  Yuumi: {
    name: "Yuumi",
    shortenName: { en_US: "Yuumi" },
    color: {
      primary: "#A569BD",
      secondary: "#8E44AD",
    },
    apiKey: "Yuumi",
  },
  //? Personal Color
  Zac: {
    name: "Zac",
    shortenName: { en_US: "Zac" },
    color: {
      primary: "#27AE60",
      secondary: "#2ECC71",
    },
    apiKey: "Zac",
  },
  //? Personal Color
  Zed: {
    name: "Zed",
    shortenName: { en_US: "Zed" },
    color: {
      primary: "#34495E",
      secondary: "#2C3E50",
    },
    apiKey: "Zed",
  },
  //? Personal Color
  Zeri: {
    name: "Zeri",
    shortenName: { en_US: "Zeri" },
    color: {
      primary: "#58D68D",
      secondary: "#2ECC71",
    },
    apiKey: "Zeri",
  },
  //? Personal Color
  Ziggs: {
    name: "Ziggs",
    shortenName: { en_US: "Ziggs" },
    color: {
      primary: "#F39C12",
      secondary: "#F1C40F",
    },
    apiKey: "Ziggs",
  },
  //? Personal Color
  Zilean: {
    name: "Zilean",
    shortenName: { en_US: "Zilean" },
    color: {
      primary: "#F7DC6F",
      secondary: "#F4D03F",
    },
    apiKey: "Zilean",
  },
  //? Personal Color
  Zoe: {
    name: "Zoe",
    shortenName: { en_US: "Zoe" },
    color: {
      primary: "#F1948A",
      secondary: "#EC7063",
    },
    apiKey: "Zoe",
  },
  //? Personal Color
  Zyra: {
    name: "Zyra",
    shortenName: { en_US: "Zyra" },
    color: {
      primary: "#229954",
      secondary: "#27AE60",
    },
    apiKey: "Zyra",
  },
};
