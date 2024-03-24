// lol-replays/thumbnail/src/pages/api/screenshot.ts
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";
import { data } from "@/app/shared";

function jsonToQueryString(json: Record<string, string>) {
  return Object.keys(json)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(json[key]))
    .join("&");
}

type ResponseData = {
  message: string;
  screenshotPath: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log("handler", __dirname);
  if (req.method === "POST") {
    const gameInfo = req.body;

    const queryString = jsonToQueryString(gameInfo);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await data.createData({ gameInfo });

    const screenshotUrl = `http://localhost:3000/screenshot?${queryString}`;

    await page.goto(screenshotUrl, {
      waitUntil: "networkidle0",
    });

    console.log("screenshotUrl >>>>>>>>>>> ", screenshotUrl);

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
    console.log("screenshotPath", screenshotPath);
    await page.screenshot({
      path: screenshotPath,
      type: "jpeg",
      quality: 100,
      fullPage: true,
    });
    await browser.close();

    // 응답
    res.status(200).json({
      message: "Screenshot taken successfully!",
      screenshotPath: screenshotPath,
    });
  } else {
    throw new Error(`Error`);
  }
}
