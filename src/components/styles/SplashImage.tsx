import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Ddragon, spacesCdnFullEndpoint } from "@/constant/constant";
import styled from "styled-components";
import { GameInfoViewModel } from "@/types/v2/model";

const Wrapper = styled.div<{ hasChampionPortrait: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;

  overflow: hidden;

  img {
    filter: ${({ hasChampionPortrait }) => hasChampionPortrait && "blur(10px)"};
    opacity: 0.8;
  }
`;

interface IProps {
  championName: string;
  skins: GameInfoViewModel["skins"];
  hasChampionPortrait: boolean;
}

const SplashImage = ({
  championName,
  skins,
  hasChampionPortrait,
  ...props
}: IProps) => {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const randomSkin =
      (skins &&
        skins.info[Math.floor(Math.random() * skins.info.length)]?.num) ??
      0;

    const lowQualitySrc = `${Ddragon}/cdn/img/champion/centered/${championName}_${randomSkin}.jpg`;

    if (!skins || skins.keys.length === 0) {
      setImgSrc(lowQualitySrc);
      return;
    }

    const randomIndex = Math.floor(Math.random() * skins.keys.length);

    const randomSkinKey = skins.keys[randomIndex];
    const newImgSrc = `${spacesCdnFullEndpoint}/${randomSkinKey}`;
    setImgSrc(newImgSrc);
  }, [skins, championName]);

  if (!imgSrc) {
    return null;
  }

  return (
    <Wrapper hasChampionPortrait={hasChampionPortrait}>
      {/* <Image
        src={imgSrc}
        alt="champion splash image"
        width={1280}
        height={720}
        priority
        {...props}
      /> */}
      <img src={imgSrc} alt="champion splash image" width={1280} height={720} />
    </Wrapper>
  );
};

export default SplashImage;
