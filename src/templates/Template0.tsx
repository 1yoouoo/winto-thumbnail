import { Button } from "@/style/common";
import React from "react";
import styled from "styled-components";

const GameInfoContainer = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const ChampionSplashImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const GameInfoBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  border-radius: 24px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  padding: 20px 0;
  gap: 10px;
`;

const GameInfoName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 120px;
  width: 100%;
`;

const GameInfoItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const ItemIcon = styled.img`
  width: 200px;
  height: 200px;
  border: 4px solid rgb(180, 179, 179);
  border-radius: 5px;
  box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
  &:nth-child(1) {
    transform: translate(5px, 5px) rotate(-7deg);
  }
  &:nth-child(2) {
    transform: translate(0px, -7px) rotate(0deg);
    z-index: 3;
  }
  &:nth-child(3) {
    transform: translate(-5px, 5px) rotate(7deg);
  }
`;

const GameInfoKDA = styled.div`
  font-size: 100px;
  margin-left: 80px;
`;

interface Template0GameInfo {
  championName: string;
  teamName: string;
  playerName: string;
  kills: number;
  deaths: number;
  assists: number;
  items: string[];
}

const Template0: React.FC<{ gameInfo: Template0GameInfo }> = ({ gameInfo }) => {
  return (
    <Button>
      <GameInfoContainer>
        <ChampionSplashImage
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${gameInfo.championName}_0.jpg`}
        />
        <GameInfoBlock>
          <GameInfoName>
            <span>{gameInfo.teamName}</span>
            <span>{gameInfo.playerName}</span>
          </GameInfoName>

          <GameInfoItems>
            {gameInfo.items.map((item, index) => (
              <ItemIcon
                key={index}
                src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/item/${item}.png`}
                alt={`item-${item}`}
              />
            ))}
          </GameInfoItems>

          <div>
            <GameInfoKDA>{`${gameInfo.kills} / ${gameInfo.deaths} / ${gameInfo.assists}`}</GameInfoKDA>
          </div>
        </GameInfoBlock>
      </GameInfoContainer>
    </Button>
  );
};

export default Template0;
