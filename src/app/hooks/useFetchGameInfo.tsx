import { useQuery } from "@tanstack/react-query";
import {
  GameInfoViewModel,
  GameVersion,
  Item,
  Locale,
  ParsedQueryString,
  Spell,
} from "@/types/v2/model";
import {
  fetchChampionPortraitListFromBucket,
  fetchItemInfo,
  fetchLatestGameVersion,
  fetchProPlayerList,
  fetchProTeamLogo,
  fetchSkinInfo,
  fetchSkinListFromBucket,
  fetchSummonerSpellInfo,
  fetchTranslateChampionName,
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
        gameVersion: gameVersion as GameVersion,
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
        gameVersion: gameVersion as GameVersion,
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
        gameVersion: gameVersion as GameVersion,
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
    queryKey: ["proPlayerImageInfo", parsedQueryString.playerName],
    queryFn: ({ queryKey }) => {
      const [, playerName] = queryKey;

      if (!playerName) return [];

      return fetchProPlayerList({
        playerName: playerName as string,
      });
    },
    enabled: !!parsedQueryString.playerName,
  });

  const proTeamLogoQuery = useQuery<string>({
    queryKey: ["proTeamLogoInfo", parsedQueryString.teamName],
    queryFn: ({ queryKey }) => {
      const [, teamName] = queryKey;

      if (!teamName) return "";

      return fetchProTeamLogo({
        teamName: teamName as string,
      });
    },
    enabled: !!parsedQueryString.teamName,
  });

  const translateChampionName = useQuery({
    queryKey: [
      "translateChampionName",
      gameVersionQuery.data,
      parsedQueryString.locale,
    ],
    queryFn: async ({ queryKey }) => {
      const [, gameVersion, locale] = queryKey;

      if (!gameVersion || !locale) {
        console.error("Invalid gameVersion or locale for translation query.");
        return "en_US";
      }

      return fetchTranslateChampionName({
        gameVersion: gameVersion as GameVersion,
        championName: parsedQueryString.championName,
        locale: locale as Locale,
      });
    },
    enabled:
      !!gameVersionQuery.data &&
      !!parsedQueryString.championName &&
      !!parsedQueryString.locale,
  });

  const championPortraitQuery = useQuery<string[]>({
    queryKey: ["championPortrait", parsedQueryString.championName],
    queryFn: ({ queryKey }) => {
      const [, championName] = queryKey;

      if (!championName) return [];

      return fetchChampionPortraitListFromBucket({
        championName: championName as string,
      });
    },
    enabled: !!parsedQueryString.championName,
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
    if (query.enemyChampionName)
      fields.enemyChampionName = query.enemyChampionName;

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

    if (proTeamLogoQuery.isError)
      sendSlackNotification({
        title: "프로팀 로고 조회 중 에러 발생",
        details: proTeamLogoQuery.error.toString(),
      });

    if (translateChampionName.isError)
      sendSlackNotification({
        title: "챔피언 이름 번역 중 에러 발생",
        details: translateChampionName.error.toString(),
      });

    if (championPortraitQuery.isError)
      sendSlackNotification({
        title: "챔피언 포트레이트 조회 중 에러 발생",
        details: championPortraitQuery.error.toString(),
      });

    if (
      gameVersionQuery.error ||
      itemInfoQuery.error ||
      spellInfoQuery.error ||
      skinInfoQuery.error ||
      proPlayerImageQuery.error ||
      proTeamLogoQuery.error ||
      championPortraitQuery.error
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
    proTeamLogoQuery.isError,
    proTeamLogoQuery.error,
    translateChampionName.isError,
    translateChampionName.error,
    championPortraitQuery.isError,
    championPortraitQuery.error,
  ]);

  return {
    gameVersion: gameVersionQuery.data!,
    items: itemInfoQuery.data,
    spells: spellInfoQuery.data,
    skins: skinInfoQuery.data,
    proPlayerImageKeyList: proPlayerImageQuery.data,
    proTeamLogoKey: proTeamLogoQuery.data,
    translatedChampionName: translateChampionName.data,
    championPortraits: championPortraitQuery.data,
    optionalFields: optionalFields(parsedQueryString),

    isLoading:
      gameVersionQuery.isLoading ||
      itemInfoQuery.isLoading ||
      spellInfoQuery.isLoading ||
      skinInfoQuery.isLoading ||
      proPlayerImageQuery.isLoading ||
      proTeamLogoQuery.isLoading ||
      championPortraitQuery.isLoading,

    isError:
      gameVersionQuery.isError ||
      itemInfoQuery.isError ||
      spellInfoQuery.isError ||
      skinInfoQuery.isError ||
      proPlayerImageQuery.isError ||
      proTeamLogoQuery.isError ||
      translateChampionName.isError ||
      championPortraitQuery.isError,
  };
};
