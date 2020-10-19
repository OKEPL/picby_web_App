import { Box } from '@chakra-ui/core';
import React from 'react'
import { ParentEntry } from '../../components/parentMode/ParentEntry';
import { useEntriesQuery } from '../../generated/graphql';
import Layout from '../../parentMode/Layout'
import { withApollo } from '../../utils/withApollo';

interface ParentModeRootProps {

}

const ParentMode: React.FC<ParentModeRootProps> = ({}) => {
  const {data, loading, error} = useEntriesQuery()

    return (
     <Layout>
       {!loading && data && data.entries && data.entries.length > 0 && 
       <Box flexWrap="wrap" display="flex">
         {data.entries.map(entry => <ParentEntry {...entry} /> )}
       </Box>
       } 
      </Layout>
    );
}

export default withApollo({ssr: true})(ParentMode);