import { css } from "styled-components";

export type DropShadow =
  | "purple"
  | "blue"
  | "green"
  | "orange"
  | "pink"
  | "red"
  | "yellow"
  | "teal"
  | "cyan"
  | "magenta"
  | "lime";

export const getRandomDropShadow = (): DropShadow => {
  const dropShadowColors = Object.keys(dropShadow) as DropShadow[];
  return dropShadowColors[Math.floor(Math.random() * dropShadowColors.length)];
};

export const dropShadow: Record<DropShadow, ReturnType<typeof css>> = {
  purple: css`
    filter: drop-shadow(1px 0 2px #9194f65d) /* 오른쪽 그림자, 밝은 색 */
      drop-shadow(0 1px 2px #9194f65d) /* 아래쪽 그림자, 밝은 색 */
      drop-shadow(-1px 0 2px #9194f65d) /* 왼쪽 그림자, 밝은 색 */
      drop-shadow(0 -1px 2px #9194f65d) /* 위쪽 그림자, 밝은 색 */
      drop-shadow(1px 0 4px #9194f629) /* 오른쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 1px 4px #9194f629) /* 아래쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(-1px 0 4px #9194f629) /* 왼쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 -1px 4px #9194f629);
  `,
  blue: css`
    filter: drop-shadow(1px 0 2px #7f8cf65d) /* 오른쪽 그림자, 밝은 색 */
      drop-shadow(0 1px 2px #7f8cf65d) /* 아래쪽 그림자, 밝은 색 */
      drop-shadow(-1px 0 2px #7f8cf65d) /* 왼쪽 그림자, 밝은 색 */
      drop-shadow(0 -1px 2px #7f8cf65d) /* 위쪽 그림자, 밝은 색 */
      drop-shadow(1px 0 4px #7f8cf629) /* 오른쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 1px 4px #7f8cf629) /* 아래쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(-1px 0 4px #7f8cf629) /* 왼쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 -1px 4px #7f8cf629);
  `,
  green: css`
    filter: drop-shadow(1px 0 2px #8cf6915d) /* 오른쪽 그림자, 밝은 색 */
      drop-shadow(0 1px 2px #8cf6915d) /* 아래쪽 그림자, 밝은 색 */
      drop-shadow(-1px 0 2px #8cf6915d) /* 왼쪽 그림자, 밝은 색 */
      drop-shadow(0 -1px 2px #8cf6915d) /* 위쪽 그림자, 밝은 색 */
      drop-shadow(1px 0 4px #8cf62929) /* 오른쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 1px 4px #8cf62929) /* 아래쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(-1px 0 4px #8cf62929) /* 왼쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 -1px 4px #8cf62929);
  `,
  orange: css`
    filter: drop-shadow(1px 0 2px #f6b8915d) /* 오른쪽 그림자, 밝은 색 */
      drop-shadow(0 1px 2px #f6b8915d) /* 아래쪽 그림자, 밝은 색 */
      drop-shadow(-1px 0 2px #f6b8915d) /* 왼쪽 그림자, 밝은 색 */
      drop-shadow(0 -1px 2px #f6b8915d) /* 위쪽 그림자, 밝은 색 */
      drop-shadow(1px 0 4px #f6b82929) /* 오른쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 1px 4px #f6b82929) /* 아래쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(-1px 0 4px #f6b82929) /* 왼쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 -1px 4px #f6b82929);
  `,
  pink: css`
    filter: drop-shadow(1px 0 2px #f6a1c85d) /* 오른쪽 그림자, 밝은 색 */
      drop-shadow(0 1px 2px #f6a1c85d) /* 아래쪽 그림자, 밝은 색 */
      drop-shadow(-1px 0 2px #f6a1c85d) /* 왼쪽 그림자, 밝은 색 */
      drop-shadow(0 -1px 2px #f6a1c85d) /* 위쪽 그림자, 밝은 색 */
      drop-shadow(1px 0 4px #f6297e29) /* 오른쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 1px 4px #f6297e29) /* 아래쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(-1px 0 4px #f6297e29) /* 왼쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 -1px 4px #f6297e29);
  `,
  red: css`
    filter: drop-shadow(1px 0 2px #f65c5d5d) /* 오른쪽 그림자, 밝은 색 */
      drop-shadow(0 1px 2px #f65c5d5d) /* 아래쪽 그림자, 밝은 색 */
      drop-shadow(-1px 0 2px #f65c5d5d) /* 왼쪽 그림자, 밝은 색 */
      drop-shadow(0 -1px 2px #f65c5d5d) /* 위쪽 그림자, 밝은 색 */
      drop-shadow(1px 0 4px #f6292929) /* 오른쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 1px 4px #f6292929) /* 아래쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(-1px 0 4px #f6292929) /* 왼쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 -1px 4px #f6292929);
  `,
  yellow: css`
    filter: drop-shadow(1px 0 2px #f6e15d5d) /* 오른쪽 그림자, 밝은 색 */
      drop-shadow(0 1px 2px #f6e15d5d) /* 아래쪽 그림자, 밝은 색 */
      drop-shadow(-1px 0 2px #f6e15d5d) /* 왼쪽 그림자, 밝은 색 */
      drop-shadow(0 -1px 2px #f6e15d5d) /* 위쪽 그림자, 밝은 색 */
      drop-shadow(1px 0 4px #f6a52929) /* 오른쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 1px 4px #f6a52929) /* 아래쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(-1px 0 4px #f6a52929) /* 왼쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 -1px 4px #f6a52929);
  `,
  teal: css`
    filter: drop-shadow(1px 0 2px #5df6d75d) /* 오른쪽 그림자, 밝은 색 */
      drop-shadow(0 1px 2px #5df6d75d) /* 아래쪽 그림자, 밝은 색 */
      drop-shadow(-1px 0 2px #5df6d75d) /* 왼쪽 그림자, 밝은 색 */
      drop-shadow(0 -1px 2px #5df6d75d) /* 위쪽 그림자, 밝은 색 */
      drop-shadow(1px 0 4px #29f6ac29) /* 오른쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 1px 4px #29f6ac29) /* 아래쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(-1px 0 4px #29f6ac29) /* 왼쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 -1px 4px #29f6ac29);
  `,
  cyan: css`
    filter: drop-shadow(1px 0 2px #5dcff65d) /* 오른쪽 그림자, 밝은 색 */
      drop-shadow(0 1px 2px #5dcff65d) /* 아래쪽 그림자, 밝은 색 */
      drop-shadow(-1px 0 2px #5dcff65d) /* 왼쪽 그림자, 밝은 색 */
      drop-shadow(0 -1px 2px #5dcff65d) /* 위쪽 그림자, 밝은 색 */
      drop-shadow(1px 0 4px #29a1f629) /* 오른쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 1px 4px #29a1f629) /* 아래쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(-1px 0 4px #29a1f629) /* 왼쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 -1px 4px #29a1f629);
  `,
  magenta: css`
    filter: drop-shadow(1px 0 2px #f65df35d) /* 오른쪽 그림자, 밝은 색 */
      drop-shadow(0 1px 2px #f65df35d) /* 아래쪽 그림자, 밝은 색 */
      drop-shadow(-1px 0 2px #f65df35d) /* 왼쪽 그림자, 밝은 색 */
      drop-shadow(0 -1px 2px #f65df35d) /* 위쪽 그림자, 밝은 색 */
      drop-shadow(1px 0 4px #f629d629) /* 오른쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 1px 4px #f629d629) /* 아래쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(-1px 0 4px #f629d629) /* 왼쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 -1px 4px #f629d629);
  `,
  lime: css`
    filter: drop-shadow(1px 0 2px #baf65d5d) /* 오른쪽 그림자, 밝은 색 */
      drop-shadow(0 1px 2px #baf65d5d) /* 아래쪽 그림자, 밝은 색 */
      drop-shadow(-1px 0 2px #baf65d5d) /* 왼쪽 그림자, 밝은 색 */
      drop-shadow(0 -1px 2px #baf65d5d) /* 위쪽 그림자, 밝은 색 */
      drop-shadow(1px 0 4px #8df62929) /* 오른쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 1px 4px #8df62929) /* 아래쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(-1px 0 4px #8df62929) /* 왼쪽 더 흐릿한 그림자, 어두운 색 */
      drop-shadow(0 -1px 4px #8df62929);
  `,
  // 더 필요한 색상도 추가할 수 있습니다.
};
