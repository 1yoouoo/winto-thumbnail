import { championDto } from "@/types/v2/championDto";
import { Locale } from "aws-sdk/clients/inspector";

export const getLocalizedShortenName = (
  championName: string,
  locale: Locale,
  translatedChampionName: string
) => {
  const defaultColor = {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
  };

  const champion = championDto[championName] || {
    name: championName,
    shortenName: {},
    color: defaultColor,
  };

  const { primary, secondary } = champion.color;

  const nameByLocale =
    champion.shortenName[locale as keyof typeof champion.shortenName] ||
    "en_US";

  return {
    nameByLocale: nameByLocale || translatedChampionName,
    primary,
    secondary,
  };
};
