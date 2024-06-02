"use client";

import { GlobalStyle } from "@/style/GlobalStyle";
import StyledComponentsRegistry from "./lib/registry";
import ReactQueryProviders from "./hooks/useReactQuery";
import localFont from "next/font/local";

const LuckiestGuy = localFont({
  src: "./fonts/LuckiestGuy.ttf",
  display: "swap",
  variable: "--font-luckiest-guy",
});

const AlimamaFangYuanTiVF = localFont({
  src: "./fonts/AlimamaFangYuanTiVF.ttf",
  display: "swap",
  variable: "--font-alimama-fang-yuan-ti-vf",
});

const WAGURITTF = localFont({
  src: "./fonts/WAGURITTF.woff2",
  display: "swap",
  variable: "--font-waguri-ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${LuckiestGuy.variable} ${AlimamaFangYuanTiVF.variable} ${WAGURITTF.variable}`}
    >
      <StyledComponentsRegistry>
        <GlobalStyle />
        <body>
          <ReactQueryProviders>{children}</ReactQueryProviders>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
