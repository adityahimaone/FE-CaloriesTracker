import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://db-project-fe-adit.hasura.app/v1/graphql",
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret":
      "k5pmmZED8XBn1tp6uRu1GD7NYsKBDHkZOVMRvT2cKh43rMkeh5P9rzmvP7AOKt4r",
  },
});

const wsLink = new WebSocketLink({
  uri: "wss://db-project-fe-adit.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "k5pmmZED8XBn1tp6uRu1GD7NYsKBDHkZOVMRvT2cKh43rMkeh5P9rzmvP7AOKt4r",
      },
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
