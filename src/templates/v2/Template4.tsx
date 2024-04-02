import styled from "styled-components";
import { fonts } from "@/style/fonts";
import { spacesEndpoint } from "@/constant/constant";
import Image from "next/image";
import GradientText from "@/components/styles/GradientText";
import ShadowText from "@/components/styles/ShadowText";
import React from "react";
import { championDto } from "@/types/championDto";
import { GameInfoModel } from "@/types/v2/model";
import ItemImage from "@/components/styles/ItemImage";
import SplashImage from "@/components/styles/SplashImage";

const Container = styled.div<{ $primary: string }>`
  position: relative;
  background-color: ${(props) => props.$primary};
  width: 1280px;
  height: 720px;
  font-family: ${fonts.LuckiestGuy.fontFamily};
`;

const Wrapper = styled.div<{ $primary: string }>`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
  height: 720px;
  border-radius: 10px;
  border: 5px solid ${(props) => props.$primary};
  background-color: white;
  overflow: hidden;
`;

const BackgroundHighlight = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.3;
`;

const GameInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 20px;
  margin-left: 50px;
  z-index: 2;
  gap: 5px;
`;

const Description = styled.span`
  position: absolute;
  left: 40px;
  bottom: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  transform: rotate(-5deg);
`;

const ItemDescription = styled.span`
  transform: translateY(-40px);
`;

const ChampionNameWrapper = styled.span`
  position: absolute;
  left: 30px;
  top: -60px;
  transform: rotate(-15deg);
  z-index: -2;

  img {
    position: absolute;
    left: -20%;
    bottom: -30%;
    z-index: -1;
    width: 130%;
    height: 180%;
    filter: sepia(80%) saturate(3000%) hue-rotate(-30deg);
  }
`;

const ItemKdaWrapper = styled.span`
  position: absolute;
  right: 80px;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  transform: rotate(1deg);
`;

const ItemWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(5deg);

  img {
    filter: blur(12px);
  }
`;

const QuestionMark = styled.span`
  width: 30px;
  height: 30px;
  background-color: black;
  box-shadow: 0 0 80px 50px black, 0 0 60px 30px rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
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
  box-shadow: 0 0 80px 60px white, 0 0 60px 30px rgba(255, 255, 255, 0.1);
`;

const Template4: React.FC<{ gameInfo: GameInfoModel }> = ({ gameInfo }) => {
  const {
    championName,
    playerName,
    gameVersion,
    items,
    skins,
    kills,
    deaths,
    assists,
  } = gameInfo;
  const sorteditems = items.sort((a, b) => b.totalGold - a.totalGold);
  const getFirstItem = sorteditems[0];
  const champion = championDto[championName] || {
    name: championName,
    color: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  };

  const { primary } = champion.color;

  return (
    <Container $primary={primary}>
      <Wrapper $primary={primary}>
        <SplashImage championName={championName} skins={skins!} />

        <BackgroundHighlight>
          <Image
            src={`${spacesEndpoint}/background/background-hightlight-1.png`}
            alt=""
            width={1280}
            height={720}
          />
        </BackgroundHighlight>

        <GameInfoWrapper>
          <Description>
            <GradientText
              text={`${playerName}'s`}
              $secondarycolor="#fff267"
              $primarycolor="#ffdc14"
              $fontSize="100px"
            />
            <GradientText
              text="SECRET"
              $secondarycolor="#fff267"
              $primarycolor="#ffdc14"
              $fontSize="180px"
            />
            <ItemDescription>
              <ShadowText text="ITEM" $fontSize="160px" />
            </ItemDescription>

            <ChampionNameWrapper>
              <ShadowText text={championName.toUpperCase()} $fontSize="80px" />
              <Image
                src={`${spacesEndpoint}/text-background/white-paint.png`}
                alt=""
                width={400}
                height={400}
              />
            </ChampionNameWrapper>
          </Description>

          <ItemKdaWrapper>
            <ItemWrapper>
              <ItemImage
                gameVersion={gameVersion}
                item={getFirstItem}
                width={120}
                height={120}
              />
              <QuestionMark>
                <ShadowText text="?" $fontSize="60px" />
              </QuestionMark>
            </ItemWrapper>

            <KDAWrapper>
              <ShadowText
                text={`${kills}/${deaths}/${assists}`}
                $fontSize="120px"
              />
              <BoxShadow />
            </KDAWrapper>
          </ItemKdaWrapper>
        </GameInfoWrapper>
      </Wrapper>
    </Container>
  );
};

export default Template4;
