import { Locale, ParsedQueryString } from "@/types/v2/model";
import { selectTemplate } from "./selectTemplate";
import { useFetchGameInfo } from "@/app/hooks/useFetchGameInfo";
import styled from "styled-components";

const WaterMark = styled.div`
  position: absolute;
  text-align: right;
  width: 100%;
  height: 80px;
  bottom: -100px;
  right: 40%;
  font-size: 40px;
  color: white;
  z-index: 100;
`;

const supportedLocales: Locale[] = ["en_US", "ko_KR", "zh_CN"];

function getValidLocale(locale: string | undefined): Locale {
  if (!locale) {
    return "en_US";
  }
  return supportedLocales.includes(locale as Locale)
    ? (locale as Locale)
    : "en_US";
}

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
    championPortraits,
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
    championPortraits,
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
      <SelectedTemplateComponent gameInfo={gameInfo} />
      {/* <DevelopmentStyle templateName={SelectedTemplateName || ""} /> */}
      <WaterMark>{`${SelectedTemplateName}`}</WaterMark>
    </>
  );
};

export default TemplateDataProcessor;
