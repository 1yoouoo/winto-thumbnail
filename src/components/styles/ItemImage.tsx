import React, { useState } from "react";
import Image from "next/image";
import { Ddragon, leagueOfItems } from "@/constant/constant";
import { Item } from "@/types/v2/model";
import styled from "styled-components";
import shadows from "@/style/shadows";

const Wrapper = styled.span<{ width: number; height: number }>`
  display: inline-block;
  z-index: -1;
  border: 5px solid white;
  border-radius: 5px;
  box-shadow: ${shadows.ItemBoxShadow};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

interface IProps {
  gameVersion: string;
  item: Item;
  width: number;
  height: number;
}
const ItemImage = ({ gameVersion, item, width, height, ...props }: IProps) => {
  const highQualitySrc = `${leagueOfItems}/${item.id}.webp`;
  const lowQualitySrc = `${Ddragon}/cdn/${gameVersion}/img/item/${item.id}.png`;

  const [imgSrc, setImgSrc] = useState(highQualitySrc);

  // 이미지 로딩 실패 시 실행될 함수
  const handleError = () => {
    setImgSrc(lowQualitySrc); // 저화질 이미지 URL로 변경
  };

  return (
    <Wrapper width={width} height={height}>
      <Image
        src={imgSrc}
        alt="item"
        onError={handleError}
        width={width}
        height={height}
        {...props}
      />
    </Wrapper>
  );
};

export default ItemImage;
