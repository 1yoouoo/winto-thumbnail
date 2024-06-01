import styled from "styled-components";
import { spacesCdnFullEndpoint } from "@/constant/constant";
import Image from "next/image";
import { championDto } from "@/types/v2/championDto";
import { GameInfoViewModel } from "@/types/v2/model";
import ItemImage from "@/components/styles/ItemImage";
import GradientText from "@/components/styles/GradientText";
import GradientBackground from "@/components/styles/GradientLeftBackground";
import ProPlayerInfoImage from "@/components/styles/ProPlayerImage";
import Background from "../Background";
import ChampionPortraitWrapper from "@/components/styles/ChampionPortraitWrapper";

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
  left: -40px;
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
  bottom: 40px;
  left: 320px;
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  z-index: 10;

  > :nth-child(1) {
    z-index: 3;
  }

  > :nth-child(2) {
  }
`;

const ItemWrapper = styled.span``;

const KDAContainer = styled.span`
  position: absolute;
  right: 30px;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  transform: rotate(1deg);
  z-index: 10;
`;

const KDAWrapper = styled.span`
  z-index: 2;
  border-radius: 50px;
  width: 120%;
  height: 140%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BoxShadow = styled.span`
  z-index: -1;
  position: absolute;
  background-color: white;
  width: 40%;
  height: 0%;
  box-shadow: 0 0 80px 60px black, 0 0 60px 30px rgba(255, 255, 255, 0.4);
`;

const RedArrowWrapper = styled.span`
  position: absolute;
  left: -230px;
  bottom: 100px;
  transform: rotate(-15deg);
`;

const ChampionName = styled.span`
  transform: translateY(-30px);
`;

const en_US_Template2: React.FC<{ gameInfo: GameInfoViewModel }> = ({
  gameInfo,
}) => {
  const {
    championName,
    playerName,
    kills,
    assists,
    deaths,
    items,
    skins,
    gameVersion,
    proPlayerImageKeyList,
    proTeamLogoKey,
    locale,
    translatedChampionName,
    championPortraits,
  } = gameInfo;
  const sorteditems = items!.sort((a, b) => b.totalGold - a.totalGold);
  const getTop2Items = sorteditems.slice(0, 2);
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

          <ChampionName>
            <GradientText
              text={localizedShortenName!}
              primarycolor={primary}
              secondarycolor={secondary}
              fontSize="XSmall"
            />
          </ChampionName>
        </Description>

        <Items>
          <ItemWrapper>
            <ItemImage
              gameVersion={gameVersion}
              item={getTop2Items[0]}
              width={200}
              height={200}
            />
          </ItemWrapper>
          <ItemWrapper>
            <ItemImage
              gameVersion={gameVersion}
              item={getTop2Items[1]}
              width={200}
              height={200}
            />
          </ItemWrapper>
        </Items>

        <KDAContainer>
          <KDAWrapper>
            <GradientText
              text={`${kills}/${deaths}/${assists}`}
              fontSize="XSmall"
            />
            <BoxShadow />
            <RedArrowWrapper>
              <Image
                src={`${spacesCdnFullEndpoint}/arrow/red-arrow-1.png`}
                alt="arrow"
                width={250}
                height={140}
                unoptimized
              />
            </RedArrowWrapper>
          </KDAWrapper>
        </KDAContainer>
      </Container>
    </Background>
  );
};

export default en_US_Template2;
