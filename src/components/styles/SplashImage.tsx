import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Ddragon, app_url, spacesCdnEndpoint } from "@/constant/constant";
import styled from "styled-components";
import { Skin } from "@/types/v2/model";

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
  const [skinKeyList, setSkinKeyList] = useState<string[]>([]);

  const randomSkin =
    (skins && skins[Math.floor(Math.random() * skins.length)]?.num) ?? 0;

  const lowQualitySrc = `${Ddragon}/cdn/img/champion/centered/${championName}_${randomSkin}.jpg`;

  const [imgSrc, setImgSrc] = useState(lowQualitySrc);

  useEffect(() => {
    const getSkinList = async () => {
      const prefix = `champion/2024-04/right/${championName}`;
      try {
        const response = await fetch(
          `${app_url}/api/v2/get-file-list?prefix=${prefix}`
        );
        const data = await response.json(); // API로부터 받은 데이터
        const filteredData = data.filter((path: string) => !path.endsWith("/"));
        setSkinKeyList(filteredData);
      } catch (error) {
        console.error("파일 목록 가져오기 중 에러 발생:", error);
      }
    };
    getSkinList();
  }, [championName]); // championName이 변경될 때마다 실행

  useEffect(() => {
    // skinKeyList가 변경될 때 실행
    if (skinKeyList.length > 0) {
      const randomIndex = Math.floor(Math.random() * skinKeyList.length);
      const randomSkinKey = skinKeyList[randomIndex];
      const newImgSrc = `${spacesCdnEndpoint}/${randomSkinKey}`;
      setImgSrc(newImgSrc); // 무작위로 선택된 스킨으로 이미지 소스를 업데이트
    } else {
      setImgSrc(lowQualitySrc); // skinKeyList가 비어있을 경우 고화질 이미지 URL로 변경
    }
  }, [skinKeyList, lowQualitySrc]); // skinKeyList의 변화를 감지

  return (
    <Wrapper>
      <Image
        src={imgSrc}
        alt="champion splash image"
        width={1280}
        height={720}
        priority
        {...props}
      />
    </Wrapper>
  );
};

export default SplashImage;
