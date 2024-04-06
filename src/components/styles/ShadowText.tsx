import shadows from "@/style/shadows";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.span<any>`
  position: relative;
  text-shadow: ${shadows.ThickTextShadow};
  color: white;
  font-size: ${(props) => props.fontSize};
  text-transform: ${(props) => (props.$capitalize ? "uppercase" : "none")};
  height: calc(${(props) => props.fontSize} * 0.8);
`;

interface ShadowTextProps {
  text: string;
  $capitalize?: boolean;
  $fontSize?: string;
}

const ShadowText = ({ text, $capitalize, $fontSize }: ShadowTextProps) => {
  const [fontSize, setFontSize] = useState("0px");

  useEffect(() => {
    if (!$fontSize) {
      const newSize = `${Math.min(Math.max(150, 1200 / text.length), 280)}px`;
      setFontSize(newSize);
    } else {
      console.log("hi");
      setFontSize($fontSize);
    }
  }, [text, $fontSize]);

  return (
    <Container $capitalize={$capitalize} fontSize={fontSize}>
      {text}
    </Container>
  );
};

export default ShadowText;
