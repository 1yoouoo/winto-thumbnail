import { ParsedQueryString } from "@/types/v2/model";
import { selectTemplate } from "./selectTemplate";
import Background from "@/templates/v2/Background";
import { useFetchGameInfo } from "@/app/hooks/useFetchGameInfo";
import DevelopmentStyle from "../styles/DevelopmentStyle";

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
    optionalFields,
    isLoading,
  } = useFetchGameInfo({
    parsedQueryString,
  });

  const gameInfo = {
    championName: parsedQueryString.championName,
    gameVersion,
    items,
    spells,
    skins,
    proPlayerImageKeyList,
    proTeamLogoKey,
    ...optionalFields,
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const SelectedTemplateComponent = selectTemplate(gameInfo);
  return (
    <>
      <Background championName={gameInfo.championName} skins={gameInfo.skins}>
        <SelectedTemplateComponent gameInfo={gameInfo} />
      </Background>
      {isDevelopment && (
        <DevelopmentStyle templateName={SelectedTemplateComponent.name || ""} />
      )}
    </>
  );
};

export default TemplateDataProcessor;
