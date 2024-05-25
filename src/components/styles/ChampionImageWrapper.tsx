import {
  DropShadow,
  dropShadow,
  getRandomDropShadow,
} from "@/style/dropShadow";
import Image from "next/image";
import styled, { StyleSheetManager } from "styled-components";

const Wrapper = styled.span<{ randomDropShadow: DropShadow }>`
  position: absolute;
  bottom: -530px;
  right: -630px;
  z-index: 5;

  img {
    ${(props) => dropShadow[props.randomDropShadow]}
  }
`;

interface ChampionImageWrapperProps {
  src: string;
}

const ChampionImageWrapper: React.FC<ChampionImageWrapperProps> = ({ src }) => {
  const randomDropShadow = getRandomDropShadow();

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) => !["randomDropShadow"].includes(prop)}
    >
      <Wrapper randomDropShadow={randomDropShadow}>
        <Image src={src} alt="" width={1800} height={1800} quality={100} />
      </Wrapper>
    </StyleSheetManager>
  );
};

export default ChampionImageWrapper;
