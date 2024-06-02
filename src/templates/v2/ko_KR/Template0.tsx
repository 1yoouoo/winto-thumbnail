import styled from "styled-components";
import { spacesCdnFullEndpoint } from "@/constant/constant";
import Image from "next/image";
import { GameInfoViewModel } from "@/types/v2/model";
import ItemImage from "@/components/styles/ItemImage";
import GradientText from "@/components/styles/GradientText";
import GradientBackground from "@/components/styles/GradientLeftBackground";
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

const DescriptionContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-left: 20px;
  margin-top: 30px;
`;

const Description = styled.span`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

const Items = styled.span`
  position: absolute;
  bottom: 40px;
  left: 80px;
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  z-index: 10;

  > :nth-child(1) {
    transform: rotate(-5deg);
    z-index: 3;
  }
`;

const ItemWrapper = styled.span``;

const KDAContainer = styled.span`
  position: absolute;
  right: 200px;
  bottom: 30px;
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
  bottom: 110px;
  transform: rotate(-15deg);
`;

const ChampionName = styled.span`
  transform: translateY(-40px);
  font-family: var(--font-waguri-ttf);
`;

const ko_KR_Template0: React.FC<{ gameInfo: GameInfoViewModel }> = ({
  gameInfo,
}) => {
  const {
    championName,
    playerName,
    skins,
    kills,
    assists,
    deaths,
    items,
    gameVersion,
    locale,
    translatedChampionName,
    championPortraits,
  } = gameInfo;

  const sorteditems = items!.sort((a, b) => b.totalGold - a.totalGold);
  const getTop1Items = sorteditems.slice(0, 1);

  const { nameByLocale, primary, secondary } = getLocalizedShortenName(
    championName,
    locale,
    translatedChampionName
  );

  const hasChampionPortrait = championPortraits!.length > 0;

  return (
    <Background
      championName={championName}
      skins={skins}
      hasChampionPortrait={hasChampionPortrait}
    >
      <Container>
        <GradientBackground />

        {hasChampionPortrait && (
          <ChampionPortraitWrapper championPortraits={championPortraits!} />
        )}

        <DescriptionContainer>
          <Description>
            <GradientText
              text={playerName ?? "Challenger"}
              primarycolor="white"
              secondarycolor="#acacac"
              fontSize="Small"
            />

            <ChampionName>
              <GradientText
                text={nameByLocale}
                primarycolor={primary}
                secondarycolor={secondary}
                fontSize="XSmall"
              />
            </ChampionName>
          </Description>
        </DescriptionContainer>

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

        <KDAContainer>
          <KDAWrapper>
            <GradientText
              text={`${kills}/${deaths}/${assists}`}
              fontSize="Small"
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

export default ko_KR_Template0;
