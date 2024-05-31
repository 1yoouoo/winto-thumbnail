import React, { useState } from "react";
import Image from "next/image";
import { Ddragon, leagueOfItems } from "@/constant/constant";
import { Item } from "@/types/v2/model";
import styled, { StyleSheetManager } from "styled-components";
import shadows from "@/style/shadows";
import GradientText from "./GradientText";

const Container = styled.div<
  Pick<IProps, "width" | "height" | "boxshadow" | "blurred">
>`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 5px solid white;
  border-radius: 5px;
  box-shadow: ${(props) => shadows[props.boxshadow || "ItemBoxShadowDarken"]};
`;

const Wrapper = styled.span<Pick<IProps, "width" | "height" | "blurred">>`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: black;

  img {
    filter: ${(props) => (props.blurred ? "blur(20px)" : "none")};
  }
`;

const QuestionMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 10%;
  height: 10%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  box-shadow: 0 0 80px 50px black, 0 0 60px 30px rgba(0, 0, 0, 0.7);
  z-index: 5;
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
  const highQualitySrc = `${leagueOfItems}/${item?.id}.webp`;
  const lowQualitySrc = `${Ddragon}/cdn/${gameVersion}/img/item/${item?.id}.png`;

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
      <Container {...props}>
        <Wrapper {...props} blurred={blurred}>
          {/* <Image src={imgSrc} alt="item" onError={handleError} {...props} /> */}
          <img src={imgSrc} alt="item" onError={handleError} {...props} />
          {blurred && (
            <QuestionMark>
              <GradientText text="?" fontSize="XXXSmall" />
            </QuestionMark>
          )}
        </Wrapper>
      </Container>
    </StyleSheetManager>
  );
};

export default ItemImage;
