const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
// const { graphql } = require("gatsby")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("./src/templates/blogPost.js")
  const resumeTemplate = path.resolve("./src/templates/resume.js")

  return graphql(`
    {
      blogs: allMdx {
        nodes {
          fields {
            slug
          }
        }
      }
      resumes: allContentfulResume {
        nodes {
          slug
          internal {
            type
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.blogs.nodes
    const resumes = result.data.resumes.nodes

    posts.forEach(post => {
      if (post.fields) {
        createPage({
          path: post.fields.slug,
          component: blogPostTemplate,
          context: {
            slug: post.fields.slug,
          },
        })
      }
    })
    // TODO: create resume pages here
    resumes.forEach(resume => {
      if (resume.slug) {
        createPage({
          path: resume.slug,
          component: resumeTemplate,
          context: {
            slug: resume.slug,
          },
        })
      }
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

// resumes: allContentfulResume {
//   nodes {
//     slug
//     internal {
//       type
//     }
//   }
// }
