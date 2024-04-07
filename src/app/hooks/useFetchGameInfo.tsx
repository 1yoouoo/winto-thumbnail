import { useQuery } from "@tanstack/react-query";
import { GameInfoViewModel, ParsedQueryString } from "@/types/v2/model";
import {
  fetchItemInfo,
  fetchLatestGameVersion,
  fetchProPlayerList,
  fetchSkinInfo,
  fetchSummonerSpellInfo,
} from "../api/gameInfo";
import { useEffect } from "react";
import { useSlackNotification } from "./useSlackNotification";

export const useFetchGameInfo = ({
  parsedQueryString,
}: {
  parsedQueryString: ParsedQueryString;
}) => {
  const sendSlackNotification = useSlackNotification();
  const gameVersionQuery = useQuery({
    queryKey: ["gameVersion"],
    queryFn: fetchLatestGameVersion,
  });

  const itemInfoQuery = useQuery({
    queryKey: ["itemInfo", gameVersionQuery.data, parsedQueryString.itemIds],
    queryFn: ({ queryKey }) => {
      const [, gameVersion, itemIds] = queryKey;
      return fetchItemInfo({ gameVersion, itemIds });
    },
    enabled: !!gameVersionQuery.data && !!parsedQueryString.itemIds,
  });

  const spellInfoQuery = useQuery({
    queryKey: ["spellInfo", gameVersionQuery.data, parsedQueryString.spellIds],
    queryFn: ({ queryKey }) => {
      const [, gameVersion, spellIds] = queryKey;
      return fetchSummonerSpellInfo({ gameVersion, spellIds });
    },
    enabled: !!gameVersionQuery.data && !!parsedQueryString.spellIds,
  });

  const skinInfoQuery = useQuery({
    queryKey: [
      "skinInfo",
      gameVersionQuery.data,
      parsedQueryString.championName,
    ],
    queryFn: ({ queryKey }) => {
      const [, gameVersion, championName] = queryKey;
      return fetchSkinInfo({ gameVersion, championName });
    },
    enabled: !!gameVersionQuery.data && !!parsedQueryString.championName,
  });

  const proPlayerImageQuery = useQuery({
    queryKey: [
      "proPlayerImageInfo",
      parsedQueryString.playerName,
      parsedQueryString.teamName,
    ],
    queryFn: ({ queryKey }) => {
      const [, playerName, teamName] = queryKey;

      if (!playerName || !teamName) return [];

      return fetchProPlayerList({ playerName, teamName });
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
    gameVersionQuery.isError,
    itemInfoQuery.isError,
    spellInfoQuery.isError,
    skinInfoQuery.isError,
    sendSlackNotification,
    parsedQueryString,
    gameVersionQuery.error,
    itemInfoQuery.error,
    spellInfoQuery.error,
    skinInfoQuery.error,
    proPlayerImageQuery.isError,
    proPlayerImageQuery.error,
  ]);

  return {
    gameVersion: gameVersionQuery.data,
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
