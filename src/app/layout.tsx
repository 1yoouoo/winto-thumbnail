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

const WAGURITTF = localFont({
  src: "./fonts/WAGURITTF.woff2",
  display: "swap",
  variable: "--font-waguri-ttf",
});

const JingNanJun = localFont({
  src: "./fonts/JingNanJun.ttf",
  display: "swap",
  variable: "--font-jing-nan-jun",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${LuckiestGuy.variable} ${WAGURITTF.variable} ${JingNanJun.variable}`}
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
