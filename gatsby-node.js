/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path');

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   // Query your data
//   const result = await graphql(`
//     query {
//       allProjectsJson {
//         nodes {
//           slug
//         }
//       }
//     }
//   `);

//   // Create pages for each project
//   result.data.allProjectsJson.nodes.forEach(({ slug }) => {
//     createPage({
//       path: `/projects/${slug}`,
//       component: path.resolve(`./src/templates/project.js`),
//       context: {
//         // Data passed to context is available in page queries as GraphQL variables
//         slug,
//       },
//     });
//   });
// };
