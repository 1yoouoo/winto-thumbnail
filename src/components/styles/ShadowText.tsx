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
}

const ShadowText = ({ text, $capitalize }: ShadowTextProps) => {
  const [fontSize, setFontSize] = useState("0px");

  useEffect(() => {
    const newSize = `${Math.min(Math.max(150, 1200 / text.length), 280)}px`;
    setFontSize(newSize);
  }, [text]);

  return (
    <Container $capitalize={$capitalize} fontSize={fontSize}>
      {text}
    </Container>
  );
};

export default ShadowText;
