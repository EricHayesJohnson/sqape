import React from 'react';
import Layout from '../components/layout';
import Timer from '../components/timer/timer';

const KitchenTimer = () => {
  return (
    <Layout name="kitchen timer" hasHomeLink={true}>
      <Timer />
    </Layout>
  );
};

export default KitchenTimer;
