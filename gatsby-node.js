const {
  createFilePath,
} = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    const slug = node.frontmatter.path;
    createNodeField({
      name: 'slug',
      node,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(
        ({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(
              `./src/templates/post-template.js`,
            ),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          });
        },
      );
      resolve();
    });
  });
};
