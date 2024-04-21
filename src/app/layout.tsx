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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={LuckiestGuy.variable}>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <body>
          <ReactQueryProviders>{children}</ReactQueryProviders>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
