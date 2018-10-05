import React, { Component } from 'react';
import Layout from '../components/layout';
import Header from '../components/Header';
import TagListContainer from '../components/TagListContainer';

class tags extends Component {
  render() {
    return (
      <Layout>
        <Header prevBtn={true} />
        <TagListContainer {...this.props} />
      </Layout>
    );
  }
}

export default tags;

export const TagQuery = graphql`
  query TagBySlug {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            tags
          }
        }
      }
    }
  }
`;
