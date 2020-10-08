import { Button } from '@chakra-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import Layout from '../../../../../parentMode/Layout';
import { withApollo } from '../../../../../utils/withApollo';

interface CatalogProps {

}

const Catalog: React.FC<CatalogProps> = ({}) => {

    return (<Layout> 
      Edit entry 
      <Button leftIcon="add">Add entry</Button>
    </Layout>);
}

export default withApollo({ssr: true})(Catalog);