import { spacesCdnFullEndpoint as spacesCdnEndpoint } from "@/constant/constant";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: -180px;
  width: 720px;
  height: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ProPlayerInfo = styled.div``;

const ProPlayerImage = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  img {
    object-fit: contain;
    width: auto;
    height: auto;
  }
`;

const ProTeamLogo = styled.div`
  z-index: 1;
  position: absolute;
  width: 400px;
  height: 400px;
  display: flex;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

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
  const anonymousUrl = `${spacesCdnEndpoint}/pro-player/anonymous.png`;

  const [proPlayerimgSrc, setProPlayerImgSrc] = useState("");
  const [proTeamLogoSrc, setProTeamLogoSrc] = useState("");

  useEffect(() => {
    if (!proPlayerImageKeyList || proPlayerImageKeyList.length === 0) {
      setProPlayerImgSrc(anonymousUrl);
      return;
    }

    const randomIndex = Math.floor(
      Math.random() * (proPlayerImageKeyList?.length ?? 0)
    );

    const randomSkinKey = proPlayerImageKeyList?.[randomIndex];
    const newProPlayerImgSrc = `${spacesCdnEndpoint}/${randomSkinKey}`;
    setProPlayerImgSrc(newProPlayerImgSrc);
  }, [anonymousUrl, proPlayerImageKeyList]);

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
    <Container>
      <ImageWrapper>
        <ProPlayerInfo>
          <ProPlayerImage>
            <Image
              src={proPlayerimgSrc}
              alt=""
              width={720}
              height={720}
              quality={100}
            />
          </ProPlayerImage>

          {proTeamLogoSrc && (
            <ProTeamLogo>
              <Image src={proTeamLogoSrc} alt="" width={400} height={400} />
            </ProTeamLogo>
          )}
        </ProPlayerInfo>
      </ImageWrapper>
    </Container>
  );
};

export default ProPlayerInfoImage;
