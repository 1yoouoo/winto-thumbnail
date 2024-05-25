import { spacesCdnFullEndpoint as spacesCdnEndpoint } from "@/constant/constant";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

const ProPlayerImage = styled.div`
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

    filter: drop-shadow(1px 0 2px #9194f65d) /* 오른쪽 그림자, 밝은 색 */
      drop-shadow(0 1px 2px #9194f65d) /* 아래쪽 그림자, 밝은 색 */
      drop-shadow(-1px 0 2px #9194f65d) /* 왼쪽 그림자, 밝은 색 */
      drop-shadow(0 -1px 2px #9194f65d) /* 위쪽 그림자, 밝은 색 */
      drop-shadow(1px 0 4px #9194f629) /* 오른쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 1px 4px #9194f629) /* 아래쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(-1px 0 4px #9194f629) /* 왼쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 -1px 4px #9194f629);
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
  );
};

export default ProPlayerInfoImage;
