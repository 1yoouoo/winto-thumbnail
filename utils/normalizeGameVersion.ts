export function normalizeGameVersion(version: string): string {
  const parts = version.split(".");
  if (parts.length >= 3) {
    return `${parts[0]}.${parts[1]}.${parts[2].charAt(0)}`;
  } else {
    console.log("게임 버전 정보가 올바르지 않습니다. >>", version);
  }
  return version;
}
