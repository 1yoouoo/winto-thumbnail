export function normalizeItemIds(itemIds: string | string[]): string[] {
  // itemIds가 배열이면 그대로 반환, 아니면 배열로 만들어 반환
  return Array.isArray(itemIds) ? itemIds : [itemIds];
}
