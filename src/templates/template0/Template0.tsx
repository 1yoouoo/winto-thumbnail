import React from "react";
import styled from "styled-components";
import { fonts } from "@/style/fonts";
import { Ddragon } from "@/constant/constant";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
  height: 720px;

  background-color: black;

  @font-face {
    font-family: ${fonts.GROBOLD.fontFamily};
    src: url(${fonts.GROBOLD.fontUrl});
  }
`;

export const CropedSplashImage = styled.div`
  position: absolute;
  width: 1280px;
  height: 720px;

  overflow: hidden;

  img {
    width: 200%;
    height: 200%;
    margin: -40px 0 0 -180px;
  }
`;

export const GameInfoWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
  font-family: ${fonts.GROBOLD.fontFamily};
  text-shadow: ${textShadowStyles.thickStyle};
  padding: 50px;
  margin-left: 50px;
  gap: 60px;
  z-index: 2;
`;

export const GameInfoName = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 140px;
  color: white;
  z-index: 2;
`;

export const GameInfoTeamName = styled.span`
  font-size: 140px;
`;

export const GameInfoPlayerName = styled.span``;

export const GameInfoChampion = styled.div`
  display: flex;
  font-size: 130px;
  color: white;
  color: #fcdc2a;
  gap: 40px;
`;

export const GameInfoChampionName = styled.span``;

export const GameInfoChampionPosition = styled.span`
  margin-left: 20px;
`;

export const WaterMark = styled.div`
  position: absolute;
  bottom: -100px;
  left: 50%;
  font-size: 40px;
  color: white;
  z-index: 100;
`;

const GameInfoItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

const GameInfoItem = styled.div`
  img {
    width: 230px;
    height: 230px;
    border: 4px solid white;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
  }
`;

import Image from "next/image";
import { textShadowStyles } from "@/style/decoration";
import { GameInfoModel } from "@/types/model";

const Template0: React.FC<{ gameInfo: GameInfoModel }> = ({ gameInfo }) => {
  const fullName = `${gameInfo.teamName} ${gameInfo.playerName}`;

  const champion = `${gameInfo.championName} ${gameInfo.teamPosition}`;

  // item 골드 순으로 정렬
  const sorteditems = gameInfo.items.sort((a, b) => b.totalGold - a.totalGold);
  // 앞에서 3개만 자르기
  const getTop3Items = sorteditems.slice(0, 3);

  return (
    <Container>
      <CropedSplashImage>
        <Image
          src={`${Ddragon}/img/champion/centered/${gameInfo.championName}_0.jpg`}
          alt="champion"
          width={1280}
          height={720}
        />
      </CropedSplashImage>

      <GameInfoWrapper>
        <GameInfoName>
          {fullName.length > 12 ? (
            <GameInfoPlayerName>{gameInfo.playerName}</GameInfoPlayerName>
          ) : (
            <>
              <GameInfoTeamName>{gameInfo.teamName}</GameInfoTeamName>
              <GameInfoPlayerName>{gameInfo.playerName}</GameInfoPlayerName>
            </>
          )}
        </GameInfoName>

        <GameInfoChampion>
          {champion.length > 10 ? (
            <GameInfoChampionName>{gameInfo.championName}</GameInfoChampionName>
          ) : (
            <>
              <GameInfoChampionName>
                {gameInfo.championName}
              </GameInfoChampionName>
              <GameInfoChampionPosition>
                {gameInfo.teamPosition}
              </GameInfoChampionPosition>
            </>
          )}
        </GameInfoChampion>

        <GameInfoItems>
          {getTop3Items.map((item, index) => (
            <GameInfoItem key={index}>
              <Image
                src={`${Ddragon}/${gameInfo.gameVersion}/img/item/${item.id}.png`}
                alt="item"
                width={50}
                height={50}
              />
            </GameInfoItem>
          ))}
        </GameInfoItems>
      </GameInfoWrapper>
      <WaterMark>Template0</WaterMark>
    </Container>
  );
};

export default Template0;
