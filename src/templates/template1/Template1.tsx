import React from "react";
import { Ddragon, S3_BUCKET } from "@/constant/constant";
import Image from "next/image";
import GameInfoDto from "@/types/model";
import {
  Container,
  CropedSplashImage,
  GameInfoChampion,
  GameInfoChampionName,
  GameInfoChampionPosition,
  GameInfoName,
  GameInfoPlayerName,
  GameInfoTeamName,
  GameInfoWrapper,
  WaterMark,
} from "../template0/Template0";
import styled from "styled-components";

const OverlayBrush1 = styled.div`
  position: absolute;
  top: 60px;
  left: 10px;
  width: 800px;
  height: 600px;
  z-index: 1;
  display: inline-block;
  opacity: 0.7;
`;

const Plus = styled.div`
  position: absolute;
  top: 480px;
  left: 380px;
  font-size: 140px;
  color: white;
  z-index: 2;
`;

const GameInfoItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 60px;
  gap: 180px;
  z-index: 2;
`;

const GameInfoItem = styled.div`
  img {
    width: 230px;
    height: 230px;
    border: solid white;
    border-color: white;
    border-width: 3px 4px 3px 5px;
    border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
    transform: rotate(2deg);
    box-shadow: -10px 10px 0px rgba(188, 188, 188, 1),
      -20px 20px 0px rgba(188, 188, 188, 0.7),
      -30px 30px 0px rgba(188, 188, 188, 0.4),
      -40px 40px 0px rgba(188, 188, 188, 0.1);
    z-index: 2;
  }

  &:nth-child(1) {
    transform: translate(5px, 5px) rotate(-5deg);
  }

  &:nth-child(2) {
    transform: translate(-5px, 5px) rotate(7deg);
  }
`;

const Template1: React.FC<{ gameInfo: GameInfoDto }> = ({ gameInfo }) => {
  const fullName = `${gameInfo.teamName} ${gameInfo.playerName}`;

  const champion = `${gameInfo.championName} ${gameInfo.teamPosition}`;

  // item 골드 순으로 정렬
  const sorteditems = gameInfo.items.sort((a, b) => b.totalGold - a.totalGold);
  // 앞에서 2개만 자르기
  const getTop2Items = sorteditems.slice(0, 2);

  return (
    <Container>
      <CropedSplashImage>
        <Image
          src={`${Ddragon}/img/champion/centered/${gameInfo.championName}_${gameInfo.skinID}.jpg`}
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
          {getTop2Items.map((item, index) => (
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
        <Plus>+</Plus>
      </GameInfoWrapper>
      <OverlayBrush1>
        <Image
          src={`${S3_BUCKET}/text-overlay-brush-1.png`}
          alt="overlay"
          width={800}
          height={600}
          className="overlay-brush-1"
        />
      </OverlayBrush1>
      <WaterMark>Template1</WaterMark>
    </Container>
  );
};

export default Template1;
