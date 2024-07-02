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
  uri: "http://localhost/spektra/graphql",
  cache: cache,
});
