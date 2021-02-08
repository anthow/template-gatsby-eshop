const { createFilePath } = require('gatsby-source-filesystem')
const path = require(`path`)

// on créé le lien de la nouvelle page produit

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
};
// création de la nouvelle page produit
const createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
    const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
    `)
    if (result.errors) {
      console.error(result.errors)
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `src/pages/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        context: {
          id: node.id
        }
      })
    })
  }
  

  module.exports = {
    onCreateNode,
    createPages
  };

