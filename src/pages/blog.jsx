import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ComingSoonPage from './coming-soon';

const BlogPage = () => {
  return (
    <Layout>
      <ComingSoonPage></ComingSoonPage>
    </Layout>
  );
}

export const Head = () => <Seo title="Blog Posts" />
 
export default BlogPage;