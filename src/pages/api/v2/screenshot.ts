import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import {
  spaceAccessKeyId,
  spaceRegion,
  spaceSecretAccessKey,
  spaceName,
  spacesEndpoint,
} from "@/constant/constant";
import { transformGameInfo } from "../../../../utils/v2/transformToModel";
import { convertJsonToQueryString } from "../../../../utils/v2/formatJson";
import { GameInfoDto } from "@/types/v2/model";

const s3Client = new S3Client({
  endpoint: spacesEndpoint!,
  forcePathStyle: false,
  region: spaceRegion!,
  credentials: {
    accessKeyId: spaceAccessKeyId!,
    secretAccessKey: spaceSecretAccessKey!,
  },
});

type ResponseData = {
  message: string;
  screenshotUrl?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
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
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    const screenshotUrl = `http://localhost:3000/v2/screenshot?${queryString}`;
    await page.goto(screenshotUrl, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Buffer로 스크린샷 생성
    const screenshotBuffer = await page.screenshot({
      type: "jpeg",
      quality: 100,
    });
    await browser.close();

    // S3에 스크린샷 업로드
    const screenshotKey = `${spaceName}_${Date.now()}_screenshot.jpeg`;
    await s3Client.send(
      new PutObjectCommand({
        Bucket: spaceName,
        Key: screenshotKey,
        Body: screenshotBuffer,
        ACL: "public-read",
      })
    );
    const url = `${spacesEndpoint}/${spaceName}/${screenshotKey}`;
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
