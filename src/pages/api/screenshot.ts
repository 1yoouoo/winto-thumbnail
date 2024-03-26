import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import { transformGameInfo } from "../../../utils/transformToModel";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import GameInfoDto from "@/types/GameInfoDto";
import { convertJsonToQueryString } from "../../../utils/formatJson";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const deleteS3Prefix = process.env.DELETE_S3_PREFIX!;
const bucketName = process.env.AWS_BUCKET_NAME!;

type ResponseData = {
  message: string;
  screenshotUrl?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // POST 메소드 검사
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed",
      message: "please use POST method",
    });
  }

  try {
    const gameInfo: GameInfoDto = req.body;
    const transformedGameInfo = transformGameInfo(gameInfo);
    const queryString = convertJsonToQueryString(transformedGameInfo);
    const browser = await puppeteer.launch({
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.CHROMIUM_PATH
          : undefined,
      headless: true,
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    const screenshotUrl = `http://localhost:3000/screenshot?${queryString}`;
    await page.goto(screenshotUrl, { waitUntil: "networkidle0" });

    // Buffer로 스크린샷 생성
    const screenshotBuffer = await page.screenshot({
      type: "jpeg",
      quality: 100,
    });
    await browser.close();

    // S3에 스크린샷 업로드
    const screenshotKey = `thumbnail/${deleteS3Prefix}_${Date.now()}_screenshot.jpeg`;
    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: screenshotKey,
        Body: screenshotBuffer,
      })
    );

    const url = `https://${bucketName}.s3.amazonaws.com/${screenshotKey}`;
    res.status(200).json({
      message: "Screenshot taken and uploaded successfully",
      screenshotUrl: url,
    });
  } catch (error) {
    console.error("Error taking or uploading screenshot:", error);
    res.status(500).json({
      error: "Failed to process request",
      message: "Failed to process request",
    });
  }
}
