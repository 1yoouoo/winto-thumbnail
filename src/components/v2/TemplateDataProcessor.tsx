import { Locale, ParsedQueryString } from "@/types/v2/model";
import { selectTemplate } from "./selectTemplate";
import Background from "@/templates/v2/Background";
import { useFetchGameInfo } from "@/app/hooks/useFetchGameInfo";
import DevelopmentStyle from "../styles/DevelopmentStyle";

const supportedLocales: Locale[] = ["en_US", "ko_KR"];

function getValidLocale(locale: string | undefined): Locale {
  if (!locale) {
    return "en_US";
  }
  return supportedLocales.includes(locale as Locale)
    ? (locale as Locale)
    : "en_US";
}

const isDevelopment = process.env.NODE_ENV === "development";

const TemplateDataProcessor: React.FC<{
  parsedQueryString: ParsedQueryString;
}> = ({ parsedQueryString }) => {
  const {
    gameVersion,
    items,
    spells,
    skins,
    proPlayerImageKeyList,
    proTeamLogoKey,
    translatedChampionName,
    optionalFields,
    isLoading,
  } = useFetchGameInfo({
    parsedQueryString,
  });

  const validLocale = getValidLocale(parsedQueryString.locale);

  const gameInfo = {
    gameVersion,
    items,
    spells,
    skins,
    proPlayerImageKeyList,
    championName: parsedQueryString.championName,
    translatedChampionName,
    proTeamLogoKey,
    locale: validLocale,
    ...optionalFields,
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { component: SelectedTemplateComponent, name: SelectedTemplateName } =
    selectTemplate(gameInfo);

  return (
    <>
      <Background championName={gameInfo.championName} skins={gameInfo.skins}>
        <SelectedTemplateComponent gameInfo={gameInfo} />
      </Background>
      {isDevelopment && (
        <DevelopmentStyle templateName={SelectedTemplateName || ""} />
      )}
    </>
  );
};

export default TemplateDataProcessor;
