import React, { useState } from "react";
import Image from "next/image";
import { Ddragon, spacesEndpoint } from "@/constant/constant";
import styled from "styled-components";
import { Skin } from "@/types/v2/model";
import { championDto } from "@/types/v2/championDto";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  overflow: hidden;
`;

interface IProps {
  championName: string;
  skins: Skin[];
}

const SplashImage = ({ championName, skins, ...props }: IProps) => {
  const randomSkinIndex = Math.floor(
    Math.random() * championDto[championName].skinNumber
  );

  const randomSkin =
    (skins && skins[Math.floor(Math.random() * skins.length)].num) ?? 0;

  const highQualitySrc = `${spacesEndpoint}/champion/2024-04/right/${championName}/${championName}_${randomSkinIndex}.jpg`;
  const lowQualitySrc = `${Ddragon}/img/champion/centered/${championName}_${randomSkin}.jpg`;

  const [imgSrc, setImgSrc] = useState(highQualitySrc);

  // 이미지 로딩 실패 시 실행될 함수
  const handleError = () => {
    setImgSrc(lowQualitySrc); // 저화질 이미지 URL로 변경
  };

  return (
    <Wrapper>
      <Image
        src={imgSrc}
        alt="champion splash image"
        onError={handleError}
        width={1280}
        height={720}
        {...props}
      />
    </Wrapper>
  );
};

export default SplashImage;
