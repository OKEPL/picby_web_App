import { gql, ReactiveVar } from "@apollo/client";
import { catalogToRemoveIdVar } from "../../../cache";

export default (catalogToRemoveIdVar: ReactiveVar<string | null>) => {
  return (catalogToRemoveId) => {
    catalogToRemoveIdVar(catalogToRemoveId)
  }
}

export const GET_CATALOG_TO_REMOVE_ID = gql`
  query GetCatalogToRemoveId {
    catalogToRemoveId @client
  }
`