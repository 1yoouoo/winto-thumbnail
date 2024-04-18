import styled from "styled-components";
import GradientText from "@/components/styles/GradientText";
import React from "react";
import { championDto } from "@/types/v2/championDto";
import { GameInfoViewModel } from "@/types/v2/model";
import { sendSlackNotification } from "../../../utils/v2/sendSlackNotification";

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

const DefaultTemplate: React.FC<{ gameInfo: GameInfoViewModel }> = ({
  gameInfo,
}) => {
  const { championName } = gameInfo;
  const champion = championDto[championName] || {
    name: championName,
    shortenName: "",
    color: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  };

  sendSlackNotification({
    title: "🚨 기본 템플릿이 사용됐습니다.",
    details: `문제를 확인해주세요.`,
  });

  const { primary, secondary } = champion.color;

  return (
    <Container>
      <GradientText
        text={champion.shortenName}
        primarycolor={primary}
        secondarycolor={secondary}
        capitalize={true}
      />
      <GradientText text="INSANE" capitalize={true} />
      <GradientText text="PLAY" capitalize={true} />
    </Container>
  );
};

export default DefaultTemplate;
