import React from 'react';
import Portfolio from '../components/portfolio/portfolio';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout name="prototypes" hasHomeLink={false}>
      <Portfolio />
    </Layout>
  );
};

export default IndexPage;
