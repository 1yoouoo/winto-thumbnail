import { spacesCdnEndpoint as spacesEndpoint } from "@/constant/constant";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: -180px;
  width: 720px;
  height: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;

  img {
    object-fit: contain;
    width: auto;
    height: auto;
  }
`;

const ProPlayerImage = ({
  proPlayerImageKeyList,
}: {
  proPlayerImageKeyList: string[];
}) => {
  const anonymousUrl = `${spacesEndpoint}/pro-player/anonymous.png`;

  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    if (!proPlayerImageKeyList || proPlayerImageKeyList.length === 0) {
      setImgSrc(anonymousUrl);
      return;
    }

    const randomIndex = Math.floor(
      Math.random() * (proPlayerImageKeyList?.length ?? 0)
    );

    const randomSkinKey = proPlayerImageKeyList?.[randomIndex];
    const newImgSrc = `${spacesEndpoint}/${randomSkinKey}`;
    setImgSrc(newImgSrc);
  }, [anonymousUrl, proPlayerImageKeyList]);

  if (!imgSrc) {
    return null;
  }

  return (
    <Container>
      <ImageWrapper>
        <Image src={imgSrc} alt="" width={720} height={720} quality={100} />
      </ImageWrapper>
    </Container>
  );
};

export default ProPlayerImage;
