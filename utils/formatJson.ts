import GameInfoDto from "@/types/model";

export function convertJsonToQueryString(
  gameInfo: Record<string, string | string[]>
): string {
  const parts: string[] = (Object.keys(gameInfo) as (keyof GameInfoDto)[]).map(
    (key) => {
      const value = gameInfo[key];

      if (Array.isArray(value)) {
        return value
          .map((v) => `${key}=${encodeURIComponent(String(v))}`)
          .join("&");
      } else {
        return `${key}=${encodeURIComponent(String(value))}`;
      }
    }
  );

  return parts.join("&");
}

export const parseItems = (items: string[]) => {
  return items.map((item) => {
    const [id, totalGold] = item.toString().split("-").map(Number);
    return { id, totalGold };
  });
};
