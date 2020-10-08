import { withApollo as createWithApollo } from "next-apollo";
import { ApolloClient  } from "@apollo/client";
import {cache} from '../cache/'

const createClient = 
  new ApolloClient({
    uri: 'http://localhost:8090/graphql',
    credentials: "include",
    cache
  });

export const withApollo = createWithApollo(createClient);