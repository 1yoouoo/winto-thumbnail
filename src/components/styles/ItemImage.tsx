import React, { useState } from "react";
import Image from "next/image";
import { Ddragon, leagueOfItems } from "@/constant/constant";
import { Item } from "@/types/v2/model";
import styled, { StyleSheetManager } from "styled-components";
import shadows, { Shadows } from "@/style/shadows";
import ShadowText from "./ShadowText";

const Wrapper = styled.span<
  Pick<IProps, "width" | "height" | "boxshadow" | "blurred">
>`
  display: inline-block;
  z-index: -1;
  border: 5px solid white;
  border-radius: 5px;
  box-shadow: ${(props) => shadows[props.boxshadow || "ItemBoxShadowDarken"]};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;

  img {
    filter: ${(props) => (props.blurred ? "blur(12px)" : "none")};
  }
`;

const QuestionMark = styled.span`
  width: 30px;
  height: 30px;
  background-color: black;
  box-shadow: 0 0 80px 50px black, 0 0 60px 30px rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

interface IProps {
  gameVersion: string;
  item: Item;
  width: number;
  height: number;
  boxshadow?:
    | "ItemBoxShadowDarken"
    | "ItemBoxShadowLighten"
    | "ItemBoxShadowYellow";
  blurred?: boolean;
}

const ItemImage = ({ gameVersion, item, blurred, ...props }: IProps) => {
  const highQualitySrc = `${leagueOfItems}/${item.id}.webp`;
  const lowQualitySrc = `${Ddragon}/cdn/${gameVersion}/img/item/${item.id}.png`;

  const [imgSrc, setImgSrc] = useState(highQualitySrc);

  const handleError = () => {
    setImgSrc(lowQualitySrc); // 저화질 이미지 URL로 변경
  };

  return (
    <StyleSheetManager
      shouldForwardProp={(propName) =>
        !["width", "height", "boxShadow", "blurred"].includes(propName)
      }
    >
      <Wrapper {...props} blurred={blurred}>
        <Image src={imgSrc} alt="item" onError={handleError} {...props} />
      </Wrapper>

      {blurred && (
        <QuestionMark>
          <ShadowText text="?" />
        </QuestionMark>
      )}
    </StyleSheetManager>
  );
};

export default ItemImage;
