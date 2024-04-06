import styled from "styled-components";

const Gradient = styled.span`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, black, transparent);
`;

const GradientLeftBackground = () => {
  return <Gradient />;
};

export default GradientLeftBackground;
