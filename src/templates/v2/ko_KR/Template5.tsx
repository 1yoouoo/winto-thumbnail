import styled from "styled-components";
import { GameInfoViewModel } from "@/types/v2/model";
import ItemImage from "@/components/styles/ItemImage";
import GradientText from "@/components/styles/GradientText";
import GradientBackground from "@/components/styles/GradientLeftBackground";
import ProPlayerInfoImage from "@/components/styles/ProPlayerImage";
import Background from "../Background";
import ChampionPortraitWrapper from "@/components/styles/ChampionPortraitWrapper";
import { getLocalizedShortenName } from "../../../../utils/v2/getLocalizedShortenName";

const Container = styled.div`
  font-family: var(--font-luckiest-guy);
  position: relative;
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
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  transform: rotate(-2deg);
`;

const Items = styled.span`
  position: absolute;
  bottom: 60px;
  right: 40px;
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  z-index: 10;

  > :nth-child(1) {
    transform: rotate(5deg);
    z-index: 2;
  }
`;

const ItemWrapper = styled.span``;

const ChampionName = styled.span`
  transform: translateY(-30px);
  font-family: var(--font-waguri-ttf);
`;

const MultiKillText = styled.span`
  transform: translateY(10px);
`;

const ko_KR_Template5: React.FC<{ gameInfo: GameInfoViewModel }> = ({
  gameInfo,
}) => {
  const {
    championName,
    playerName,
    items,
    skins,
    gameVersion,
    proPlayerImageKeyList,
    proTeamLogoKey,
    locale,
    translatedChampionName,
    tripleKills,
    quadraKills,
    pentaKills,
    championPortraits,
  } = gameInfo;
  const sorteditems = items!.sort((a, b) => b.totalGold - a.totalGold);
  const getTop1Items = sorteditems.slice(0, 1);

  const { nameByLocale, primary, secondary } = getLocalizedShortenName(
    championName,
    locale,
    translatedChampionName
  );

  const getMultiKillDetails = () => {
    if (pentaKills ?? 0 > 0) {
      return {
        text: "PENTA KILL!",
        primaryColor: "#FF204E",
        secondaryColor: "#F11A7B",
      };
    }
    if (quadraKills ?? 0 > 0) {
      return {
        text: "QUADRA KILL!",
        primaryColor: "#FFDA78",
        secondaryColor: "#FF7F3E",
      };
    }
    if (tripleKills ?? 0 > 0) {
      return {
        text: "TRIPLE KILL!",
        primaryColor: "#C77CFF",
        secondaryColor: "#6B42F5",
      };
    }
    return {
      text: "",
      primaryColor: "#FFFFFF", // Default colors if no multi-kills
      secondaryColor: "#FFFFFF",
    };
  };

  const multiKillDetails = getMultiKillDetails();

  const hasChampionPortrait = championPortraits!.length > 0;
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
          <MultiKillText>
            <GradientText
              text={multiKillDetails.text}
              primarycolor={multiKillDetails.primaryColor}
              secondarycolor={multiKillDetails.secondaryColor}
              fontSize="Large"
            />
          </MultiKillText>
          <GradientText
            text={playerName ?? "Challenger"}
            primarycolor="white"
            secondarycolor="#acacac"
            fontSize="XSmall"
          />

          <ChampionName>
            <GradientText
              text={nameByLocale}
              primarycolor={primary}
              secondarycolor={secondary}
              fontSize="XXSmall"
            />
          </ChampionName>
        </Description>

        <Items>
          <ItemWrapper>
            <ItemImage
              gameVersion={gameVersion}
              item={getTop1Items[0]}
              width={250}
              height={250}
              blurred
              boxshadow="ItemBoxShadowYellow"
            />
          </ItemWrapper>
        </Items>
      </Container>
    </Background>
  );
};

export default ko_KR_Template5;
