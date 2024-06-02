import styled from "styled-components";
import { championDto } from "@/types/v2/championDto";
import { GameInfoViewModel } from "@/types/v2/model";
import GradientText from "@/components/styles/GradientText";
import GradientBackground from "@/components/styles/GradientLeftBackground";
import ProPlayerInfoImage from "@/components/styles/ProPlayerImage";
import Background from "../Background";
import ChampionPortraitWrapper from "@/components/styles/ChampionPortraitWrapper";

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
  transform: translateY(-90px);
  font-family: var(--font-jing-nan-jun);
`;

const EmphasisWrapper = styled.div`
  transform: translateY(-50px);
  font-family: var(--font-jing-nan-jun);
`;

const zh_CN_Template4: React.FC<{ gameInfo: GameInfoViewModel }> = ({
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
  const champion = championDto[championName] || {
    name: championName,
    shortenName: {},
    color: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  };

  const getLocalizedShortenName = () => {
    const nameByLocale = champion.shortenName[locale ?? "en_US"];
    if (nameByLocale) {
      return nameByLocale;
    }
    return translatedChampionName || championName;
  };

  const localizedShortenName = getLocalizedShortenName();

  const { primary, secondary } = champion.color;

  const hasChampionPortrait = championPortraits!.length > 0;

  const EmphasisTextList = ["绝佳", "压倒性", "体能", "最强"];

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
          proPlayerImageKeyList={proPlayerImageKeyList!}
          proTeamLogoKey={proTeamLogoKey!}
        />
        {hasChampionPortrait && (
          <ChampionPortraitWrapper championPortraits={championPortraits!} />
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
              text={localizedShortenName!}
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

export default zh_CN_Template4;
