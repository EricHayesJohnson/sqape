import React from 'react';
import Layout from '../components/layout';
import IphoneShell from '../components/shells/IphoneShell';
import Inner from '../components/inner/inner';

const InnerApp = () => {
  return (
    <Layout name="inner" hasHomeLink={true}>
      <IphoneShell>
        <Inner />
      </IphoneShell>
    </Layout>
  );
};

export default InnerApp;
