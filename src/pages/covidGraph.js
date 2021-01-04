import React from 'react';
import Layout from '../components/layout';
import LineChart from '../components/covid/covidGraph';

const CovidGraph = () => {
  return (
    <Layout name="covid graph" hasHomeLink={true}>
      <LineChart />
    </Layout>
  );
};

export default CovidGraph;
