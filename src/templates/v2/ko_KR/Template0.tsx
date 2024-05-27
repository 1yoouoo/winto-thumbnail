import styled from "styled-components";
import { spacesCdnFullEndpoint } from "@/constant/constant";
import Image from "next/image";
import { championDto } from "@/types/v2/championDto";
import { GameInfoViewModel } from "@/types/v2/model";
import ItemImage from "@/components/styles/ItemImage";
import GradientText from "@/components/styles/GradientText";
import GradientBackground from "@/components/styles/GradientLeftBackground";
import ProPlayerInfoImage from "@/components/styles/ProPlayerImage";
import Background from "../Background";
import ChampionPortraitWrapper from "@/components/styles/ChampionPortraitWrapper";

const Container = styled.div`
  font-family: var(--font-luckiest-guy);
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 2;
  gap: 5px;
`;

const DescriptionContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-left: 20px;
  margin-top: 30px;
`;

const Description = styled.span`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
`;

const Items = styled.span`
  position: absolute;
  bottom: 40px;
  left: 80px;
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
  right: 200px;
  bottom: 30px;
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
  left: -230px;
  bottom: 110px;
  transform: rotate(-15deg);
`;

const ChampionName = styled.span`
  transform: translateY(-40px);
  font-family: "WAGURITTF";
  @font-face {
    font-family: "WAGURITTF";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2403@1.0/WAGURITTF.woff2")
      format("woff2");
  }
`;

const ko_KR_Template0: React.FC<{ gameInfo: GameInfoViewModel }> = ({
  gameInfo,
}) => {
  const {
    championName,
    playerName,
    skins,
    kills,
    assists,
    deaths,
    items,
    gameVersion,
    proPlayerImageKeyList,
    proTeamLogoKey,
    locale,
    translatedChampionName,
    championPortraits,
  } = gameInfo;

  const sorteditems = items!.sort((a, b) => b.totalGold - a.totalGold);
  const getTop1Items = sorteditems.slice(0, 1);
  const champion = championDto[championName] || {
    name: championName,
    shortenName: {},
    color: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  };

  const getLocalizedShortenName = () => {
    const nameByLocale = champion.shortenName[locale ?? "en_US"];
    if (nameByLocale) {
      return nameByLocale;
    }
    return translatedChampionName || championName;
  };

  const localizedShortenName = getLocalizedShortenName();

  const { primary, secondary } = champion.color;

  const hasChampionPortrait = championPortraits!.length > 0;

  return (
    <Background
      championName={championName}
      skins={skins}
      hasChampionPortrait={hasChampionPortrait}
    >
      <Container>
        <GradientBackground />
        <ProPlayerInfoImage
          proPlayerImageKeyList={proPlayerImageKeyList!}
          proTeamLogoKey={proTeamLogoKey!}
        />
        {hasChampionPortrait && (
          <ChampionPortraitWrapper championPortraits={championPortraits!} />
        )}

        <DescriptionContainer>
          <Description>
            <GradientText
              text={playerName ?? "Challenger"}
              primarycolor="white"
              secondarycolor="#acacac"
              fontSize="Small"
            />

            <ChampionName>
              <GradientText
                text={localizedShortenName!}
                primarycolor={primary}
                secondarycolor={secondary}
                fontSize="XSmall"
              />
            </ChampionName>
          </Description>
        </DescriptionContainer>

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
    </Background>
  );
};

export default ko_KR_Template0;

// import styled from "styled-components";
// import { championDto } from "@/types/v2/championDto";
// import { GameInfoViewModel } from "@/types/v2/model";
// import ItemImage from "@/components/styles/ItemImage";
// import GradientText from "@/components/styles/GradientText";
// import GradientBackground from "@/components/styles/GradientLeftBackground";

// const Container = styled.div`
//   font-family: var(--font-luckiest-guy);
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   background-color: transparent;
//   z-index: 2;
//   gap: 5px;
// `;

// const DescriptionContainer = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-end;
//   width: 100%;
//   height: 100%;
//   margin-left: 20px;
//   margin-top: 30px;
// `;

// const Description = styled.span`
//   z-index: 100;
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Items = styled.span`
//   position: absolute;
//   top: 30px;
//   left: 100px;
//   margin-top: 15px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   gap: 0px;
//   z-index: 10;

//   > :nth-child(1) {
//     order: 2;
//     transform: rotate(0deg) translate(0px, -50px);
//     z-index: 3;
//   }

//   > :nth-child(2) {
//     order: 1;
//     transform: rotate(3deg) translate(50px, 7px);
//   }

//   > :nth-child(3) {
//     order: 3;
//     transform: rotate(-8deg) translate(-50px, 5px);
//   }
// `;

// const _6Items = styled.div`
//   position: absolute;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: repeat(2, 1fr);
//   gap: 10px;
//   top: 20px;
//   left: 20px;
//   z-index: 10;
// `;
// const ChampionName = styled.span`
//   transform: translateY(-40px);
//   font-family: "WAGURITTF";
//   @font-face {
//     font-family: "WAGURITTF";
//     src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2403@1.0/WAGURITTF.woff2")
//       format("woff2");
//   }
// `;

// const ko_KR_Template0: React.FC<{ gameInfo: GameInfoViewModel }> = ({
//   gameInfo,
// }) => {
//   const {
//     championName,
//     playerName,
//     items,
//     gameVersion,
//     locale,
//     translatedChampionName,
//   } = gameInfo;
//   const sorteditems = items!.sort((a, b) => b.totalGold - a.totalGold);
//   const itemsWithGoldOver2000 = sorteditems.filter(
//     (item) => item.totalGold >= 2000
//   );

//   const handleItemsDisplay = () => {
//     switch (itemsWithGoldOver2000.length) {
//       case 1:
//         return (
//           <Items>
//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[0]}
//               width={200}
//               height={200}
//               blurred
//             />
//           </Items>
//         );
//       case 2:
//         return (
//           <Items>
//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[0]}
//               width={200}
//               height={200}
//               blurred
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[1]}
//               width={200}
//               height={200}
//             />
//           </Items>
//         );
//       case 3:
//         return (
//           <Items>
//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[0]}
//               width={200}
//               height={200}
//               blurred
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[1]}
//               width={200}
//               height={200}
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[2]}
//               width={200}
//               height={200}
//             />
//           </Items>
//         );
//       case 4:
//         return (
//           <Items>
//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[0]}
//               width={200}
//               height={200}
//               blurred
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[1]}
//               width={200}
//               height={200}
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[2]}
//               width={200}
//               height={200}
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[3]}
//               width={200}
//               height={200}
//             />
//           </Items>
//         );
//       case 5:
//         return (
//           <Items>
//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[0]}
//               width={200}
//               height={200}
//               blurred
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[1]}
//               width={200}
//               height={200}
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[2]}
//               width={200}
//               height={200}
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[3]}
//               width={200}
//               height={200}
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[4]}
//               width={200}
//               height={200}
//             />
//           </Items>
//         );
//       case 6:
//         return (
//           <_6Items>
//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[0]}
//               width={150}
//               height={150}
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[1]}
//               width={150}
//               height={150}
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[2]}
//               width={150}
//               height={150}
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[3]}
//               width={150}
//               height={150}
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[4]}
//               width={150}
//               height={150}
//             />

//             <ItemImage
//               gameVersion={gameVersion}
//               item={itemsWithGoldOver2000[5]}
//               width={150}
//               height={150}
//             />
//           </_6Items>
//         );
//       default:
//         return <div></div>;
//     }
//   };

//   const champion = championDto[championName] || {
//     name: championName,
//     shortenName: {},
//     color: {
//       primary: "#FFFFFF",
//       secondary: "#FFFFFF",
//     },
//   };

//   const getLocalizedShortenName = () => {
//     const nameByLocale = champion.shortenName[locale ?? "en_US"];
//     if (nameByLocale) {
//       return nameByLocale;
//     }
//     return translatedChampionName || championName;
//   };

//   const localizedShortenName = getLocalizedShortenName();

//   const { primary, secondary } = champion.color;

//   return (
//     <Container>
//       <GradientBackground />
//       <DescriptionContainer>
//         <Description>
//           <GradientText
//             text={playerName ?? "Challenger"}
//             primarycolor="white"
//             secondarycolor="#acacac"
//             fixedFontSize={150}
//           />
//           <ChampionName>
//             <GradientText
//               text={localizedShortenName!}
//               primarycolor={primary}
//               secondarycolor={secondary}
//               fixedFontSize={150}
//             />
//           </ChampionName>
//         </Description>
//       </DescriptionContainer>

//       {handleItemsDisplay()}
//     </Container>
//   );
// };

// export default ko_KR_Template0;
