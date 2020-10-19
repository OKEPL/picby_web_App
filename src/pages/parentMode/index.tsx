import React from 'react'
import { useEntriesQuery } from '../../generated/graphql';
import Layout from '../../parentMode/Layout'
import { withApollo } from '../../utils/withApollo';

interface ParentModeRootProps {

}

const ParentMode: React.FC<ParentModeRootProps> = ({}) => {
  const {data, loading, error} = useEntriesQuery()

    return (
     <Layout>
       {!loading && JSON.stringify(data)}
      </Layout>
    );
}

export default withApollo({ssr: true})(ParentMode);