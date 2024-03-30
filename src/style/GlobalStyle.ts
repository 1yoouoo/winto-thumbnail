"use client";

import { createGlobalStyle } from "styled-components";
import { fonts } from "@/style/fonts";

export const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
    width: 1280px;
    height: 720px;
  }

  @font-face {
    font-family: ${fonts.KOMIKAX.fontFamily};
    src: url( ${fonts.KOMIKAX.fontUrl}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: ${fonts.GROBOLD.fontFamily};
    src: url( ${fonts.GROBOLD.fontUrl}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: ${fonts.LuckiestGuy.fontFamily};
    src: url( ${fonts.LuckiestGuy.fontUrl}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

`;
