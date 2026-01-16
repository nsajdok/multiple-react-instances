import type { Metadata } from "next";
import { ApolloProviderWrapper } from "../providers/apollo-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Turbopack Deduplication Test",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApolloProviderWrapper>{children}</ApolloProviderWrapper>
      </body>
    </html>
  );
}
