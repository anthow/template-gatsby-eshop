
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsArticle {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsArticle.edges.map(({ node: product }) => {
        createPage({
          path: `products/${product.slug}`,
          component: path.resolve(`./src/pages/templates/product-page.js`),
          context: {
            slug: product.slug,
          },
        })
      })
      resolve()
    })
  })

}