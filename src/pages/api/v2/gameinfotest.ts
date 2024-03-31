import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import { transformGameInfo } from "../../../../utils/v2/transformToModel";
import { convertJsonToQueryString } from "../../../../utils/v2/formatJson";
import { GameInfoDto } from "@/types/v2/model";

type ResponseData = {
  message: string;
  url?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
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
    const screenshotUrl = `http://localhost:3000/v2/screenshot?${queryString}`;
    await page.goto(screenshotUrl, { waitUntil: "networkidle0" });

    res.status(200).json({
      message: "success",
      url: screenshotUrl,
    });

    await browser.close();
  } catch (error) {
    console.error(error);
  }
}
