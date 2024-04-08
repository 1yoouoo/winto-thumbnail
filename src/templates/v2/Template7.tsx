import styled from "styled-components";
import { spacesCdnFullEndpoint } from "@/constant/constant";
import Image from "next/image";
import { championDto } from "@/types/v2/championDto";
import { GameInfoViewModel } from "@/types/v2/model";
import ItemImage from "@/components/styles/ItemImage";
import GradientText from "@/components/styles/GradientText";
import GradientBackground from "@/components/styles/GradientLeftBackground";
import ProPlayerImage from "@/components/styles/ProPlayerImage";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 2;
  gap: 5px;
`;

const Description = styled.span`
  position: absolute;
  top: 70px;
  left: -40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 5;
  transform: rotate(-2deg);
`;

const Items = styled.span`
  position: absolute;
  bottom: 40px;
  left: 280px;
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  z-index: 10;

  > :nth-child(1) {
    transform: rotate(-5deg);
    z-index: 3;
  }
`;

const ItemWrapper = styled.span``;

const KDAContainer = styled.span`
  position: absolute;
  right: 50px;
  bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  transform: rotate(1deg);
  z-index: 10;
`;

const KDAWrapper = styled.span`
  z-index: 2;
  border-radius: 50px;
  width: 120%;
  height: 140%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BoxShadow = styled.span`
  z-index: -1;
  position: absolute;
  background-color: white;
  width: 40%;
  height: 0%;
  box-shadow: 0 0 80px 60px black, 0 0 60px 30px rgba(255, 255, 255, 0.4);
`;

const RedArrowWrapper = styled.span`
  position: absolute;
  left: -235px;
  bottom: 60px;
  transform: rotate(-15deg);
`;

const Template7: React.FC<{ gameInfo: GameInfoViewModel }> = ({ gameInfo }) => {
  const {
    championName,
    playerName,
    kills,
    assists,
    deaths,
    items,
    gameVersion,
    proPlayerImageKeyList,
  } = gameInfo;
  const sorteditems = items!.sort((a, b) => b.totalGold - a.totalGold);
  const getTop1Items = sorteditems.slice(0, 1);
  const champion = championDto[championName] || {
    name: championName,
    shortenName: "",
    color: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  };

  const { primary, secondary } = champion.color;

  return (
    <Container>
      <GradientBackground />
      <ProPlayerImage proPlayerImageKeyList={proPlayerImageKeyList!} />

      <Description>
        <GradientText
          text={playerName ?? "Challenger"}
          primarycolor="white"
          secondarycolor="#acacac"
          fontSize="Small"
        />
        <GradientText
          text={champion.shortenName}
          primarycolor={primary}
          secondarycolor={secondary}
          fontSize="Small"
        />
      </Description>

      <Items>
        <ItemWrapper>
          <ItemImage
            gameVersion={gameVersion}
            item={getTop1Items[0]}
            width={250}
            height={250}
            blurred
            boxshadow="ItemBoxShadowYellow"
          />
        </ItemWrapper>
      </Items>

      <KDAContainer>
        <KDAWrapper>
          <GradientText
            text={`${kills}/${deaths}/${assists}`}
            fontSize="Small"
          />
          <BoxShadow />
          <RedArrowWrapper>
            <Image
              src={`${spacesCdnFullEndpoint}/arrow/red-arrow-1.png`}
              alt="arrow"
              width={250}
              height={140}
            />
          </RedArrowWrapper>
        </KDAWrapper>
      </KDAContainer>
    </Container>
  );
};

export default Template7;
