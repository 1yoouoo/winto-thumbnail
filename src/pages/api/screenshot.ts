import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";
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

const bucketName = process.env.AWS_BUCKET_NAME!;

type ResponseData = {
  message: string;
  screenshotPath: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const IS_DEVELOPMENT_MODE = process.env.IS_DEVELOPMENT_MODE === "true";

  if (req.method === "POST") {
    const gameInfo = req.body as GameInfoDto;

    const transformedGameInfo = transformGameInfo(gameInfo);

    const queryString = convertJsonToQueryString(transformedGameInfo);

    const browser = await puppeteer.launch({
      executablePath:
        process.env.NODE_ENV === "production"
          ? "/usr/bin/chromium-browser"
          : undefined,
      headless: process.env.NODE_ENV !== "development",
    });

    const page = await browser.newPage();

    const screenshotUrl = `http://localhost:3000/screenshot?${queryString}`;
    await page.setViewport({ width: 1280, height: 720 });

    await page.goto(screenshotUrl, {
      waitUntil: "networkidle0",
    });

    const assetsDir = path.resolve("assets");

    const deletePrefix = process.env.DELETE_S3_PREFIX;

    if (!fs.existsSync(assetsDir)) {
      fs.mkdirSync(assetsDir, { recursive: true });
    }

    const screenshotPath = path.join(
      assetsDir,
      `${deletePrefix}-screenshot-${Date.now()}.png`
    );

    await page.screenshot({
      path: screenshotPath,
      type: "jpeg",
      quality: 100,
      omitBackground: true,
      clip: { x: 0, y: 0, width: 1280, height: 720 },
    });

    if (IS_DEVELOPMENT_MODE) {
      await new Promise((resolve) => {
        console.log(
          "Server is running in development mode. Press Ctrl+C to stop."
        );
      });
    } else {
      await browser.close();
    }

    const fileStream = fs.createReadStream(screenshotPath);

    const uploadParams = {
      Bucket: bucketName,
      Key: screenshotPath,
      Body: fileStream,
    };

    const command = new PutObjectCommand(uploadParams);
    const data = await s3Client.send(command);
    console.log(`File uploaded successfully. ${data.$metadata.httpStatusCode}`);

    res.status(200).json({
      message: "Screenshot taken successfully!",
      screenshotPath: `https://${bucketName}.s3.amazonaws.com/${uploadParams.Key}`,
    });
  } else {
    throw new Error(`Error`);
  }
}
