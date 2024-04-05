"use client";

import { GlobalStyle } from "@/style/GlobalStyle";
import StyledComponentsRegistry from "./lib/registry";
import ReactQueryProviders from "./hooks/useReactQuery";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <body>
          <ReactQueryProviders>{children}</ReactQueryProviders>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
