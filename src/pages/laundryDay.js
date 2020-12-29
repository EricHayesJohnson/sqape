import React from 'react';
import Layout from '../components/layout';
import Laundry from '../components/laundry/laundry';

const LaundryDay = () => {
  return (
    <Layout name="laundry day" hasHomeLink={true}>
      <Laundry />
    </Layout>
  );
};

export default LaundryDay;
