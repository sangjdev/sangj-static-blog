import React from 'react';
import Layout from '../components/layout';
import Header from '../components/Header';
import AboutContainer from '../components/AboutContainer';

export default () => (
  <Layout>
    <Header prevBtn={true} />
    <AboutContainer />
  </Layout>
);
