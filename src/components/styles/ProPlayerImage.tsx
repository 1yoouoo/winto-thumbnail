import { spacesCdnFullEndpoint as spacesCdnEndpoint } from "@/constant/constant";
import {
  DropShadow,
  dropShadow,
  getRandomDropShadow,
} from "@/style/dropShadow";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled, { StyleSheetManager } from "styled-components";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: -100px;
  width: 600px;
  height: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ProPlayerInfo = styled.div`
  position: relative;
`;

const ProPlayerImage = styled.div<{ randomDropShadow: DropShadow }>`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transform: translateY(12px);

  img {
    object-fit: contain;
    width: auto;
    height: auto;

    ${(props) => dropShadow[props.randomDropShadow]}
  }
`;

const ProTeamLogo = styled.div`
  z-index: 1;
  position: absolute;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  top: 0;
  left: 0;
  right: 230px;

  img {
    object-fit: contain;
  }
`;

const ProPlayerInfoImage = ({
  proPlayerImageKeyList,
  proTeamLogoKey,
}: {
  proPlayerImageKeyList: string[];
  proTeamLogoKey: string;
}) => {
  const [proPlayerimgSrc, setProPlayerImgSrc] = useState("");
  const [proTeamLogoSrc, setProTeamLogoSrc] = useState("");
  const randomDropShadow = getRandomDropShadow();

  useEffect(() => {
    if (!proPlayerImageKeyList || proPlayerImageKeyList.length === 0) {
      setProPlayerImgSrc("");
      return;
    }

    const randomIndex = Math.floor(
      Math.random() * (proPlayerImageKeyList?.length ?? 0)
    );

    const randomSkinKey = proPlayerImageKeyList?.[randomIndex];
    const newProPlayerImgSrc = `${spacesCdnEndpoint}/${randomSkinKey}`;
    setProPlayerImgSrc(newProPlayerImgSrc);
  }, [proPlayerImageKeyList]);

  useEffect(() => {
    if (!proTeamLogoKey) {
      return;
    }

    const newProTeamLogoSrc = `${spacesCdnEndpoint}/${proTeamLogoKey}`;
    setProTeamLogoSrc(newProTeamLogoSrc);
  }, [proTeamLogoKey]);

  if (!proPlayerimgSrc) {
    return null;
  }

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) => !["randomDropShadow"].includes(prop)}
    >
      <Container>
        <ImageWrapper>
          <ProPlayerInfo>
            <ProPlayerImage randomDropShadow={randomDropShadow}>
              <Image
                src={proPlayerimgSrc}
                alt=""
                width={600}
                height={600}
                quality={100}
              />
            </ProPlayerImage>
          </ProPlayerInfo>
        </ImageWrapper>
        {proTeamLogoSrc && (
          <ProTeamLogo>
            <Image src={proTeamLogoSrc} alt="" width={150} height={150} />
          </ProTeamLogo>
        )}
      </Container>
    </StyleSheetManager>
  );
};

export default ProPlayerInfoImage;
