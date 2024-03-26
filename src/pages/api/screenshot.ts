import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { transformGameInfo } from "../../../utils/transformToModel";
import GameInfoDto from "@/types/GameInfoDto";
import { convertJsonToQueryString } from "../../../utils/formatJson";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
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
    return res
      .status(405)
      .json({ message: "Method Not Allowed", error: "Method Not Allowed" });
  }

  const gameInfo = req.body as GameInfoDto;
  const transformedGameInfo = transformGameInfo(gameInfo);
  const queryString = convertJsonToQueryString(transformedGameInfo);

  try {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    const screenshotUrl = `http://localhost:3000/screenshot?${queryString}`;
    await page.goto(screenshotUrl, { waitUntil: "networkidle0" });

    const screenshotBuffer = await page.screenshot({
      type: "jpeg",
      quality: 100,
      omitBackground: true,
      clip: { x: 0, y: 0, width: 1280, height: 720 },
    });

    await browser.close();

    const screenshotKey = `${
      process.env.DELETE_S3_PREFIX
    }-screenshot-${Date.now()}.jpeg`;
    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: screenshotKey,
        Body: screenshotBuffer,
      })
    );

    res.status(200).json({
      message: "Screenshot taken successfully!",
      screenshotUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${screenshotKey}`,
    });
  } catch (error) {
    console.error("Error taking or uploading screenshot:", error);
    res.status(500).json({
      message: "Failed to take or upload screenshot",
      error: "Failed to take or upload screenshot",
    });
  }
}
