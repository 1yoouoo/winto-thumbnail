import { spacesCdnEndpoint } from "@/constant/constant";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: -180px;
`;

const ProPlayerImage = ({
  proPlayer,
  teamName,
}: {
  proPlayer: string;
  teamName?: string;
}) => {
  const proPlayerName = proPlayer?.toLowerCase();
  const anonymous = "anonymous";

  const proPlayerUrl = `${spacesCdnEndpoint}/pro-player/${proPlayerName}.png`;
  const anonymousUrl = `${spacesCdnEndpoint}/pro-player/${anonymous}.png`;

  const [imgSrc, setImgSrc] = useState(proPlayerUrl);

  // 이미지 로딩 실패 시 실행될 함수
  const handleError = () => {
    setImgSrc(anonymousUrl); // 익명 사진으로 변경
  };

  return (
    <Container>
      <Image
        src={imgSrc}
        alt=""
        onError={handleError}
        width={720}
        height={720}
        quality={100}
      />
    </Container>
  );
};

export default ProPlayerImage;
