import { Locale } from "./model";

export type ChampionDto = {
  [key: string]: {
    name: string;
    // eslint-disable-next-line no-unused-vars
    shortenName: { [K in Locale]?: string };
    color: { primary: string; secondary: string };
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
  },
  //? Personal Color
  Ahri: {
    name: "Ahri",
    shortenName: { en_US: "Ahri" },
    color: {
      primary: "#EE82EE",
      secondary: "#FFC0CB",
    },
  },
  //? Personal Color
  Akali: {
    name: "Akali",
    shortenName: { en_US: "Akali" },
    color: {
      primary: "#2ECC71",
      secondary: "#27AE60",
    },
  },
  //? Personal Color
  Akshan: {
    name: "Akshan",
    shortenName: { en_US: "Akshan" },
    color: {
      primary: "#5DADE2",
      secondary: "#2E86C1",
    },
  },
  //? Personal Color
  Alistar: {
    name: "Alistar",
    shortenName: { en_US: "Alistar" },
    color: {
      primary: "#B7950B",
      secondary: "#7D6608",
    },
  },
  //? Personal Color
  Amumu: {
    name: "Amumu",
    shortenName: { en_US: "Amumu" },
    color: {
      primary: "#1ABC9C",
      secondary: "#16A085",
    },
  },
  //? Personal Color
  Anivia: {
    name: "Anivia",
    shortenName: { en_US: "Anivia" },
    color: {
      primary: "#5DADE2",
      secondary: "#3498DB",
    },
  },
  //? Personal Color
  Annie: {
    name: "Annie",
    shortenName: { en_US: "Annie" },
    color: {
      primary: "#922B21",
      secondary: "#641E16",
    },
  },
  Aphelios: {
    name: "Aphelios",
    shortenName: { en_US: "Aphelios" },
    color: {
      primary: "#9AC5F4",
      secondary: "#0E46A3",
    },
  },
  //? Personal Color
  Ashe: {
    name: "Ashe",
    shortenName: { en_US: "Ashe" },
    color: {
      primary: "#85C1E9",
      secondary: "#3498DB",
    },
  },
  AurelionSol: {
    name: "Aurelion Sol",
    shortenName: { en_US: "Sol" },
    color: {
      primary: "#867AE9",
      secondary: "#503ef8",
    },
  },
  //? Personal Color
  Azir: {
    name: "Azir",
    shortenName: { en_US: "Azir" },
    color: {
      primary: "#F7DC6F",
      secondary: "#F1C40F",
    },
  },
  //? Personal Color
  Bard: {
    name: "Bard",
    shortenName: { en_US: "Bard" },
    color: {
      primary: "#D35400",
      secondary: "#E67E22",
    },
  },
  //? Personal Color
  Belveth: {
    name: "Bel'Veth",
    shortenName: { en_US: "Bel'Veth" },
    color: {
      primary: "#C0392B",
      secondary: "#A93226",
    },
  },
  //? Personal Color
  Blitzcrank: {
    name: "Blitzcrank",
    shortenName: { en_US: "Blitz" },
    color: {
      primary: "#F1C40F",
      secondary: "#F39C12",
    },
  },
  //? Personal Color
  Brand: {
    name: "Brand",
    shortenName: { en_US: "Brand" },
    color: {
      primary: "#C0392B",
      secondary: "#E74C3C",
    },
  },
  //? Personal Color
  Braum: {
    name: "Braum",
    shortenName: { en_US: "Braum" },
    color: {
      primary: "#5D6D7E",
      secondary: "#34495E",
    },
  },
  //? Personal Color
  Briar: {
    name: "Briar",
    shortenName: { en_US: "Briar" },
    color: {
      primary: "#117A65",
      secondary: "#0E6655",
    },
  },
  //? Personal Color
  Caitlyn: {
    name: "Caitlyn",
    shortenName: { en_US: "Caitlyn" },
    color: {
      primary: "#7FB3D5",
      secondary: "#5499C7",
    },
  },
  //? Personal Color
  Camille: {
    name: "Camille",
    shortenName: { en_US: "Camille" },
    color: {
      primary: "#48C9B0",
      secondary: "#1ABC9C",
    },
  },
  //? Personal Color
  Cassiopeia: {
    name: "Cassiopeia",
    shortenName: { en_US: "Cassi" },
    color: {
      primary: "#58D68D",
      secondary: "#2ECC71",
    },
  },
  //? Personal Color
  Chogath: {
    name: "Cho'Gath",
    shortenName: { en_US: "Cho'Gath" },
    color: {
      primary: "#839192",
      secondary: "#707B7C",
    },
  },
  //? Personal Color
  Corki: {
    name: "Corki",
    shortenName: { en_US: "Corki" },
    color: {
      primary: "#DC7633",
      secondary: "#BA4A00",
    },
  },
  //? Personal Color
  Darius: {
    name: "Darius",
    shortenName: { en_US: "Darius" },
    color: {
      primary: "#641E16",
      secondary: "#7B241C",
    },
  },
  Diana: {
    name: "Diana",
    shortenName: { en_US: "Diana" },
    color: {
      primary: "#9ec1d9",
      secondary: "#303e51",
    },
  },
  //? Personal Color
  DrMundo: {
    name: "Mundo",
    shortenName: { en_US: "Mundo" },
    color: {
      primary: "#58D68D",
      secondary: "#28B463",
    },
  },
  //? Personal Color
  Draven: {
    name: "Draven",
    shortenName: { en_US: "Draven" },
    color: {
      primary: "#C0392B",
      secondary: "#922B21",
    },
  },
  //? Personal Color
  Ekko: {
    name: "Ekko",
    shortenName: { en_US: "Ekko" },
    color: {
      primary: "#5499C7",
      secondary: "#2980B9",
    },
  },
  //? Personal Color
  Elise: {
    name: "Elise",
    shortenName: { en_US: "Elise" },
    color: {
      primary: "#922B21",
      secondary: "#641E16",
    },
  },
  //? Personal Color
  Evelynn: {
    name: "Evelynn",
    shortenName: { en_US: "Evelynn" },
    color: {
      primary: "#9B59B6",
      secondary: "#8E44AD",
    },
  },
  //? Personal Color
  Ezreal: {
    name: "Ezreal",
    shortenName: { en_US: "Ezreal" },
    color: {
      primary: "#F4D03F",
      secondary: "#F7DC6F",
    },
  },
  //? Personal Color
  Fiddlesticks: {
    name: "Fiddlesticks",
    shortenName: { en_US: "Fiddle" },
    color: {
      primary: "#6C3483",
      secondary: "#5B2C6F",
    },
  },
  //? Personal Color
  Fiora: {
    name: "Fiora",
    shortenName: { en_US: "Fiora" },
    color: {
      primary: "#CB4335",
      secondary: "#922B21",
    },
  },
  //? Personal Color
  Fizz: {
    name: "Fizz",
    shortenName: { en_US: "Fizz" },
    color: {
      primary: "#48C9B0",
      secondary: "#1ABC9C",
    },
  },
  //? Personal Color
  Galio: {
    name: "Galio",
    shortenName: { en_US: "Galio" },
    color: {
      primary: "#34495E",
      secondary: "#2C3E50",
    },
  },
  //? Personal Color
  Gangplank: {
    name: "Gangplank",
    shortenName: { en_US: "Gangplank" },
    color: {
      primary: "#D35400",
      secondary: "#E67E22",
    },
  },
  //? Personal Color
  Garen: {
    name: "Garen",
    shortenName: { en_US: "Garen" },
    color: {
      primary: "#239B56",
      secondary: "#1D8348",
    },
  },
  //? Personal Color
  Gnar: {
    name: "Gnar",
    shortenName: { en_US: "Gnar" },
    color: {
      primary: "#A569BD",
      secondary: "#8E44AD",
    },
  },
  Gragas: {
    name: "Gragas",
    shortenName: { en_US: "Gragas" },
    color: {
      primary: "#ffe8a5",
      secondary: "#FFD966",
    },
  },
  //? Personal Color
  Graves: {
    name: "Graves",
    shortenName: { en_US: "Graves" },
    color: {
      primary: "#616A6B",
      secondary: "#424949",
    },
  },
  //? Personal Color
  Gwen: {
    name: "Gwen",
    shortenName: { en_US: "Gwen" },
    color: {
      primary: "#AED6F1",
      secondary: "#85C1E9",
    },
  },
  //? Personal Color
  Hecarim: {
    name: "Hecarim",
    shortenName: { en_US: "Hecarim" },
    color: {
      primary: "#2E86C1",
      secondary: "#1B4F72",
    },
  },
  //? Personal Color
  Heimerdinger: {
    name: "Heimerdinger",
    shortenName: { en_US: "Heimer" },
    color: {
      primary: "#F4D03F",
      secondary: "#F5B041",
    },
  },
  //? Personal Color
  Hwei: {
    name: "Hwei",
    shortenName: { en_US: "Hwei" },
    color: {
      primary: "#8E44AD",
      secondary: "#9B59B6",
    },
  },
  //? Personal Color
  Illaoi: {
    name: "Illaoi",
    shortenName: { en_US: "Illaoi" },
    color: {
      primary: "#117864",
      secondary: "#0E6251",
    },
  },
  //? Personal Color
  Irelia: {
    name: "Irelia",
    shortenName: { en_US: "Irelia" },
    color: {
      primary: "#2980B9",
      secondary: "#3498DB",
    },
  },
  //? Personal Color
  Ivern: {
    name: "Ivern",
    shortenName: { en_US: "Ivern" },
    color: {
      primary: "#27AE60",
      secondary: "#2ECC71",
    },
  },
  //? Personal Color
  Janna: {
    name: "Janna",
    shortenName: { en_US: "Janna" },
    color: {
      primary: "#AED6F1",
      secondary: "#85C1E9",
    },
  },
  JarvanIV: {
    name: "Jarvan IV",
    shortenName: { en_US: "Jarvan IV" },
    color: {
      primary: "#FFB319",
      secondary: "#FFAB76",
    },
  },
  //? Personal Color
  Jax: {
    name: "Jax",
    shortenName: { en_US: "Jax" },
    color: {
      primary: "#784212",
      secondary: "#6E2C00",
    },
  },
  //? Personal Color
  Jayce: {
    name: "Jayce",
    shortenName: { en_US: "Jayce" },
    color: {
      primary: "#5499C7",
      secondary: "#2980B9",
    },
  },
  //? Personal Color
  Jhin: {
    name: "Jhin",
    shortenName: { en_US: "Jhin" },
    color: {
      primary: "#641E16",
      secondary: "#7B241C",
    },
  },
  //? Personal Color
  Jinx: {
    name: "Jinx",
    shortenName: { en_US: "Jinx" },
    color: {
      primary: "#C0392B",
      secondary: "#E74C3C",
    },
  },
  //? Personal Color
  KSante: {
    name: "K'Sante",
    shortenName: { en_US: "K'Sante" },
    color: {
      primary: "#F39C12",
      secondary: "#F1C40F",
    },
  },
  //? Personal Color
  Kaisa: {
    name: "Kai'Sa",
    shortenName: { en_US: "Kai'Sa" },
    color: {
      primary: "#7D3C98",
      secondary: "#4A235A",
    },
  },
  //? Personal Color
  Kalista: {
    name: "Kalista",
    shortenName: { en_US: "Kalista" },
    color: {
      primary: "#117A65",
      secondary: "#0E6655",
    },
  },
  //? Personal Color
  Karma: {
    name: "Karma",
    shortenName: { en_US: "Karma" },
    color: {
      primary: "#F7DC6F",
      secondary: "#FAD7A0",
    },
  },
  //? Personal Color
  Karthus: {
    name: "Karthus",
    shortenName: { en_US: "Karthus" },
    color: {
      primary: "#5B2C6F",
      secondary: "#7D3C98",
    },
  },
  //? Personal Color
  Kassadin: {
    name: "Kassadin",
    shortenName: { en_US: "Kassadin" },
    color: {
      primary: "#3498DB",
      secondary: "#5DADE2",
    },
  },
  //? Personal Color
  Katarina: {
    name: "Katarina",
    shortenName: { en_US: "Katarina" },
    color: {
      primary: "#CB4335",
      secondary: "#922B21",
    },
  },
  //? Personal Color
  Kayle: {
    name: "Kayle",
    shortenName: { en_US: "Kayle" },
    color: {
      primary: "#F7DC6F",
      secondary: "#F4D03F",
    },
  },
  //? Personal Color
  Kayn: {
    name: "Kayn",
    shortenName: { en_US: "Kayn" },
    color: {
      primary: "#34495E",
      secondary: "#2E4053",
    },
  },
  //? Personal Color
  Kennen: {
    name: "Kennen",
    shortenName: { en_US: "Kennen" },
    color: {
      primary: "#85C1E9",
      secondary: "#AED6F1",
    },
  },
  //? Personal Color
  Khazix: {
    name: "Kha'Zix",
    shortenName: { en_US: "Kha'Zix" },
    color: {
      primary: "#1ABC9C",
      secondary: "#16A085",
    },
  },
  Kindred: {
    name: "Kindred",
    shortenName: { en_US: "Kindred" },
    color: {
      primary: "#92B4EC",
      secondary: "#B1BCE6",
    },
  },
  //? Personal Color
  Kled: {
    name: "Kled",
    shortenName: { en_US: "Kled" },
    color: {
      primary: "#C0392B",
      secondary: "#E74C3C",
    },
  },
  //? Personal Color
  KogMaw: {
    name: "Kog'Maw",
    shortenName: { en_US: "Kog'Maw" },
    color: {
      primary: "#F39C12",
      secondary: "#F1C40F",
    },
  },
  //? Personal Color
  Leblanc: {
    name: "LeBlanc",
    shortenName: { en_US: "LeBlanc" },
    color: {
      primary: "#76448A",
      secondary: "#633974",
    },
  },
  LeeSin: {
    name: "Lee Sin",
    shortenName: { en_US: "Lee Sin", ko_KR: "리신" },
    color: {
      primary: "#F2613F",
      secondary: "#FF6363",
    },
  },
  //? Personal Color
  Leona: {
    name: "Leona",
    shortenName: { en_US: "Leona" },
    color: {
      primary: "#F1C40F",
      secondary: "#F39C12",
    },
  },
  //? Personal Color
  Lillia: {
    name: "Lillia",
    shortenName: { en_US: "Lillia" },
    color: {
      primary: "#9B59B6",
      secondary: "#8E44AD",
    },
  },
  //? Personal Color
  Lissandra: {
    name: "Lissandra",
    shortenName: { en_US: "Lissandra" },
    color: {
      primary: "#5DADE2",
      secondary: "#3498DB",
    },
  },
  //? Personal Color
  Lucian: {
    name: "Lucian",
    shortenName: { en_US: "Lucian" },
    color: {
      primary: "#8b92b9",
      secondary: "#433f54",
    },
  },
  //? Personal Color
  Lulu: {
    name: "Lulu",
    shortenName: { en_US: "Lulu" },
    color: {
      primary: "#F7DC6F",
      secondary: "#F4D03F",
    },
  },
  //? Personal Color
  Lux: {
    name: "Lux",
    shortenName: { en_US: "Lux" },
    color: {
      primary: "#FAD7A0",
      secondary: "#FDEBD0",
    },
  },
  //? Personal Color
  Malphite: {
    name: "Malphite",
    shortenName: { en_US: "Malphite" },
    color: {
      primary: "#626567",
      secondary: "#515A5A",
    },
  },
  //? Personal Color
  Malzahar: {
    name: "Malzahar",
    shortenName: { en_US: "Malzahar" },
    color: {
      primary: "#8E44AD",
      secondary: "#7D3C98",
    },
  },
  //? Personal Color
  Maokai: {
    name: "Maokai",
    shortenName: { en_US: "Maokai" },
    color: {
      primary: "#145A32",
      secondary: "#196F3D",
    },
  },
  //? Personal Color
  MasterYi: {
    name: "Master Yi",
    shortenName: { en_US: "Master Yi" },
    color: {
      primary: "#79e199",
      secondary: "#16411a",
    },
  },
  //? Personal Color
  Milio: {
    name: "Milio",
    shortenName: { en_US: "Milio" },
    color: {
      primary: "#F4D03F",
      secondary: "#F7DC6F",
    },
  },
  //? Personal Color
  MissFortune: {
    name: "Miss Fortune",
    shortenName: { en_US: "Fortune" },
    color: {
      primary: "#E74C3C",
      secondary: "#CB4335",
    },
  },
  //? Personal Color
  Mordekaiser: {
    name: "Mordekaiser",
    shortenName: { en_US: "Morde" },
    color: {
      primary: "#34495E",
      secondary: "#2C3E50",
    },
  },
  //? Personal Color
  Morgana: {
    name: "Morgana",
    shortenName: { en_US: "Morgana" },
    color: {
      primary: "#797D7F",
      secondary: "#626567",
    },
  },
  //? Personal Color
  Naafiri: {
    name: "Naafiri",
    shortenName: { en_US: "Naafiri" },
    color: {
      primary: "#C0392B",
      secondary: "#922B21",
    },
  },
  //? Personal Color
  Nami: {
    name: "Nami",
    shortenName: { en_US: "Nami" },
    color: {
      primary: "#85C1E9",
      secondary: "#AED6F1",
    },
  },
  //? Personal Color
  Nasus: {
    name: "Nasus",
    shortenName: { en_US: "Nasus" },
    color: {
      primary: "#F39C12",
      secondary: "#D68910",
    },
  },
  //? Personal Color
  Nautilus: {
    name: "Nautilus",
    shortenName: { en_US: "Nautilus" },
    color: {
      primary: "#34495E",
      secondary: "#2C3E50",
    },
  },
  //? Personal Color
  Neeko: {
    name: "Neeko",
    shortenName: { en_US: "Neeko" },
    color: {
      primary: "#58D68D",
      secondary: "#2ECC71",
    },
  },
  //? Personal Color
  Nidalee: {
    name: "Nidalee",
    shortenName: { en_US: "Nidalee" },
    color: {
      primary: "#229954",
      secondary: "#27AE60",
    },
  },
  //? Personal Color
  Nilah: {
    name: "Nilah",
    shortenName: { en_US: "Nilah" },
    color: {
      primary: "#3498DB",
      secondary: "#5DADE2",
    },
  },
  Nocturne: {
    name: "Nocturne",
    shortenName: { en_US: "Nocturne" },
    color: {
      primary: "#0c9dd4",
      secondary: "#1d2e78",
    },
  },
  //? Personal Color
  Nunu: {
    name: "Nunu",
    shortenName: { en_US: "Nunu" },
    color: {
      primary: "#5499C7",
      secondary: "#2980B9",
    },
  },
  //? Personal Color
  Olaf: {
    name: "Olaf",
    shortenName: { en_US: "Olaf" },
    color: {
      primary: "#C0392B",
      secondary: "#E74C3C",
    },
  },
  //? Personal Color
  Orianna: {
    name: "Orianna",
    shortenName: { en_US: "Orianna" },
    color: {
      primary: "#85929E",
      secondary: "#5D6D7E",
    },
  },
  Ornn: {
    name: "Ornn",
    shortenName: { en_US: "Ornn" },
    color: {
      primary: "#c61141",
      secondary: "#370924",
    },
  },
  //? Personal Color
  Pantheon: {
    name: "Pantheon",
    shortenName: { en_US: "Pantheon" },
    color: {
      primary: "#7B241C",
      secondary: "#922B21",
    },
  },
  //? Personal Color
  Poppy: {
    name: "Poppy",
    shortenName: { en_US: "Poppy" },
    color: {
      primary: "#5DADE2",
      secondary: "#3498DB",
    },
  },
  //? Personal Color
  Pyke: {
    name: "Pyke",
    shortenName: { en_US: "Pyke" },
    color: {
      primary: "#1B4F72",
      secondary: "#154360",
    },
  },
  //? Personal Color
  Qiyana: {
    name: "Qiyana",
    shortenName: { en_US: "Qiyana" },
    color: {
      primary: "#27AE60",
      secondary: "#229954",
    },
  },
  //? Personal Color
  Quinn: {
    name: "Quinn",
    shortenName: { en_US: "Quinn" },
    color: {
      primary: "#7E5109",
      secondary: "#6E2C00",
    },
  },
  //? Personal Color
  Rakan: {
    name: "Rakan",
    shortenName: { en_US: "Rakan" },
    color: {
      primary: "#F1948A",
      secondary: "#EC7063",
    },
  },
  //? Personal Color
  Rammus: {
    name: "Rammus",
    shortenName: { en_US: "Rammus" },
    color: {
      primary: "#9C640C",
      secondary: "#7E5109",
    },
  },
  RekSai: {
    name: "Rek'Sai",
    shortenName: { en_US: "Rek'Sai" },
    color: {
      primary: "#D09CFA",
      secondary: "#A555EC",
    },
  },
  //? Personal Color
  Rell: {
    name: "Rell",
    shortenName: { en_US: "Rell" },
    color: {
      primary: "#922B21",
      secondary: "#7B241C",
    },
  },
  //? Personal Color
  Renata: {
    name: "Renata",
    shortenName: { en_US: "Renata" },
    color: {
      primary: "#D5D8DC",
      secondary: "#ABB2B9",
    },
  },
  //? Personal Color
  Renekton: {
    name: "Renekton",
    shortenName: { en_US: "Renekton" },
    color: {
      primary: "#922B21",
      secondary: "#7B241C",
    },
  },
  //? Personal Color
  Rengar: {
    name: "Rengar",
    shortenName: { en_US: "Rengar" },
    color: {
      primary: "#27AE60",
      secondary: "#229954",
    },
  },
  //? Personal Color
  Riven: {
    name: "Riven",
    shortenName: { en_US: "Riven" },
    color: {
      primary: "#7D3C98",
      secondary: "#6C3483",
    },
  },
  //? Personal Color
  Rumble: {
    name: "Rumble",
    shortenName: { en_US: "Rumble" },
    color: {
      primary: "#E67E22",
      secondary: "#D35400",
    },
  },
  //? Personal Color
  Ryze: {
    name: "Ryze",
    shortenName: { en_US: "Ryze" },
    color: {
      primary: "#5DADE2",
      secondary: "#3498DB",
    },
  },
  //? Personal Color
  Samira: {
    name: "Samira",
    shortenName: { en_US: "Samira" },
    color: {
      primary: "#C0392B",
      secondary: "#922B21",
    },
  },
  //? Personal Color
  Sejuani: {
    name: "Sejuani",
    shortenName: { en_US: "Sejuani" },
    color: {
      primary: "#AED6F1",
      secondary: "#85C1E9",
    },
  },
  //? Personal Color
  Senna: {
    name: "Senna",
    shortenName: { en_US: "Senna" },
    color: {
      primary: "#a6f2f5",
      secondary: "#164e6d",
    },
  },
  //? Personal Color
  Seraphine: {
    name: "Seraphine",
    shortenName: { en_US: "Seraphine" },
    color: {
      primary: "#F5B7B1",
      secondary: "#F1948A",
    },
  },
  //? Personal Color
  Sett: {
    name: "Sett",
    shortenName: { en_US: "Sett" },
    color: {
      primary: "#C0392B",
      secondary: "#E74C3C",
    },
  },
  //? Personal Color
  Shaco: {
    name: "Shaco",
    shortenName: { en_US: "Shaco" },
    color: {
      primary: "#9B59B6",
      secondary: "#8E44AD",
    },
  },
  //? Personal Color
  Shen: {
    name: "Shen",
    shortenName: { en_US: "Shen" },
    color: {
      primary: "#3498DB",
      secondary: "#2980B9",
    },
  },
  //? Personal Color
  Shyvana: {
    name: "Shyvana",
    shortenName: { en_US: "Shyvana" },
    color: {
      primary: "#C0392B",
      secondary: "#922B21",
    },
  },
  //? Personal Color
  Singed: {
    name: "Singed",
    shortenName: { en_US: "Singed" },
    color: {
      primary: "#27AE60",
      secondary: "#229954",
    },
  },
  //? Personal Color
  Sion: {
    name: "Sion",
    shortenName: { en_US: "Sion" },
    color: {
      primary: "#7B241C",
      secondary: "#641E16",
    },
  },
  //? Personal Color
  Sivir: {
    name: "Sivir",
    shortenName: { en_US: "Sivir" },
    color: {
      primary: "#D4AC0D",
      secondary: "#B7950B",
    },
  },
  //? Personal Color
  Skarner: {
    name: "Skarner",
    shortenName: { en_US: "Skarner" },
    color: {
      primary: "#5DADE2",
      secondary: "#3498DB",
    },
  },
  //? Personal Color
  Smolder: {
    name: "Smolder",
    shortenName: { en_US: "Smolder" },
    color: {
      primary: "#E74C3C",
      secondary: "#CB4335",
    },
  },
  //? Personal Color
  Sona: {
    name: "Sona",
    shortenName: { en_US: "Sona" },
    color: {
      primary: "#5499C7",
      secondary: "#2980B9",
    },
  },
  //? Personal Color
  Soraka: {
    name: "Soraka",
    shortenName: { en_US: "Soraka" },
    color: {
      primary: "#F7DC6F",
      secondary: "#F4D03F",
    },
  },
  //? Personal Color
  Swain: {
    name: "Swain",
    shortenName: { en_US: "Swain" },
    color: {
      primary: "#641E16",
      secondary: "#7B241C",
    },
  },
  Sylas: {
    name: "Sylas",
    shortenName: { en_US: "Sylas" },
    color: {
      primary: "#B1BCE6",
      secondary: "#92B4EC",
    },
  },
  //? Personal Color
  Syndra: {
    name: "Syndra",
    shortenName: { en_US: "Syndra" },
    color: {
      primary: "#7D3C98",
      secondary: "#6C3483",
    },
  },
  //? Personal Color
  TahmKench: {
    name: "Tahm Kench",
    shortenName: { en_US: "Kench" },
    color: {
      primary: "#5499C7",
      secondary: "#2980B9",
    },
  },
  //? Personal Color
  Taliyah: {
    name: "Taliyah",
    shortenName: { en_US: "Taliyah" },
    color: {
      primary: "#117A65",
      secondary: "#0E6655",
    },
  },
  //? Personal Color
  Talon: {
    name: "Talon",
    shortenName: { en_US: "Talon" },
    color: {
      primary: "#34495E",
      secondary: "#2C3E50",
    },
  },
  //? Personal Color
  Taric: {
    name: "Taric",
    shortenName: { en_US: "Taric" },
    color: {
      primary: "#85C1E9",
      secondary: "#AED6F1",
    },
  },
  //? Personal Color
  Teemo: {
    name: "Teemo",
    shortenName: { en_US: "Teemo" },
    color: {
      primary: "#F39C12",
      secondary: "#F1C40F",
    },
  },
  //? Personal Color
  Thresh: {
    name: "Thresh",
    shortenName: { en_US: "Thresh" },
    color: {
      primary: "#16A085",
      secondary: "#1ABC9C",
    },
  },
  //? Personal Color
  Tristana: {
    name: "Tristana",
    shortenName: { en_US: "Tristana" },
    color: {
      primary: "#3498DB",
      secondary: "#5DADE2",
    },
  },
  //? Personal Color
  Trundle: {
    name: "Trundle",
    shortenName: { en_US: "Trundle" },
    color: {
      primary: "#1B4F72",
      secondary: "#154360",
    },
  },
  //? Personal Color
  Tryndamere: {
    name: "Tryndamere",
    shortenName: { en_US: "Trynd" },
    color: {
      primary: "#C0392B",
      secondary: "#922B21",
    },
  },
  //? Personal Color
  TwistedFate: {
    name: "Twisted Fate",
    shortenName: { en_US: "Twisted", ko_KR: "트페" },
    color: {
      primary: "#89a4bc",
      secondary: "#7aa8dc",
    },
  },
  Twitch: {
    name: "Twitch",
    shortenName: { en_US: "Twitch" },
    color: {
      primary: "#B980F0",
      secondary: "#6C3483",
    },
  },
  //? Personal Color
  Udyr: {
    name: "Udyr",
    shortenName: { en_US: "Udyr" },
    color: {
      primary: "#D35400",
      secondary: "#E67E22",
    },
  },
  //? Personal Color
  Urgot: {
    name: "Urgot",
    shortenName: { en_US: "Urgot" },
    color: {
      primary: "#34495E",
      secondary: "#2C3E50",
    },
  },
  //? Personal Color
  Varus: {
    name: "Varus",
    shortenName: { en_US: "Varus" },
    color: {
      primary: "#1ABC9C",
      secondary: "#16A085",
    },
  },
  //? Personal Color
  Vayne: {
    name: "Vayne",
    shortenName: { en_US: "Vayne" },
    color: {
      primary: "#7B241C",
      secondary: "#641E16",
    },
  },
  //? Personal Color
  Veigar: {
    name: "Veigar",
    shortenName: { en_US: "Veigar" },
    color: {
      primary: "#8E44AD",
      secondary: "#9B59B6",
    },
  },
  //? Personal Color
  Velkoz: {
    name: "Vel'Koz",
    shortenName: { en_US: "Vel'Koz" },
    color: {
      primary: "#5DADE2",
      secondary: "#3498DB",
    },
  },
  //? Personal Color
  Vex: {
    name: "Vex",
    shortenName: { en_US: "Vex" },
    color: {
      primary: "#34495E",
      secondary: "#2C3E50",
    },
  },
  //? Personal Color
  Vi: {
    name: "Vi",
    shortenName: { en_US: "Vi" },
    color: {
      primary: "#C0392B",
      secondary: "#E74C3C",
    },
  },
  //? Personal Color
  Viego: {
    name: "Viego",
    shortenName: { en_US: "Viego" },
    color: {
      primary: "#1ad0ab",
      secondary: "#156f5b",
    },
  },
  //? Personal Color
  Viktor: {
    name: "Viktor",
    shortenName: { en_US: "Viktor" },
    color: {
      primary: "#5499C7",
      secondary: "#2980B9",
    },
  },
  //? Personal Color
  Vladimir: {
    name: "Vladimir",
    shortenName: { en_US: "Vladimir" },
    color: {
      primary: "#922B21",
      secondary: "#641E16",
    },
  },
  //? Personal Color
  Volibear: {
    name: "Volibear",
    shortenName: { en_US: "Volibear" },
    color: {
      primary: "#1B4F72",
      secondary: "#154360",
    },
  },
  //? Personal Color
  Warwick: {
    name: "Warwick",
    shortenName: { en_US: "Warwick" },
    color: {
      primary: "#7E5109",
      secondary: "#6E2C00",
    },
  },
  //? Personal Color
  MonkeyKing: {
    name: "Wukong",
    shortenName: { en_US: "Wukong" },
    color: {
      primary: "#D4AC0D",
      secondary: "#B7950B",
    },
  },
  //? Personal Color
  Xayah: {
    name: "Xayah",
    shortenName: { en_US: "Xayah" },
    color: {
      primary: "#922B21",
      secondary: "#641E16",
    },
  },
  //? Personal Color
  Xerath: {
    name: "Xerath",
    shortenName: { en_US: "Xerath" },
    color: {
      primary: "#85C1E9",
      secondary: "#AED6F1",
    },
  },
  //? Personal Color
  XinZhao: {
    name: "Xin Zhao",
    shortenName: { en_US: "Xin Zhao" },
    color: {
      primary: "#C0392B",
      secondary: "#E74C3C",
    },
  },
  //? Personal Color
  Yasuo: {
    name: "Yasuo",
    shortenName: { en_US: "Yasuo" },
    color: {
      primary: "#5499C7",
      secondary: "#2980B9",
    },
  },
  //? Personal Color
  Yone: {
    name: "Yone",
    shortenName: { en_US: "Yone" },
    color: {
      primary: "#1ABC9C",
      secondary: "#16A085",
    },
  },
  //? Personal Color
  Yorick: {
    name: "Yorick",
    shortenName: { en_US: "Yorick" },
    color: {
      primary: "#6C3483",
      secondary: "#5B2C6F",
    },
  },
  //? Personal Color
  Yuumi: {
    name: "Yuumi",
    shortenName: { en_US: "Yuumi" },
    color: {
      primary: "#A569BD",
      secondary: "#8E44AD",
    },
  },
  //? Personal Color
  Zac: {
    name: "Zac",
    shortenName: { en_US: "Zac" },
    color: {
      primary: "#27AE60",
      secondary: "#2ECC71",
    },
  },
  //? Personal Color
  Zed: {
    name: "Zed",
    shortenName: { en_US: "Zed" },
    color: {
      primary: "#34495E",
      secondary: "#2C3E50",
    },
  },
  //? Personal Color
  Zeri: {
    name: "Zeri",
    shortenName: { en_US: "Zeri" },
    color: {
      primary: "#58D68D",
      secondary: "#2ECC71",
    },
  },
  //? Personal Color
  Ziggs: {
    name: "Ziggs",
    shortenName: { en_US: "Ziggs" },
    color: {
      primary: "#F39C12",
      secondary: "#F1C40F",
    },
  },
  //? Personal Color
  Zilean: {
    name: "Zilean",
    shortenName: { en_US: "Zilean" },
    color: {
      primary: "#F7DC6F",
      secondary: "#F4D03F",
    },
  },
  //? Personal Color
  Zoe: {
    name: "Zoe",
    shortenName: { en_US: "Zoe" },
    color: {
      primary: "#F1948A",
      secondary: "#EC7063",
    },
  },
  //? Personal Color
  Zyra: {
    name: "Zyra",
    shortenName: { en_US: "Zyra" },
    color: {
      primary: "#229954",
      secondary: "#27AE60",
    },
  },
};
