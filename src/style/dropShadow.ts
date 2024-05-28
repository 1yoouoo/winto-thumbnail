import { css } from "styled-components";

export type DropShadow =
  | "white"
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
  white: css`
    filter: drop-shadow(2px 0 3px #f6f6f65d) drop-shadow(0 2px 3px #f6f6f65d)
      drop-shadow(-2px 0 3px #f6f6f65d) drop-shadow(0 -2px 3px #f6f6f65d)
      drop-shadow(2px 0 5px #f6f6f629) drop-shadow(0 2px 5px #f6f6f629)
      drop-shadow(-2px 0 5px #f6f6f629) drop-shadow(0 -2px 5px #f6f6f629);
  `,
  purple: css`
    filter: drop-shadow(2px 0 3px #9194f65d) drop-shadow(0 2px 3px #9194f65d)
      drop-shadow(-2px 0 3px #9194f65d) drop-shadow(0 -2px 3px #9194f65d)
      drop-shadow(2px 0 5px #9194f629) drop-shadow(0 2px 5px #9194f629)
      drop-shadow(-2px 0 5px #9194f629) drop-shadow(0 -2px 5px #9194f629);
  `,
  blue: css`
    filter: drop-shadow(2px 0 3px #7f8cf65d) drop-shadow(0 2px 3px #7f8cf65d)
      drop-shadow(-2px 0 3px #7f8cf65d) drop-shadow(0 -2px 3px #7f8cf65d)
      drop-shadow(2px 0 5px #7f8cf629) drop-shadow(0 2px 5px #7f8cf629)
      drop-shadow(-2px 0 5px #7f8cf629) drop-shadow(0 -2px 5px #7f8cf629);
  `,
  green: css`
    filter: drop-shadow(2px 0 3px #8cf6915d) drop-shadow(0 2px 3px #8cf6915d)
      drop-shadow(-2px 0 3px #8cf6915d) drop-shadow(0 -2px 3px #8cf6915d)
      drop-shadow(2px 0 5px #8cf62929) drop-shadow(0 2px 5px #8cf62929)
      drop-shadow(-2px 0 5px #8cf62929) drop-shadow(0 -2px 5px #8cf62929);
  `,
  orange: css`
    filter: drop-shadow(2px 0 3px #f6b8915d) drop-shadow(0 2px 3px #f6b8915d)
      drop-shadow(-2px 0 3px #f6b8915d) drop-shadow(0 -2px 3px #f6b8915d)
      drop-shadow(2px 0 5px #f6b82929) drop-shadow(0 2px 5px #f6b82929)
      drop-shadow(-2px 0 5px #f6b82929) drop-shadow(0 -2px 5px #f6b82929);
  `,
  pink: css`
    filter: drop-shadow(2px 0 3px #f6a1c85d) drop-shadow(0 2px 3px #f6a1c85d)
      drop-shadow(-2px 0 3px #f6a1c85d) drop-shadow(0 -2px 3px #f6a1c85d)
      drop-shadow(2px 0 5px #f6297e29) drop-shadow(0 2px 5px #f6297e29)
      drop-shadow(-2px 0 5px #f6297e29) drop-shadow(0 -2px 5px #f6297e29);
  `,
  red: css`
    filter: drop-shadow(2px 0 3px #f65c5d5d) drop-shadow(0 2px 3px #f65c5d5d)
      drop-shadow(-2px 0 3px #f65c5d5d) drop-shadow(0 -2px 3px #f65c5d5d)
      drop-shadow(2px 0 5px #f6292929) drop-shadow(0 2px 5px #f6292929)
      drop-shadow(-2px 0 5px #f6292929) drop-shadow(0 -2px 5px #f6292929);
  `,
  yellow: css`
    filter: drop-shadow(2px 0 3px #f6e15d5d) drop-shadow(0 2px 3px #f6e15d5d)
      drop-shadow(-2px 0 3px #f6e15d5d) drop-shadow(0 -2px 3px #f6e15d5d)
      drop-shadow(2px 0 5px #f6a52929) drop-shadow(0 2px 5px #f6a52929)
      drop-shadow(-2px 0 5px #f6a52929) drop-shadow(0 -2px 5px #f6a52929);
  `,
  teal: css`
    filter: drop-shadow(2px 0 3px #5df6d75d) drop-shadow(0 2px 3px #5df6d75d)
      drop-shadow(-2px 0 3px #5df6d75d) drop-shadow(0 -2px 3px #5df6d75d)
      drop-shadow(2px 0 5px #29f6ac29) drop-shadow(0 2px 5px #29f6ac29)
      drop-shadow(-2px 0 5px #29f6ac29) drop-shadow(0 -2px 5px #29f6ac29);
  `,
  cyan: css`
    filter: drop-shadow(2px 0 3px #5dcff65d) drop-shadow(0 2px 3px #5dcff65d)
      drop-shadow(-2px 0 3px #5dcff65d) drop-shadow(0 -2px 3px #5dcff65d)
      drop-shadow(2px 0 5px #29a1f629) drop-shadow(0 2px 5px #29a1f629)
      drop-shadow(-2px 0 5px #29a1f629) drop-shadow(0 -2px 5px #29a1f629);
  `,
  magenta: css`
    filter: drop-shadow(2px 0 3px #f65df35d) drop-shadow(0 2px 3px #f65df35d)
      drop-shadow(-2px 0 3px #f65df35d) drop-shadow(0 -2px 3px #f65df35d)
      drop-shadow(2px 0 5px #f629d629) drop-shadow(0 2px 5px #f629d629)
      drop-shadow(-2px 0 5px #f629d629) drop-shadow(0 -2px 5px #f629d629);
  `,
  lime: css`
    filter: drop-shadow(2px 0 3px #baf65d5d) drop-shadow(0 2px 3px #baf65d5d)
      drop-shadow(-2px 0 3px #baf65d5d) drop-shadow(0 -2px 3px #baf65d5d)
      drop-shadow(2px 0 5px #8df62929) drop-shadow(0 2px 5px #8df62929)
      drop-shadow(-2px 0 5px #8df62929) drop-shadow(0 -2px 5px #8df62929);
  `,
  // 더 필요한 색상도 추가할 수 있습니다.
};
