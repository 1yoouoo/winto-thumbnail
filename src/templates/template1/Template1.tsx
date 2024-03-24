import { Ddragon } from "@/constant/constant";
import { Button } from "@/style/common";
import React from "react";
import styled from "styled-components";
import { CombinedTemplateFields } from "../../../utils/transformToModel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Template1: React.FC<{ gameInfo: CombinedTemplateFields }> = ({
  gameInfo,
}) => {
  return <Container>hello</Container>;
};

export default Template1;
