import * as ApolloReactHooks from "@apollo/client/react";
import { gql } from "@apollo/client/core";
import { createContext, useContext } from "react";

const TestContext = createContext<string>("default");

export function useSharedQuery() {
  const context = useContext(TestContext);

  const [lazyQuery] = ApolloReactHooks.useLazyQuery(gql`
    query TestQuery {
      test
    }
  `);

  return { context, lazyQuery };
}
