import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import {
  spaceAccessKeyId,
  spaceRegion,
  spaceSecretAccessKey,
  spaceName,
  spacesFullEndpoint,
  spacesEndpoint,
  app_url,
} from "@/constant/constant";
import { convertJsonToQueryString } from "../../../../utils/v2/formatJson";
import { GameInfoDto } from "@/types/v2/model";
import { transformToModel } from "../../../../utils/v2/transformToModel";
import { sendSlackNotification } from "../../../../utils/v2/sendSlackNotification";

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
  if (!req.body) {
    return res.status(400).json({
      error: "Bad Request",
      message: "request body is empty",
    });
  }

  console.log("req.body : ", req.body);

  try {
    const gameInfo: GameInfoDto = req.body;
    const transformedGameInfo = transformToModel(gameInfo);
    const queryString = convertJsonToQueryString(transformedGameInfo);
    const browser = await puppeteer.launch({
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.CHROMIUM_PATH
          : undefined,
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--proxy-server='direct://'",
        "--proxy-bypass-list=*",
      ],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    const screenshotUrl = `${app_url}/v2/screenshot?${queryString}`;
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
    const screenshotKey = `${spaceName}/${Date.now()}_screenshot.jpeg`;
    await s3Client.send(
      new PutObjectCommand({
        Bucket: spaceName,
        Key: screenshotKey,
        Body: screenshotBuffer,
        ACL: "public-read",
      })
    );
    const url = `${spacesFullEndpoint}/${screenshotKey}`;
    res.status(200).json({
      message: "Screenshot taken and uploaded successfully",
      screenshotUrl: url,
    });
  } catch (error: any) {
    sendSlackNotification({
      title: "screenshot에서 에러 발생",
      details: error.toString(),
    });

    console.error("Error taking or uploading screenshot:", error);
    res.status(500).json({
      error: "Failed to process request",
      message: "Failed to process request",
    });
  }
}
