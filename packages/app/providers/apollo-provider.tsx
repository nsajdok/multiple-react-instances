"use client";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  uri: "https://example.com/graphql",
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://example.com/graphql",
    credentials: "same-origin",
  }),
});

export function ApolloProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
