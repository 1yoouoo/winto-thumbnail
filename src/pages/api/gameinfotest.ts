import GameInfoDto from "@/types/GameInfoDto";
import type { NextApiRequest, NextApiResponse } from "next";
import { transformGameInfo } from "../../../utils/transformToModel";
import { convertJsonToQueryString } from "../../../utils/formatJson";
import puppeteer from "puppeteer";

type ResponseData = {
  message: string;
  screenshotUrl?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // 로컬 환경에서만 동작

  if (process.env.NODE_ENV !== "development") {
    return res.status(405).json({
      error: "Method Not Allowed",
      message: "please use development environment",
    });
  }

  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method Not Allowed",
      message: "please use GET method",
    });
  }

  try {
    const gameInfo: GameInfoDto = req.body;
    const transformedGameInfo = transformGameInfo(gameInfo);
    const queryString = convertJsonToQueryString(transformedGameInfo);
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    const screenshotUrl = `http://localhost:3000/screenshot?${queryString}`;
    await page.goto(screenshotUrl, { waitUntil: "networkidle0" });

    console.log(gameInfo);

    res.status(200).json({
      message: "success",
    });

    await browser.close();
  } catch (error) {
    console.error(error);
  }
}
