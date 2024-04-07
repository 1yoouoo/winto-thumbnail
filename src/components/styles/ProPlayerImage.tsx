import { spacesCdnEndpoint as spacesEndpoint } from "@/constant/constant";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: -180px;
`;

const ProPlayerImage = ({
  proPlayerImageKeyList,
}: {
  proPlayerImageKeyList: string[] | undefined;
}) => {
  const anonymousUrl = `${spacesEndpoint}/pro-player/anonymous.png`;

  const [imgSrc, setImgSrc] = useState(anonymousUrl);

  useEffect(() => {
    const randomIndex = Math.floor(
      Math.random() * (proPlayerImageKeyList?.length ?? 0)
    );

    const randomSkinKey = proPlayerImageKeyList?.[randomIndex];
    const newImgSrc = `${spacesEndpoint}/${randomSkinKey}`;
    setImgSrc(newImgSrc);
  }, [proPlayerImageKeyList]);

  return (
    <Container>
      <Image src={imgSrc} alt="" width={720} height={720} quality={100} />
    </Container>
  );
};

export default ProPlayerImage;
