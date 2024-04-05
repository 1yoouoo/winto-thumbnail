import { useQuery } from "@tanstack/react-query";
import { GameInfoViewModel, ParsedQueryString } from "@/types/v2/model";
import {
  fetchItemInfo,
  fetchLatestGameVersion,
  fetchSkinInfo,
  fetchSummonerSpellInfo,
} from "../api/gameInfo";

export const useFetchGameInfo = ({
  parsedQueryString,
}: {
  parsedQueryString: ParsedQueryString;
}) => {
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

  return {
    gameVersion: gameVersionQuery.data,
    items: itemInfoQuery.data,
    spells: spellInfoQuery.data,
    skins: skinInfoQuery.data,
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
