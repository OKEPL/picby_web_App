import { Button } from '@chakra-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { useEntryQuery } from '../../../../../generated/graphql';
import Layout from '../../../../../parentMode/Layout';
import { withApollo } from '../../../../../utils/withApollo';

interface CatalogProps {

}

const Catalog: React.FC<CatalogProps> = ({}) => {
     const { query: {entryId} } = useRouter()
    const id = entryId as string
    const {data, error, loading} = useEntryQuery({variables: {id}})
    return (<Layout> 
      Edit entry 
      {JSON.stringify(data)}
    </Layout>);
}

export default withApollo({ssr: true})(Catalog);