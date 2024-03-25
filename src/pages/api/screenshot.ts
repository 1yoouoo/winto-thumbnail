// lol-replays/thumbnail/src/pages/api/screenshot.ts
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";
import { transformGameInfo } from "../../../utils/transformToModel";
import GameInfoDto from "@/types/GameInfoDto";
import { convertJsonToQueryString } from "../../../utils/formatJson";

type ResponseData = {
  message: string;
  screenshotPath: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const isDevelopmentMode = process.env.DEVELOPMENT_MODE === "true";

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

    // console.log("screenshotUrl >>>>>>>>>>> ", screenshotUrl);

    const screenshotDir = path.resolve(__dirname, "./screenshot");

    // 디렉토리가 없다면 생성
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }

    const screenshotPath = path.join(
      screenshotDir,
      `screenshot-${Date.now()}.png`
    );

    // 스크린샷 저장
    // console.log("screenshotPath", screenshotPath);
    await page.screenshot({
      path: screenshotPath,
      type: "jpeg",
      quality: 100,
      omitBackground: true,
      clip: { x: 0, y: 0, width: 1280, height: 720 },
    });

    if (isDevelopmentMode) {
      await new Promise((resolve) => {
        console.log(
          "Server is running in development mode. Press Ctrl+C to stop."
        );
      });
    } else {
      await browser.close();
    }

    // 응답
    res.status(200).json({
      message: "Screenshot taken successfully!",
      screenshotPath: screenshotPath,
    });
  } else {
    throw new Error(`Error`);
  }
}
