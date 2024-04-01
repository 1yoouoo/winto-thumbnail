import styled from "styled-components";
import { fonts } from "./fonts";

export const WaterMark = styled.div`
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 40px;
  color: white;
  z-index: 100;
  font-family: ${fonts.LuckiestGuy.fontFamily};
`;
