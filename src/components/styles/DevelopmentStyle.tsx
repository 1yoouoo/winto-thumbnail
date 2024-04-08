import { fonts } from "@/style/fonts";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 1280px;
  height: 720px;
  background-color: transparent;
  z-index: 100;
`;

const WaterMark = styled.div`
  position: absolute;
  text-align: right;
  width: 100%;
  height: 80px;
  bottom: -100px;
  right: 40%;
  font-size: 40px;
  color: white;
  z-index: 100;
  font-family: ${fonts.LuckiestGuy.fontFamily};
`;

const TimeLine = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000e2;
  border-radius: 8px;
  margin: 10px;
  right: 0;
  bottom: 0;
`;

const TimeLineText = styled.span`
  font-family: Roboto, Arial, sans-serif;
  font-size: 2.3rem;
  color: white;
  padding: 6px 10px;
  letter-spacing: 2px;
`;

//  유튜브 얼마나 시청했는지 나오는 상태 바
const WatchedBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10px;
  z-index: 1000;
`;

const TotalBar = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  background-color: #717171;
`;

const CurrentBar = styled.div`
  position: absolute;
  width: 30%;
  height: 10px;
  background-color: red;
`;

const DevelopmentStyle = ({ templateName }: { templateName: string }) => {
  return (
    <>
      <Wrapper>
        <TimeLine>
          <TimeLineText>
            {new Date()
              .toLocaleTimeString("en-US", { hour12: false })
              .slice(0, 5)}
          </TimeLineText>
        </TimeLine>
        <WatchedBar>
          <TotalBar>
            <CurrentBar />
          </TotalBar>
        </WatchedBar>
      </Wrapper>
      <WaterMark>{`${templateName}`}</WaterMark>
    </>
  );
};

export default DevelopmentStyle;
