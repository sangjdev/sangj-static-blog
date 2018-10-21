import React, { Component } from "react";
import Layout from "../components/layout";
import Header from "../components/Header";
import Post from "../components/Post";
import { connect } from "react-redux";
import "../assets/scss/init.scss";
// export default () => (
//   <Layout>
//     <Header />
//     {/* <div className="content">
//       달의 앞면은 그림자에
//       <br />
//       가려져 있었다.
//       <p>
//         <Link to="/about">about > </Link>
//       </p>
//     </div> */}
//   </Layout>
// );

class index extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Header />
        <Post {...this.props} />
      </Layout>
    );
  }
}

export const IndexQuery = graphql`
  query IndexBySlug {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            tags
            description
          }
        }
      }
    }
  }
`;

index = connect(state => ({
  visible: state.base.visible
}))(index);

export default index;
