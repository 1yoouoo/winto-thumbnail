// lol-replays/thumbnail/src/pages/api/screenshot.ts
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const gameInfo = req.body;

    // JSON 파일로 저장할 경로 설정
    const filePath = path.resolve(process.cwd(), "data", "gameInfo.json");

    // 요청 받은 데이터를 JSON 파일로 저장
    fs.writeFileSync(filePath, JSON.stringify(gameInfo, null, 2), "utf8");

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("http://localhost:3000");

    const screenshotDir = path.resolve(
      __dirname,
      "../../../../../lol-replays/screenshot"
    );

    // 디렉토리가 없다면 생성
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }

    const screenshotPath = path.join(
      screenshotDir,
      `screenshot-${Date.now()}.png`
    );

    // 스크린샷 저장
    await page.screenshot({ path: screenshotPath });
    await browser.close();

    // 응답
    res.status(200).json({ message: "Screenshot taken successfully!" });
  } else {
    throw new Error(`Error`);
  }
}
