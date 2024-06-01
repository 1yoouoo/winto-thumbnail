import { spacesCdnFullEndpoint } from "@/constant/constant";
import {
  DropShadow,
  dropShadow,
  getRandomDropShadow,
} from "@/style/dropShadow";
import Image from "next/image";
import styled, { StyleSheetManager } from "styled-components";

const Wrapper = styled.span<{ randomDropShadow: DropShadow }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  transform: translate(-12px, -12px) scale(1.005);

  img {
    ${(props) => dropShadow[props.randomDropShadow]}
  }
`;

interface ChampionImageWrapperProps {
  championPortraits: string[];
}

const ChampionPortraitWrapper: React.FC<ChampionImageWrapperProps> = ({
  championPortraits,
}) => {
  const randomDropShadow = getRandomDropShadow();

  const randomChampPortrait =
    championPortraits[Math.floor(Math.random() * championPortraits.length)];

  const randomChampPortraitSrc = `${spacesCdnFullEndpoint}/${randomChampPortrait}`;

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) => !["randomDropShadow"].includes(prop)}
    >
      <Wrapper randomDropShadow={randomDropShadow}>
        <Image
          src={randomChampPortraitSrc}
          alt=""
          width={1280}
          height={720}
          quality={100}
          unoptimized
        />
      </Wrapper>
    </StyleSheetManager>
  );
};

export default ChampionPortraitWrapper;
