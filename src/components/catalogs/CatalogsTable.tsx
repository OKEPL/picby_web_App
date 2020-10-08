import { Box } from '@chakra-ui/core'
import Link from 'next/link'
import React from 'react'
import { useCatalogsQuery } from '../../generated/graphql'


interface CatalogsTableProps {

}

export const CatalogsTable: React.FC<CatalogsTableProps> = ({}) => {
    const {data, loading, error} = useCatalogsQuery()
    if(loading) {
        return null
    }
    return (
        <Box>
            {data.catalogs.map((catalog) => ( 
                <Link key={catalog.id} href={`catalog/${catalog.id}`}>
                <Box >
                    {catalog.name}
                </Box>
                </Link>
            ))}
        </Box>
    );
}