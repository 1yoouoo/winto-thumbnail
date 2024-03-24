"use client";

import { GlobalStyle } from "@/style/GlobalStyle";
import StyledComponentsRegistry from "./lib/registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <body>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
