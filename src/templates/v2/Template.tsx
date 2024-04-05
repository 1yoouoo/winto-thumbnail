import styled from "styled-components";
import { fonts } from "@/style/fonts";
import { Ddragon } from "@/constant/constant";
import Image from "next/image";
import React from "react";
import { championDto } from "@/types/v2/championDto";
import { GameInfoViewModel } from "@/types/v2/model";

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

const SplashImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  overflow: hidden;
`;

const Template4: React.FC<{ gameInfo: GameInfoViewModel }> = ({ gameInfo }) => {
  const { championName, gameVersion, skins } = gameInfo;
  const champion = championDto[championName] || {
    name: championName,
    color: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  };

  // skins 배열안에 num을 랜덤으로 픽해서 하나 고르기
  const randomSkin =
    (skins && skins[Math.floor(Math.random() * skins.length)].num) ?? 0;

  const { primary } = champion.color;

  return (
    <Container $primary={primary}>
      <Wrapper $primary={primary}>
        <SplashImage>
          <Image
            src={`${Ddragon}/cdn/img/champion/centered/${championName}_${randomSkin}.jpg`}
            alt="champion"
            width={1280}
            height={720}
          />
        </SplashImage>
      </Wrapper>
    </Container>
  );
};

export default Template4;
