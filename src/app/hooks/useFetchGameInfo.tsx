import { useQuery } from "@tanstack/react-query";
import {
  GameInfoViewModel,
  Item,
  ParsedQueryString,
  Spell,
} from "@/types/v2/model";
import {
  fetchItemInfo,
  fetchLatestGameVersion,
  fetchProPlayerList,
  fetchSkinInfo,
  fetchSkinListFromBucket,
  fetchSummonerSpellInfo,
} from "../api/gameInfo";
import { useEffect } from "react";
import { sendSlackNotification } from "../../../utils/v2/sendSlackNotification";

export const useFetchGameInfo = ({
  parsedQueryString,
}: {
  parsedQueryString: ParsedQueryString;
}) => {
  const gameVersionQuery = useQuery({
    queryKey: ["gameVersion"],
    queryFn: fetchLatestGameVersion,
  });

  const itemInfoQuery = useQuery<Item[]>({
    queryKey: ["itemInfo", gameVersionQuery.data, parsedQueryString.itemIds],
    queryFn: ({ queryKey }) => {
      const [, gameVersion, itemIds] = queryKey;
      return fetchItemInfo({
        gameVersion: gameVersion as string,
        itemIds: itemIds as string[],
      });
    },
    enabled: !!gameVersionQuery.data && !!parsedQueryString.itemIds,
  });

  const spellInfoQuery = useQuery<Spell[]>({
    queryKey: ["spellInfo", gameVersionQuery.data, parsedQueryString.spellIds],
    queryFn: ({ queryKey }) => {
      const [, gameVersion, spellIds] = queryKey;
      return fetchSummonerSpellInfo({
        gameVersion: gameVersion as string,
        spellIds: spellIds as number[],
      });
    },
    enabled: !!gameVersionQuery.data && !!parsedQueryString.spellIds,
  });

  const skinInfoQuery = useQuery<GameInfoViewModel["skins"]>({
    queryKey: [
      "skinInfo",
      gameVersionQuery.data,
      parsedQueryString.championName,
    ],
    queryFn: async ({ queryKey }) => {
      const [, gameVersion, championName] = queryKey;
      const info = await fetchSkinInfo({
        gameVersion: gameVersion as string,
        championName: championName as string,
      });
      const keys = await fetchSkinListFromBucket({
        championName: championName as string,
      });

      return { info, keys };
    },
    enabled: !!gameVersionQuery.data && !!parsedQueryString.championName,
  });

  const proPlayerImageQuery = useQuery<string[]>({
    queryKey: [
      "proPlayerImageInfo",
      parsedQueryString.playerName,
      parsedQueryString.teamName,
    ],
    queryFn: ({ queryKey }) => {
      const [, playerName, teamName] = queryKey;

      if (!playerName || !teamName) return [];

      return fetchProPlayerList({
        playerName: playerName as string,
      });
    },
    enabled: !!parsedQueryString.playerName && !!parsedQueryString.teamName,
  });

  const optionalFields = (query: ParsedQueryString) => {
    const fields: Partial<GameInfoViewModel> = {};
    if (query.teamName) fields.teamName = query.teamName;
    if (query.playerName) fields.playerName = query.playerName;
    if (query.kills) fields.kills = parseInt(query.kills, 10);
    if (query.deaths) fields.deaths = parseInt(query.deaths, 10);
    if (query.assists) fields.assists = parseInt(query.assists, 10);
    if (query.teamPosition) fields.teamPosition = query.teamPosition;
    if (query.primaryPerk) fields.primaryPerk = parseInt(query.primaryPerk, 10);
    if (query.subPerk) fields.subPerk = parseInt(query.subPerk, 10);
    if (query.firstBloodKill)
      fields.firstBloodKill = query.firstBloodKill === "true";
    if (query.doubleKills) fields.doubleKills = parseInt(query.doubleKills, 10);
    if (query.tripleKills) fields.tripleKills = parseInt(query.tripleKills, 10);
    if (query.quadraKills) fields.quadraKills = parseInt(query.quadraKills, 10);
    if (query.pentaKills) fields.pentaKills = parseInt(query.pentaKills, 10);

    return fields;
  };

  useEffect(() => {
    if (gameVersionQuery.isError)
      sendSlackNotification({
        title: "게임 정보 조회 중 에러 발생",
        details: gameVersionQuery.error.toString(),
      });
    if (itemInfoQuery.isError)
      sendSlackNotification({
        title: "아이템 정보 조회 중 에러 발생",
        details: itemInfoQuery.error.toString(),
      });

    if (spellInfoQuery.isError)
      sendSlackNotification({
        title: "스펠 정보 조회 중 에러 발생",
        details: spellInfoQuery.error.toString(),
      });

    if (skinInfoQuery.isError)
      sendSlackNotification({
        title: "스킨 정보 조회 중 에러 발생",
        details: skinInfoQuery.error.toString(),
      });

    if (proPlayerImageQuery.isError)
      sendSlackNotification({
        title: "프로플레이어 정보 조회 중 에러 발생",
        details: proPlayerImageQuery.error.toString(),
      });
    if (
      gameVersionQuery.error ||
      itemInfoQuery.error ||
      spellInfoQuery.error ||
      skinInfoQuery.error
    )
      sendSlackNotification({
        title: "parsedQueryString",
        details: JSON.stringify(parsedQueryString, null, 2),
      });
  }, [
    parsedQueryString,
    gameVersionQuery.isError,
    itemInfoQuery.isError,
    spellInfoQuery.isError,
    skinInfoQuery.isError,
    gameVersionQuery.error,
    itemInfoQuery.error,
    spellInfoQuery.error,
    skinInfoQuery.error,
    proPlayerImageQuery.isError,
    proPlayerImageQuery.error,
  ]);

  return {
    gameVersion: gameVersionQuery.data!,
    items: itemInfoQuery.data,
    spells: spellInfoQuery.data,
    skins: skinInfoQuery.data,
    proPlayerImageKeyList: proPlayerImageQuery.data,
    optionalFields: optionalFields(parsedQueryString),

    isLoading:
      gameVersionQuery.isLoading ||
      itemInfoQuery.isLoading ||
      spellInfoQuery.isLoading ||
      skinInfoQuery.isLoading,
    isError:
      gameVersionQuery.isError ||
      itemInfoQuery.isError ||
      spellInfoQuery.isError ||
      skinInfoQuery.isError,
  };
};
