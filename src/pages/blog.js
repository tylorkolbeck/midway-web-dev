import React from "react"
import styles from "../css/pages/blog.module.scss"
import { Link, graphql, navigate } from "gatsby"
import moment from "moment"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import { IoMdPricetag } from "react-icons/io"

export default function blog({ data }) {
  const blogPosts = data.allMdx.nodes
  return (
    <Layout>
      <Hero
        heading="Blog Posts"
        subText="Browse our collection of blog posts centered around web development, User Experience and Graphic Design."
        size="half"
        bg="bg_tert"
      />
      <section
        className={styles.Blog_post_wrapper}
        style={{ marginTop: "50px" }}
      >
        {blogPosts.map(post => {
          return (
            <div
              className={styles.Post}
              onClick={() => navigate(`${post.fields.slug}`)}
            >
              <h2>{post.frontmatter.title}</h2>
              <p className={styles.Excerpt}>{post.excerpt}</p>
              <div className={styles.Tags}>
                <IoMdPricetag />{" "}
                {post.frontmatter.tags.map(tag => {
                  return <span>{tag}</span>
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
          tags
        }
        excerpt(pruneLength: 100)
        timeToRead
      }
    }
  }
`
