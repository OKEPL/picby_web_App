import { withApollo as createWithApollo } from "next-apollo";
import { ApolloClient, ApolloLink, HttpLink  } from "@apollo/client";
import {cache} from '../cache/'
import { createUploadLink } from "apollo-upload-client";

const uploadLink = createUploadLink({uri: 'http://localhost:8090/graphql', credentials: 'include'})

const createClient = 
  new ApolloClient({
    link: uploadLink,
    cache
  });

export const withApollo = createWithApollo(createClient);