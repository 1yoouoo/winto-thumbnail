import SplashImage from "@/components/styles/SplashImage";
import { spacesCdnFullEndpoint } from "@/constant/constant";
import { backgroundHighlightLength } from "@/types/v2/assets";
import { championDto } from "@/types/v2/championDto";
import { GameInfoViewModel } from "@/types/v2/model";
import Image from "next/image";
import React from "react";
import styled, { StyleSheetManager } from "styled-components";

interface BackgroundProps {
  children: React.ReactNode;
  championName: string;
  skins: GameInfoViewModel["skins"];
}

const Container = styled.div<{ primary: string }>`
  position: relative;
  background-color: ${(props) => props.primary};
  width: 1280px;
  height: 720px;
  overflow: hidden;
`;

const Wrapper = styled.div<{ primary: string }>`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
  height: 720px;
  border-radius: 40px;
  border: 12px solid ${(props) => props.primary};
  background-color: white;
`;

const BackgroundHighlight = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 0;
  opacity: 0.3;
  object-fit: cover;
`;

const Background: React.FC<BackgroundProps> = ({ children, ...props }) => {
  const champion = championDto[props.championName] || {
    name: props.championName,
    shortenName: "",
    color: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  };
  const { primary } = champion.color;

  const highlightNumber =
    Math.floor(Math.random() * backgroundHighlightLength) + 1;

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) => !["primary"].includes(prop)}
    >
      <Container primary={primary}>
        <Wrapper primary={primary}>
          <SplashImage championName={props.championName} skins={props.skins!} />
          <BackgroundHighlight>
            <Image
              src={`${spacesCdnFullEndpoint}/background/background-highlight-${highlightNumber}.png`}
              alt="background-highlight"
              width={1256.2}
              height={696.2}
              priority
            />
          </BackgroundHighlight>
          {children}
        </Wrapper>
      </Container>
    </StyleSheetManager>
  );
};

export default Background;
