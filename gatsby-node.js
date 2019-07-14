const path = require('path');
const template = path.resolve(__dirname, 'src', 'templates', 'blog-template.jsx');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: edge.node.frontmatter.path,
      component: template,
      context: {
        id: edge.node.id
      }
    });
  });
};
