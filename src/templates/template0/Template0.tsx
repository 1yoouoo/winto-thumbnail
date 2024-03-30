import styled from "styled-components";
import { fonts } from "@/style/fonts";
import { Ddragon } from "@/constant/constant";
import Image from "next/image";
import { GameInfoModel } from "@/types/model";
import GradientText from "@/components/styles/GradientText";
import ShadowText from "@/components/styles/ShadowText";
import React from "react";
import { championDto } from "@/types/championDto";
import { WaterMark } from "@/style/common";

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

const CropedSplashImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  overflow: hidden;

  img {
    width: 200%;
    height: 200%;
    margin: -40px 0 0 -180px;
  }
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

const Template0: React.FC<{ gameInfo: GameInfoModel }> = ({ gameInfo }) => {
  const { championName } = gameInfo;
  const champion = championDto[championName] || {
    name: championName,
    color: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  };

  const { primary, secondary } = champion.color;

  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <Container $primary={primary}>
      <Wrapper $primary={primary}>
        <CropedSplashImage>
          <Image
            src={`${Ddragon}/img/champion/centered/${championName}_0.jpg`}
            alt="champion"
            width={1280}
            height={720}
          />
        </CropedSplashImage>
        <GameInfoWrapper>
          <GradientText
            text={championName}
            $primarycolor={primary}
            $secondarycolor={secondary}
            $capitalize={true}
          />
          <ShadowText text="INSANE" $capitalize={true} />
          <ShadowText text="PLAY" $capitalize={true} />
        </GameInfoWrapper>
        {isDevelopment && <WaterMark>Template0</WaterMark>}
      </Wrapper>
    </Container>
  );
};

export default Template0;
