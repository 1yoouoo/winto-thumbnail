export function jsonToQueryString(
  json: Record<string, string | string[]>
): string {
  return Object.keys(json)
    .flatMap((key) => {
      const value = json[key];
      // 값이 문자열 배열인 경우, 배열의 각 요소를 별도의 쿼리 파라미터로 처리
      if (Array.isArray(value)) {
        return value.map(
          (item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
        );
      }
      // 값이 문자열인 경우, 직접 쿼리 파라미터로 변환
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join("&");
}

export function queryStringToJson(queryString: string): Record<string, any> {
  if (typeof queryString !== "string") {
    console.error("queryStringToJson expects a string input.");
    return {};
  }

  const params = new URLSearchParams(queryString);
  const result: Record<string, any> = {};

  params.forEach((value, key) => {
    // 단순 값이거나 spells와 같은 배열을 처리
    if (key.endsWith("[]")) {
      // key가 배열을 나타내면, 결과 객체에서 배열로 처리
      const baseKey = key.slice(0, -2); // '[]' 제거
      if (!result[baseKey]) {
        result[baseKey] = [];
      }
      result[baseKey].push(value);
    } else {
      // 기본적인 키-값 처리
      result[key] = value;
    }
  });

  // 문자열 'true'/'false'를 불리언으로 변환
  Object.keys(result).forEach((key) => {
    if (result[key] === "true") result[key] = true;
    else if (result[key] === "false") result[key] = false;
    // 숫자로 변환 가능한지 확인 후 변환
    else if (!isNaN(Number(result[key]))) result[key] = Number(result[key]);
  });

  return result;
}
