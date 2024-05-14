import shadows from "@/style/shadows";
import styled, { StyleSheetManager } from "styled-components";

const Container = styled.span<GradientTextStyleProps>`
  position: relative;
  display: inline-block;
  background: ${(props) =>
    props.primarycolor && props.secondarycolor
      ? `linear-gradient(
          to bottom,
          ${props.primarycolor},
          ${props.secondarycolor}
        )`
      : "none"};
  -webkit-background-clip: ${(props) =>
    props.primarycolor && props.secondarycolor ? "text" : "initial"};
  background-clip: ${(props) =>
    props.primarycolor && props.secondarycolor ? "text" : "initial"};
  color: ${(props) =>
    props.primarycolor && props.secondarycolor ? "transparent" : "white"};
  padding: 10px 0;
  text-transform: ${(props) => (props.capitalize ? "uppercase" : "none")};
  font-size: ${(props) => props.calculatedFontSize}px;
  white-space: nowrap;

  &::before {
    content: attr(data-text);
    position: absolute;
    z-index: -1;
    text-shadow: ${shadows.ThickTextShadow};
    visibility: visible;
  }
`;

interface GradientTextStyleProps {
  primarycolor?: string;
  secondarycolor?: string;
  capitalize?: boolean;
  fontSize?: string;
  calculatedFontSize: number;
}

interface GradientTextProps {
  text: string;
  primarycolor?: string;
  secondarycolor?: string;
  capitalize?: boolean;
  fontSize?: "Large" | "Medium" | "Small" | "XSmall" | "XXSmall" | "XXXSmall";
}

const fontSizeMap = {
  XXXSmall: {
    x1: 4,
    y1: 90,
    x2: 10,
    y2: 70,
  },
  XXSmall: {
    x1: 4,
    y1: 120,
    x2: 10,
    y2: 80,
  },
  XSmall: {
    x1: 4,
    y1: 150,
    x2: 10,
    y2: 90,
  },
  Small: {
    x1: 4, // 4글자일 때
    y1: 180, // 폰트 크기 160px
    x2: 10, // 10글자일 때
    y2: 100, // 폰트 크기 80px
  },
  Medium: {
    x1: 4,
    y1: 200,
    x2: 10,
    y2: 120,
  },
  Large: {
    x1: 4,
    y1: 220,
    x2: 10,
    y2: 140,
  },
};

const GradientText = ({
  text,
  primarycolor,
  secondarycolor,
  capitalize,
  fontSize = "Medium",
}: GradientTextProps) => {
  function calculateDynamicFontSize({
    letterCount,
    size,
  }: {
    letterCount: number;
    size: "Large" | "Medium" | "Small" | "XSmall" | "XXSmall" | "XXXSmall";
  }) {
    // fontSizeMap에서 현재 fontSize에 맞는 값을 가져옴
    const { x1, y1, x2, y2 } = fontSizeMap[size];

    // 기울기(m)와 y절편(b) 계산
    const m = (y2 - y1) / (x2 - x1);
    const b = y1 - m * x1;

    // 글자 수에 따른 폰트 사이즈 계산
    const dynamicFontSize = m * letterCount + b;
    return dynamicFontSize;
  }

  const calculatedFontSize = calculateDynamicFontSize({
    letterCount: text.length,
    size: fontSize,
  });

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        ![
          "fontSize",
          "capitalize",
          "primarycolor",
          "secondarycolor",
          "calculatedFontSize",
        ].includes(prop)
      }
    >
      <Container
        data-text={text}
        primarycolor={primarycolor}
        secondarycolor={secondarycolor}
        capitalize={capitalize}
        calculatedFontSize={calculatedFontSize}
      >
        {text}
      </Container>
    </StyleSheetManager>
  );
};

export default GradientText;
