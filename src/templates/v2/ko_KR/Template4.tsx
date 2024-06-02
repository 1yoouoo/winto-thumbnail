import styled from "styled-components";
import { GameInfoViewModel } from "@/types/v2/model";
import GradientText from "@/components/styles/GradientText";
import GradientBackground from "@/components/styles/GradientLeftBackground";
import ProPlayerInfoImage from "@/components/styles/ProPlayerImage";
import Background from "../Background";
import ChampionPortraitWrapper from "@/components/styles/ChampionPortraitWrapper";
import { getLocalizedShortenName } from "../../../../utils/v2/getLocalizedShortenName";

const Container = styled.div`
  font-family: var(--font-luckiest-guy);
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 2;
  gap: 5px;
`;

const Description = styled.span`
  position: absolute;
  top: 70px;
  left: -40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  transform: rotate(-2deg);
`;

const ChampionName = styled.span`
  transform: translateY(-50px);
  font-family: var(--font-waguri-ttf);
`;

const EmphasisWrapper = styled.div`
  transform: translateY(-30px);
  font-family: var(--font-waguri-ttf);
`;

const ko_KR_Template4: React.FC<{ gameInfo: GameInfoViewModel }> = ({
  gameInfo,
}) => {
  const {
    championName,
    playerName,
    skins,
    proPlayerImageKeyList,
    proTeamLogoKey,
    locale,
    translatedChampionName,
    championPortraits,
  } = gameInfo;

  const { nameByLocale, primary, secondary } = getLocalizedShortenName(
    championName,
    locale,
    translatedChampionName
  );

  const hasChampionPortrait = championPortraits.length > 0;

  const EmphasisTextList = ["역대급", "압도적인", "피지컬", "세최폼"];

  const getRandomEmphasisText = () => {
    return EmphasisTextList[
      Math.floor(Math.random() * EmphasisTextList.length)
    ];
  };

  return (
    <Background
      championName={championName}
      skins={skins}
      hasChampionPortrait={hasChampionPortrait}
    >
      <Container>
        <GradientBackground />
        <ProPlayerInfoImage
          proPlayerImageKeyList={proPlayerImageKeyList}
          proTeamLogoKey={proTeamLogoKey}
        />
        {hasChampionPortrait && (
          <ChampionPortraitWrapper championPortraits={championPortraits} />
        )}

        <Description>
          <GradientText
            text={playerName ?? "Challenger"}
            primarycolor="white"
            secondarycolor="#acacac"
            fontSize="XSmall"
          />
          <EmphasisWrapper>
            <GradientText
              text={getRandomEmphasisText()}
              primarycolor="#FFDB5C"
              secondarycolor="#F97300"
              fontSize="XSmall"
            />
          </EmphasisWrapper>

          <ChampionName>
            <GradientText
              text={nameByLocale}
              primarycolor={primary}
              secondarycolor={secondary}
              fontSize="XXSmall"
            />
          </ChampionName>
        </Description>
      </Container>
    </Background>
  );
};

export default ko_KR_Template4;
