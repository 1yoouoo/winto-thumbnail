import { ParsedQueryString } from "@/types/v2/model";
import { selectTemplate } from "./selectTemplate";
import { WaterMark } from "@/style/common";
import Background from "@/templates/v2/Background";
import { useFetchGameInfo } from "@/app/hooks/useFetchGameInfo";

const isDevelopment = process.env.NODE_ENV === "development";

const TemplateDataProcessor: React.FC<{
  parsedQueryString: ParsedQueryString;
}> = ({ parsedQueryString }) => {
  const {
    gameVersion,
    items,
    spells,
    skins,
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
    ...optionalFields,
  };

  const SelectedTemplateComponent = selectTemplate(gameInfo);
  return (
    <Background championName={gameInfo.championName} skins={gameInfo.skins!}>
      <SelectedTemplateComponent gameInfo={gameInfo} />
      {isDevelopment && (
        <WaterMark>{`${SelectedTemplateComponent.name}`}</WaterMark>
      )}
    </Background>
  );
};

export default TemplateDataProcessor;
