import type { NextApiRequest, NextApiResponse } from "next";
import { S3 } from "@aws-sdk/client-s3";
import {
  spaceAccessKeyId,
  spaceName,
  spaceRegion,
  spaceSecretAccessKey,
} from "@/constant/constant";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prefix } = req.query;

  // S3 클라이언트 설정
  const s3Client = new S3({
    endpoint: "https://sgp1.digitaloceanspaces.com",
    forcePathStyle: false,
    region: spaceRegion!,
    credentials: {
      accessKeyId: spaceAccessKeyId!,
      secretAccessKey: spaceSecretAccessKey!,
    },
  });

  // S3에서 객체 목록을 조회합니다.
  const response = await s3Client.listObjects({
    Bucket: `${spaceName}`,
    Prefix: prefix as string,
  });

  // 응답을 클라이언트에 보냅니다.
  res.status(200).json(response.Contents?.map((content) => content.Key));
}
