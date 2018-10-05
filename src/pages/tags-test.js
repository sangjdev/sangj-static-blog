import React from 'react';
import Layout from '../components/layout';
import Header from '../components/Header';
import TagContainer from '../components/TagContainer';

export default () => (
  <Layout>
    <Header prevBtn={true} />
    <TagContainer />
  </Layout>
);
