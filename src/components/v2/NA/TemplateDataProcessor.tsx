import { ParsedQueryString } from "@/types/v2/model";
import { selectTemplate } from "./selectTemplate";
import Background from "@/templates/v2/Background";
import { useFetchGameInfo } from "@/app/hooks/useFetchGameInfo";
import DevelopmentStyle from "@/components/styles/DevelopmentStyle";

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
    isError,
  } = useFetchGameInfo({
    parsedQueryString,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

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

  const { component: SelectedTemplateComponent, name: selectedTemplateName } =
    selectTemplate(gameInfo);
  return (
    <>
      <Background championName={gameInfo.championName} skins={gameInfo.skins!}>
        <SelectedTemplateComponent gameInfo={gameInfo} />
      </Background>
      {isDevelopment && (
        <DevelopmentStyle templateName={selectedTemplateName || ""} />
      )}
    </>
  );
};

export default TemplateDataProcessor;
