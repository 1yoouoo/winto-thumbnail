import { championDto } from "@/types/v2/championDto";
import { Locale } from "@/types/v2/model";

export const getLocalizedShortenName = (
  championName: string,
  locale: Locale,
  translatedChampionName: string
) => {
  const champion = championDto[championName] || {
    name: championName,
    shortenName: {},
    color: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  };

  const nameByLocale = champion.shortenName[locale ?? "en_US"];
  const localizedShortenName =
    nameByLocale || translatedChampionName || championName;

  return {
    nameByLocale: localizedShortenName,
    primary: champion.color.primary,
    secondary: champion.color.secondary,
  };
};
