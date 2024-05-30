/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query your data
  const result = await graphql(`
    query {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  // Create pages for each project
  result.data.allProjectsJson.edges.forEach(edge => {
    createPage({
      path: `/projects/${edge.node.slug}`,
      component: path.resolve(`./src/templates/project.jsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables
        slug: edge.node.slug
      },
    });
  });
};
