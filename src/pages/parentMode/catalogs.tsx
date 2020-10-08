import {  useReactiveVar } from '@apollo/client';
import { Button, useDisclosure } from '@chakra-ui/core';
import React from 'react'
import {useAddCatalogMutation} from '../../generated/graphql'

import { catalogToRemoveIdVar } from '../../cache';
import { CatalogModal } from '../../components/catalogs/CatalogModal';
import Layout from '../../parentMode/Layout';
import { CatalogsTable } from '../../components/catalogs/CatalogsTable';
import { withApollo } from '../../utils/withApollo';

interface CatalogsProps {
}



const Catalogs: React.FC<CatalogsProps> = ({}) => {
    const {onClose, onOpen, isOpen} = useDisclosure()
    const data = useReactiveVar(catalogToRemoveIdVar)
    const [addCatalog] = useAddCatalogMutation()

    const onAddCatalog = async (catalogName: string) => {
      onClose()
      const data = await addCatalog({variables: {newCatalogData: {
        name: catalogName
      }}})
      console.log(data)
    }
    console.log(data)
    return (
      <Layout>
        Catalogs
        <Button onClick={onOpen}>Add catalog</Button>
        <CatalogModal isOpen={isOpen} onClose={onClose} onAddCatalog={onAddCatalog}/>
        <CatalogsTable />
      </Layout>
    );
}

export default withApollo({ssr: true})(Catalogs);
