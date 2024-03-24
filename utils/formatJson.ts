export function convertJsonToQueryString(json: any): string {
  const parts: string[] = [];

  const processValue = (key: string, value: any) => {
    // 문자열 또는 숫자 값 직접 추가
    if (typeof value === "string" || typeof value === "number") {
      parts.push(`${key}=${encodeURIComponent(value)}`);
    } else if (typeof value === "object" && value !== null) {
      if (Array.isArray(value)) {
        // 배열 처리: 배열이 문자열이나 숫자의 배열이면 직접 추가
        value.forEach((item, index) => {
          if (typeof item === "string" || typeof item === "number") {
            parts.push(`${key}=${encodeURIComponent(item)}`);
          } else {
            // 객체인 경우, 객체의 키를 사용
            Object.keys(item).forEach((itemKey) => {
              parts.push(
                `${key}[${index}][${itemKey}]=${encodeURIComponent(
                  item[itemKey]
                )}`
              );
            });
          }
        });
      } else {
        // 객체 필드 처리 (이 예시에서는 객체는 처리하지 않음)
      }
    }
  };

  Object.keys(json).forEach((key) => {
    const value = json[key];
    processValue(key, value);
  });

  return parts.join("&");
}

export const parseItems = (items: string[]) => {
  return items.map((item) => {
    const [id, totalGold] = item.toString().split("-").map(Number);
    return { id, totalGold };
  });
};
