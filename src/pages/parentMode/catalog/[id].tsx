import { Button } from '@chakra-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { useCatalogQuery } from '../../../generated/graphql';
import Layout from '../../../parentMode/Layout';
import { withApollo } from '../../../utils/withApollo';

interface CatalogProps {

}

const Catalog: React.FC<CatalogProps> = ({}) => {
    const { query: {id} } = useRouter()
    const catalogId = id as string;
    console.log(catalogId)
    const {data, loading, error} = useCatalogQuery({variables: {id: catalogId}})
    return (<Layout> 
      Catalog
      <Link href={`/parentMode/catalog/${id}/entry`}>
      <Button leftIcon="add">Add entry</Button></Link>
    </Layout>);
}

export default withApollo({ssr: true})(Catalog);