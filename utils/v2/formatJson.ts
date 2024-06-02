import { GameInfoDto } from "@/types/v2/model";

export function convertJsonToQueryString(
  gameInfo: Record<string, string | string[]>
): string {
  const parts: string[] = [];

  (Object.keys(gameInfo) as (keyof GameInfoDto)[]).forEach((key) => {
    const value = gameInfo[key];
    if (value !== "") {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          if (v !== undefined && v !== "") {
            parts.push(`${key}=${encodeURIComponent(String(v))}`);
          }
        });
      } else {
        parts.push(`${key}=${encodeURIComponent(String(value))}`);
      }
    }
  });

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
