import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        publications: relayStylePagination(),
      },
    },
  },
});

export const client = new ApolloClient({
  uri: "wp.asocijacijaspektra.org/graphql",
  cache: cache,
});
