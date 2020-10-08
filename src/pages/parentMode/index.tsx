import React from 'react'
import Layout from '../../parentMode/Layout'
import { withApollo } from '../../utils/withApollo';

interface ParentModeRootProps {

}

const ParentMode: React.FC<ParentModeRootProps> = ({}) => {
    return (
     <Layout>
      </Layout>
    );
}

export default withApollo({ssr: true})(ParentMode);