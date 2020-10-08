import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  catalogs: Array<Catalog>;
  catalog: Catalog;
  entries: Array<Entry>;
  me?: Maybe<User>;
  hello: Scalars['String'];
};


export type QueryCatalogArgs = {
  id: Scalars['String'];
};

export type Catalog = {
  __typename?: 'Catalog';
  id: Scalars['ID'];
  name: Scalars['String'];
  entryCount: Scalars['Int'];
  entries: Array<Entry>;
};

export type Entry = {
  __typename?: 'Entry';
  id: Scalars['ID'];
  desc: Scalars['String'];
  imageUrl: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  catalogs?: Maybe<Array<Catalog>>;
  entries?: Maybe<Array<Entry>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCatalog?: Maybe<Catalog>;
  removeCatalog: Scalars['Boolean'];
  updateCatalog: Catalog;
  addEntry: Scalars['Boolean'];
  removeEntry: Entry;
  updateEntry: Entry;
  changePassword?: Maybe<User>;
  confirmUser: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login: AuthorizationResponse;
  logout: Scalars['Boolean'];
  register: AuthorizationResponse;
};


export type MutationAddCatalogArgs = {
  newCatalogData: CreateCatalogInput;
};


export type MutationRemoveCatalogArgs = {
  id: Scalars['String'];
};


export type MutationUpdateCatalogArgs = {
  data: UpdateCatalogInput;
};


export type MutationAddEntryArgs = {
  catalogId?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  photo: Scalars['Upload'];
};


export type MutationRemoveEntryArgs = {
  catalogId: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdateEntryArgs = {
  photo?: Maybe<Scalars['Upload']>;
  data: UpdateEntryInput;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationConfirmUserArgs = {
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  data: AuthorizationInput;
};


export type MutationRegisterArgs = {
  data: AuthorizationInput;
};

export type CreateCatalogInput = {
  name: Scalars['String'];
};

export type UpdateCatalogInput = {
  name: Scalars['String'];
  id: Scalars['String'];
};


export type UpdateEntryInput = {
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  currentCatalogId?: Maybe<Scalars['String']>;
  newCatalogId?: Maybe<Scalars['String']>;
};

export type ChangePasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type AuthorizationResponse = {
  __typename?: 'AuthorizationResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type AuthorizationInput = {
  password: Scalars['String'];
  email: Scalars['String'];
};

export type AddCatalogMutationVariables = Exact<{
  newCatalogData: CreateCatalogInput;
}>;


export type AddCatalogMutation = (
  { __typename?: 'Mutation' }
  & { addCatalog?: Maybe<(
    { __typename?: 'Catalog' }
    & Pick<Catalog, 'id' | 'name'>
  )> }
);

export type ConfirmUserMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ConfirmUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'confirmUser'>
);

export type AddEntryMutationVariables = Exact<{
  catalogId: Scalars['String'];
  description: Scalars['String'];
  photo: Scalars['Upload'];
}>;


export type AddEntryMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addEntry'>
);

export type LoginMutationVariables = Exact<{
  data: AuthorizationInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthorizationResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    )> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  data: AuthorizationInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'AuthorizationResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    )> }
  ) }
);

export type CatalogQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type CatalogQuery = (
  { __typename?: 'Query' }
  & { catalog: (
    { __typename?: 'Catalog' }
    & Pick<Catalog, 'id' | 'name' | 'entryCount'>
    & { entries: Array<(
      { __typename?: 'Entry' }
      & Pick<Entry, 'id' | 'imageUrl'>
    )> }
  ) }
);

export type CatalogsQueryVariables = Exact<{ [key: string]: never; }>;


export type CatalogsQuery = (
  { __typename?: 'Query' }
  & { catalogs: Array<(
    { __typename?: 'Catalog' }
    & Pick<Catalog, 'id' | 'name' | 'entryCount'>
  )> }
);

export type EntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type EntriesQuery = (
  { __typename?: 'Query' }
  & { entries: Array<(
    { __typename?: 'Entry' }
    & Pick<Entry, 'id' | 'desc' | 'imageUrl'>
  )> }
);


export const AddCatalogDocument = gql`
    mutation AddCatalog($newCatalogData: CreateCatalogInput!) {
  addCatalog(newCatalogData: $newCatalogData) {
    id
    name
  }
}
    `;
export type AddCatalogMutationFn = Apollo.MutationFunction<AddCatalogMutation, AddCatalogMutationVariables>;

/**
 * __useAddCatalogMutation__
 *
 * To run a mutation, you first call `useAddCatalogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCatalogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCatalogMutation, { data, loading, error }] = useAddCatalogMutation({
 *   variables: {
 *      newCatalogData: // value for 'newCatalogData'
 *   },
 * });
 */
export function useAddCatalogMutation(baseOptions?: Apollo.MutationHookOptions<AddCatalogMutation, AddCatalogMutationVariables>) {
        return Apollo.useMutation<AddCatalogMutation, AddCatalogMutationVariables>(AddCatalogDocument, baseOptions);
      }
export type AddCatalogMutationHookResult = ReturnType<typeof useAddCatalogMutation>;
export type AddCatalogMutationResult = Apollo.MutationResult<AddCatalogMutation>;
export type AddCatalogMutationOptions = Apollo.BaseMutationOptions<AddCatalogMutation, AddCatalogMutationVariables>;
export const ConfirmUserDocument = gql`
    mutation ConfirmUser($token: String!) {
  confirmUser(token: $token)
}
    `;
export type ConfirmUserMutationFn = Apollo.MutationFunction<ConfirmUserMutation, ConfirmUserMutationVariables>;

/**
 * __useConfirmUserMutation__
 *
 * To run a mutation, you first call `useConfirmUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmUserMutation, { data, loading, error }] = useConfirmUserMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmUserMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmUserMutation, ConfirmUserMutationVariables>) {
        return Apollo.useMutation<ConfirmUserMutation, ConfirmUserMutationVariables>(ConfirmUserDocument, baseOptions);
      }
export type ConfirmUserMutationHookResult = ReturnType<typeof useConfirmUserMutation>;
export type ConfirmUserMutationResult = Apollo.MutationResult<ConfirmUserMutation>;
export type ConfirmUserMutationOptions = Apollo.BaseMutationOptions<ConfirmUserMutation, ConfirmUserMutationVariables>;
export const AddEntryDocument = gql`
    mutation AddEntry($catalogId: String!, $description: String!, $photo: Upload!) {
  addEntry(catalogId: $catalogId, description: $description, photo: $photo)
}
    `;
export type AddEntryMutationFn = Apollo.MutationFunction<AddEntryMutation, AddEntryMutationVariables>;

/**
 * __useAddEntryMutation__
 *
 * To run a mutation, you first call `useAddEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEntryMutation, { data, loading, error }] = useAddEntryMutation({
 *   variables: {
 *      catalogId: // value for 'catalogId'
 *      description: // value for 'description'
 *      photo: // value for 'photo'
 *   },
 * });
 */
export function useAddEntryMutation(baseOptions?: Apollo.MutationHookOptions<AddEntryMutation, AddEntryMutationVariables>) {
        return Apollo.useMutation<AddEntryMutation, AddEntryMutationVariables>(AddEntryDocument, baseOptions);
      }
export type AddEntryMutationHookResult = ReturnType<typeof useAddEntryMutation>;
export type AddEntryMutationResult = Apollo.MutationResult<AddEntryMutation>;
export type AddEntryMutationOptions = Apollo.BaseMutationOptions<AddEntryMutation, AddEntryMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: AuthorizationInput!) {
  login(data: $data) {
    errors {
      field
      message
    }
    user {
      id
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: AuthorizationInput!) {
  register(data: $data) {
    errors {
      field
      message
    }
    user {
      id
      email
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CatalogDocument = gql`
    query Catalog($id: String!) {
  catalog(id: $id) {
    id
    name
    entryCount
    entries {
      id
      imageUrl
    }
  }
}
    `;

/**
 * __useCatalogQuery__
 *
 * To run a query within a React component, call `useCatalogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCatalogQuery(baseOptions?: Apollo.QueryHookOptions<CatalogQuery, CatalogQueryVariables>) {
        return Apollo.useQuery<CatalogQuery, CatalogQueryVariables>(CatalogDocument, baseOptions);
      }
export function useCatalogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatalogQuery, CatalogQueryVariables>) {
          return Apollo.useLazyQuery<CatalogQuery, CatalogQueryVariables>(CatalogDocument, baseOptions);
        }
export type CatalogQueryHookResult = ReturnType<typeof useCatalogQuery>;
export type CatalogLazyQueryHookResult = ReturnType<typeof useCatalogLazyQuery>;
export type CatalogQueryResult = Apollo.QueryResult<CatalogQuery, CatalogQueryVariables>;
export const CatalogsDocument = gql`
    query Catalogs {
  catalogs {
    id
    name
    entryCount
  }
}
    `;

/**
 * __useCatalogsQuery__
 *
 * To run a query within a React component, call `useCatalogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCatalogsQuery(baseOptions?: Apollo.QueryHookOptions<CatalogsQuery, CatalogsQueryVariables>) {
        return Apollo.useQuery<CatalogsQuery, CatalogsQueryVariables>(CatalogsDocument, baseOptions);
      }
export function useCatalogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatalogsQuery, CatalogsQueryVariables>) {
          return Apollo.useLazyQuery<CatalogsQuery, CatalogsQueryVariables>(CatalogsDocument, baseOptions);
        }
export type CatalogsQueryHookResult = ReturnType<typeof useCatalogsQuery>;
export type CatalogsLazyQueryHookResult = ReturnType<typeof useCatalogsLazyQuery>;
export type CatalogsQueryResult = Apollo.QueryResult<CatalogsQuery, CatalogsQueryVariables>;
export const EntriesDocument = gql`
    query Entries {
  entries {
    id
    desc
    imageUrl
  }
}
    `;

/**
 * __useEntriesQuery__
 *
 * To run a query within a React component, call `useEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEntriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useEntriesQuery(baseOptions?: Apollo.QueryHookOptions<EntriesQuery, EntriesQueryVariables>) {
        return Apollo.useQuery<EntriesQuery, EntriesQueryVariables>(EntriesDocument, baseOptions);
      }
export function useEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EntriesQuery, EntriesQueryVariables>) {
          return Apollo.useLazyQuery<EntriesQuery, EntriesQueryVariables>(EntriesDocument, baseOptions);
        }
export type EntriesQueryHookResult = ReturnType<typeof useEntriesQuery>;
export type EntriesLazyQueryHookResult = ReturnType<typeof useEntriesLazyQuery>;
export type EntriesQueryResult = Apollo.QueryResult<EntriesQuery, EntriesQueryVariables>;