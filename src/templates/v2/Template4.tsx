import styled from "styled-components";
import { spacesEndpoint } from "@/constant/constant";
import Image from "next/image";
import GradientText from "@/components/styles/GradientText";
import React from "react";
import { GameInfoViewModel } from "@/types/v2/model";
import ItemImage from "@/components/styles/ItemImage";
import GradientBackground from "@/components/styles/GradientTrapezoid";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 10px;
  margin-left: 50px;
  z-index: 2;
  gap: 5px;
`;

const Description = styled.span`
  position: absolute;
  left: 40px;
  top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  transform: rotate(-5deg);
`;

const SubDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -2;
  transform: translateY(-10px);

  :nth-child(2) {
    transform: translateY(-20px);
  }
`;

const ItemDescription = styled.span``;

const ChampionNameWrapper = styled.span`
  position: absolute;
  left: 30px;
  top: -80px;
  transform: rotate(-3deg);
  z-index: -2;

  img {
    position: absolute;
    left: -20%;
    bottom: -30%;
    z-index: -2;
    width: 130%;
    height: 180%;
    filter: sepia(80%) saturate(3000%) hue-rotate(-30deg);
  }
`;

const ItemKdaArrowWrapper = styled.span`
  position: absolute;
  display: flex;
  gap: 20px;
  right: 80px;
  bottom: 50px;
  min-width: 600px;
  z-index: 5;
  gap: 60px;
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
  z-index: 1;
`;

const KDAWrapper = styled.span`
  position: relative;
  z-index: 5;
  align-self: flex-end;
  transform: rotate(8deg) translateY(20px);
`;

const BoxShadow = styled.span`
  z-index: -2;
  position: absolute;
  background-color: white;
  top: 50%;
  left: 30%;
  width: 40%;
  height: 0%;
  box-shadow: 0 0 80px 60px white, 0 0 60px 30px rgba(255, 255, 255, 0.1);
`;

const RedArrowWrapper = styled.span`
  z-index: 5;
  position: absolute;
  right: 230px;
  bottom: 110px;
  transform: scaleX(-1) rotate(0deg);
`;

const Template4: React.FC<{ gameInfo: GameInfoViewModel }> = ({ gameInfo }) => {
  const {
    championName,
    playerName,
    gameVersion,
    items,
    kills,
    deaths,
    assists,
  } = gameInfo;
  const sorteditems = items!.sort((a, b) => b.totalGold - a.totalGold);
  const getFirstItem = sorteditems[0];

  return (
    <>
      <GradientBackground />

      <Container>
        <Description>
          <GradientText
            text={`${playerName}'s`}
            secondarycolor="#fff267"
            primarycolor="#ffdc14"
          />
          <SubDescription>
            <GradientText
              text="SECRET"
              secondarycolor="#fff267"
              primarycolor="#ffdc14"
            />
            <ItemDescription>
              <GradientText text="ITEM" fontSize="Small" />
            </ItemDescription>
          </SubDescription>

          <ChampionNameWrapper>
            <GradientText text={championName.toUpperCase()} fontSize="XSmall" />
            <Image
              src={`${spacesEndpoint}/text-background/white-paint.png`}
              alt=""
              width={400}
              height={400}
            />
          </ChampionNameWrapper>
        </Description>

        <ItemKdaArrowWrapper>
          <KDAWrapper>
            <GradientText
              text={`${kills}/${deaths}/${assists}`}
              primarycolor="white"
              secondarycolor="#acacac"
              fontSize="Small"
            />
            <BoxShadow />
          </KDAWrapper>

          <RedArrowWrapper>
            <Image
              src={`${spacesEndpoint}/arrow/red-arrow-1.png`}
              alt="arrow"
              width={250}
              height={130}
            />
          </RedArrowWrapper>

          <ItemWrapper>
            <ItemImage
              gameVersion={gameVersion}
              item={getFirstItem}
              width={220}
              height={220}
              boxshadow="ItemBoxShadowYellow"
            />
            <QuestionMark>
              <GradientText text="?" fontSize="XSmall" />
            </QuestionMark>
          </ItemWrapper>
        </ItemKdaArrowWrapper>
      </Container>
    </>
  );
};

export default Template4;
