import type { NextApiRequest, NextApiResponse } from "next";
import { transformToModel } from "../../../../utils/v2/transformToModel";
import { convertJsonToQueryString } from "../../../../utils/v2/formatJson";
import { GameInfoDto } from "@/types/v2/model";
import { app_url } from "@/constant/constant";

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
    const transformedGameInfo = transformToModel(gameInfo);

    const queryString = convertJsonToQueryString(transformedGameInfo);

    res.status(200).json({
      message: "success",
      url: `${app_url}/v2/screenshot?${queryString}`,
    });
  } catch (error: any) {
    console.error("error from game-info-test: ", error);
  }
}
