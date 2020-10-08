import { InMemoryCache, makeVar, ReactiveVar } from "@apollo/client";

export const catalogToRemoveIdVar: ReactiveVar<string | null> = makeVar<string | null>(
  null
)


export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        catalogToRemoveId: {
          read() {
            return catalogToRemoveIdVar()
          }
        }
      }
    }
  }
})