import type { AppProps } from "next/app";
import { ApolloProviderWrapper } from "../providers/apollo-provider";
import "./globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProviderWrapper>
      <Component {...pageProps} />
    </ApolloProviderWrapper>
  );
}
