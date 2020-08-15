import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"

export default function blog({ data }) {
  const blogPosts = data.allMdx.nodes
  return (
    <Layout>
      <Hero heading="Blog Posts" size="quarter" />
      <section>
        {blogPosts.map(post => {
          return (
            <div>
              <h2>{post.frontmatter.title}</h2>
              <span>By: {post.frontmatter.author}</span>
              <p>{moment(post.frontmatter.date, "YYYY-MM-DD").format("L")}</p>
              <span>{`Time to read: ${post.timeToRead} mins`}</span>
              <p>{post.excerpt}</p>
              <Link to={`${post.fields.slug}`}>Read More</Link>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          author
          date(formatString: "")
          title
        }
        excerpt(pruneLength: 150)
        timeToRead
      }
    }
  }
`
