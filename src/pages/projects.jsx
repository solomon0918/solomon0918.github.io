import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ComingSoonPage from './coming-soon';

const ProjectsPage = () => {
  return (
    <Layout>
      <ComingSoonPage></ComingSoonPage>
    </Layout>
  );
}

export const Head = () => <Seo title="My Projects" />
 
export default ProjectsPage;