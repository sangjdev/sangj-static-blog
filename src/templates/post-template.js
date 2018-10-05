import React, { Component } from 'react';
import Layout from '../components/layout';
import Header from '../components/Header';
import PostDetail from '../components/PostTemplateDetail';

class PostTemplate extends Component {
  render() {
    const { data } = this.props;
    console.log('data', data);
    return (
      <Layout>
        <Header prevBtn={true} />
        <PostDetail {...this.props} />
      </Layout>
    );
  }
}

export default PostTemplate;

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        tags
      }
      html
      id
    }
  }
`;
