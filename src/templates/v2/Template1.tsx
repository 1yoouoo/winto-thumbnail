import styled from "styled-components";
import { fonts } from "@/style/fonts";
import { Ddragon } from "@/constant/constant";
import Image from "next/image";
import shadows from "@/style/shadows";
import GradientText from "@/components/styles/GradientText";
import ShadowText from "@/components/styles/ShadowText";
import React from "react";
import { championDto } from "@/types/championDto";
import { GameInfoModel } from "@/types/v2/model";
import ItemImage from "@/components/styles/ItemImage";

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

const Items = styled.span`
  margin-top: 15px;
  margin-left: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 80px;
`;

const ItemWrapper = styled.span`
  &:nth-child(1) {
    transform: rotate(5deg);
  }

  &:nth-child(2) {
    transform: rotate(-5deg);
  }
`;

const PlusWrapper = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  gap: 40px;
  z-index: 3;
`;

const GradientPlus = styled.span<any>`
  position: relative;
  display: inline-block;
  background: linear-gradient(
    to bottom,
    ${(props) => props.primarycolor},
    ${(props) => props.secondarycolor}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  padding: 10px 0;
  font-size: ${(props) => props.fontSize};
  white-space: nowrap;
  height: calc(${(props) => props.fontSize} * 0.8);

  &::before {
    content: attr(data-text);
    position: absolute;
    z-index: -1;
    text-shadow: ${shadows.ThickTextShadow};
    visibility: visible;
  }

  &:nth-child(1) {
    left: 235px;
  }
`;

const Template1: React.FC<{ gameInfo: GameInfoModel }> = ({ gameInfo }) => {
  const { championName, gameVersion, items } = gameInfo;
  const sorteditems = items.sort((a, b) => b.totalGold - a.totalGold);
  const getTop2Items = sorteditems.slice(0, 2);
  const champion = championDto[championName] || {
    name: championName,
    color: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  };

  const { primary, secondary } = champion.color;

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
          <Items>
            {getTop2Items.map((item, index) => (
              <ItemWrapper key={index}>
                <ItemImage
                  gameVersion={gameVersion}
                  item={item}
                  width={230}
                  height={230}
                />
              </ItemWrapper>
            ))}
            <PlusWrapper>
              <GradientPlus
                data-text="+"
                primarycolor={primary}
                secondarycolor={secondary}
                fontSize="200px"
              >
                +
              </GradientPlus>
            </PlusWrapper>
          </Items>
        </GameInfoWrapper>
      </Wrapper>
    </Container>
  );
};

export default Template1;
