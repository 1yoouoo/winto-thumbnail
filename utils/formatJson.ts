import { GameInfoDto } from "@/types/model";

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

export function parseQueryString(queryString: string): {
  [key: string]: string | string[];
} {
  const params = new URLSearchParams(queryString);
  const result: { [key: string]: string | string[] } = {};

  for (const [key, value] of params) {
    if (result.hasOwnProperty(key)) {
      if (Array.isArray(result[key])) {
        (result[key] as string[]).push(value);
      } else {
        result[key] = [result[key] as string, value];
      }
    } else {
      result[key] = value;
    }
  }

  return result;
}
