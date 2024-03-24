"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 100px;
    padding: 0;
    background-color: red;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }

  /* 여기에 더 많은 글로벌 스타일을 추가할 수 있습니다. */
`;
