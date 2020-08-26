import React from "react"
import "../css/templates/BlogPost.scss"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import PostHeader from "../components/PostHeader/PostHeader"
import { FaArrowLeft } from "react-icons/fa"

export default function blogPost({ data }) {
  const { frontmatter, body, timeToRead, excerpt } = data.mdx
  const avatar = data.contentfulResume.avatarImage.fluid.src

  const hero = <Hero heading={frontmatter.title} size="quarter" />

  return (
    <Layout hero={hero} sideNav>
      <section>
        <PostHeader
          author={frontmatter.author}
          timeToRead={timeToRead}
          tags={frontmatter.tags}
          date={frontmatter.date}
          avatar={avatar}
        />
        <Link to="/blog" style={{ marginTop: "25px" }}>
          <FaArrowLeft style={{ marginRight: "8px" }} />
          Back
        </Link>
        <h1>{frontmatter.title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
        <Link to="/blog" style={{ marginTop: "25px" }}>
          <FaArrowLeft style={{ marginRight: "8px" }} />
          Back
        </Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!, $author: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        author
        tags
        title
        date(formatString: "YYYY MMMM Do")
      }
      timeToRead
    }
    contentfulResume(name: { eq: $author }) {
      avatarImage {
        fluid {
          src
        }
      }
    }
  }
`
