import shadows from "@/style/shadows";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.span<any>`
  position: relative;
  display: inline-block;
  background: linear-gradient(
    to bottom,
    ${(props) => props.$primarycolor},
    ${(props) => props.$secondarycolor}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  padding: 10px 0;
  text-transform: ${(props) => (props.$capitalize ? "uppercase" : "none")};
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
`;

interface GradientTextProps {
  text: string;
  $primarycolor: string;
  $secondarycolor: string;
  $capitalize?: boolean;
  $fontSize?: string;
}

const GradientText = ({
  text,
  $primarycolor: primarycolor,
  $secondarycolor: secondarycolor,
  $capitalize,
  $fontSize,
}: GradientTextProps) => {
  const [fontSize, setFontSize] = useState("0px");

  useEffect(() => {
    if (!$fontSize) {
      const newSize = `${Math.min(Math.max(150, 1200 / text.length), 280)}px`;
      setFontSize(newSize);
    } else {
      setFontSize($fontSize);
    }
  }, [text, $fontSize]);

  return (
    <Container
      data-text={text}
      $primarycolor={primarycolor}
      $secondarycolor={secondarycolor}
      $capitalize={$capitalize}
      fontSize={fontSize}
      className="gradient-text"
    >
      {text}
    </Container>
  );
};

export default GradientText;
