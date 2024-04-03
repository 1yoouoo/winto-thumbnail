import styled from "styled-components";
import GradientText from "@/components/styles/GradientText";
import ShadowText from "@/components/styles/ShadowText";
import React from "react";
import { championDto } from "@/types/v2/championDto";
import { GameInfoViewModel } from "@/types/v2/model";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 20px;
  margin-left: 50px;
  z-index: 2;
  gap: 5px;
`;

const Template0: React.FC<{ gameInfo: GameInfoViewModel }> = ({ gameInfo }) => {
  const { championName } = gameInfo;
  const champion = championDto[championName] || {
    name: championName,
    color: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  };

  const { primary, secondary } = champion.color;

  return (
    <Container>
      <GradientText
        text={championName}
        $primarycolor={primary}
        $secondarycolor={secondary}
        $capitalize={true}
      />
      <ShadowText text="INSANE" $capitalize={true} />
      <ShadowText text="PLAY" $capitalize={true} />
    </Container>
  );
};

export default Template0;
