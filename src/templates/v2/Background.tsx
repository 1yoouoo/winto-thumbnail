import SplashImage from "@/components/styles/SplashImage";
import { spacesEndpoint } from "@/constant/constant";
import { fonts } from "@/style/fonts";
import { backgroundHighlightLength } from "@/types/v2/assets";
import { championDto } from "@/types/v2/championDto";
import { Skin } from "@/types/v2/model";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface BackgroundProps {
  children: React.ReactNode;
  championName: string;
  skins: Skin[];
}

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
  border-radius: 40px;
  border: 12px solid ${(props) => props.$primary};
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

const Background: React.FC<BackgroundProps> = ({ children, ...props }) => {
  const champion = championDto[props.championName] || {
    name: props.championName,
    color: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  };
  const { primary } = champion.color;

  const highlightNumber =
    Math.floor(Math.random() * backgroundHighlightLength) + 1;

  return (
    <Container $primary={primary}>
      <Wrapper $primary={primary}>
        <SplashImage championName={props.championName} skins={props.skins!} />
        <BackgroundHighlight>
          <Image
            src={`${spacesEndpoint}/background/background-highlight-${highlightNumber}.png`}
            alt="background-highlight"
            width={1280}
            height={720}
            priority
          />
        </BackgroundHighlight>
        {children}
      </Wrapper>
    </Container>
  );
};

export default Background;
