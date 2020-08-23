import React from "react"
import styles from "../css/pages/blog.module.scss"
import { graphql, navigate } from "gatsby"
import moment from "moment"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import { IoMdPricetag } from "react-icons/io"
import { Card } from "../components/Card/Card"

export default function blog({ data }) {
  const heroElement = (
    <Hero
      heading="Blog Posts"
      subText="Browse our collection of blog posts where we talk about web development, design, and user experience best practices and techniques."
      size="half"
    />
  )
  const blogPosts = data.allMdx.nodes
  return (
    <Layout sideNav hero={heroElement}>
      <section
        className={styles.Blog_post_wrapper}
        style={{ marginTop: "50px" }}
      >
        {blogPosts.map(post => {
          return (
            <Card>
              <div
                className={styles.Post}
                onClick={() => navigate(`${post.fields.slug}`)}
                onKeyDown={() => navigate(`${post.fields.slug}`)}
                role="button"
                tabIndex="0"
                key={post.fields.slug}
              >
                <h2>{post.frontmatter.title}</h2>
                <p className={styles.Excerpt}>{post.excerpt}</p>
                <div className={styles.Tags}>
                  <IoMdPricetag />{" "}
                  {post.frontmatter.tags.map(tag => {
                    return <span key={tag}>{tag}</span>
                  })}
                </div>

                <footer>
                  <p className={styles.Author}>{post.frontmatter.author}</p>
                  <span>
                    {`${post.timeToRead} min read`}
                    <span className={styles.Divider}>|</span>
                    {moment(post.frontmatter.date, "YYYY-MM-DD").format("LL")}
                  </span>
                </footer>
              </div>
            </Card>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          author
          date
          title
          tags
        }
        excerpt(pruneLength: 100)
        timeToRead
      }
    }
  }
`
