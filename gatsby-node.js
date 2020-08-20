const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const { graphql } = require("gatsby")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blogPost.js")

  return graphql(`
    {
      allMdx {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMdx.nodes

    posts.forEach(post => {
      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
