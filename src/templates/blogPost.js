import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
// import Aside from "../components/Aside/Aside"

export default function blogPost({ data }) {
  const { frontmatter, body } = data.mdx

  const hero = <Hero heading={frontmatter.title} size="quarter" />

  return (
    <Layout hero={hero} sideNav>
      <section>
        <MDXRenderer>{body}</MDXRenderer>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`
