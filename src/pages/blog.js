import React, { useState, useEffect } from "react"
import styles from "../css/pages/blog.module.scss"
import { graphql, navigate } from "gatsby"
import moment from "moment"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import { IoMdPricetag } from "react-icons/io"
import { Card } from "../components/Card/Card"
import { FaSearch } from "react-icons/fa"

const heroElement = (
  <Hero
    heading="Blog Posts"
    subText="Browse our collection of blog posts where we talk about web development, design, and user experience best practices and techniques."
  />
)

export default function Blog({ data }) {
  const emptyQuery = ""
  const blogPosts = data.allMdx.nodes
  const [state, setState] = useState({
    filteredData: [...blogPosts],
    query: emptyQuery,
  })

  function handleInputChange(event) {
    const query = event.target.value
    const posts = data.allMdx.nodes

    const filteredData = posts.filter(post => {
      const { title, tags, author } = post.frontmatter
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        // Future use when excerpts are added to frontmatter in posts
        // excerpt.toLowerCase().includes(query.toLowerCase()) ||
        author.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  return (
    <Layout sideNav hero={heroElement}>
      <section className={styles.FilterControls}>
        <div className={styles.FilterControls_search}>
          <FaSearch />
          <input
            type="text"
            placeholder="Search Posts..."
            value={state.query}
            onChange={handleInputChange}
          />
        </div>
      </section>
      <section
        className={styles.Blog_post_wrapper}
        style={{ marginTop: "50px" }}
      >
        {state.filteredData.map(post => {
          return (
            <Card
              key={`post-${post.fields.slug}`}
              onClick={() => navigate(`${post.fields.slug}`)}
              onKeyDown={() => navigate(`${post.fields.slug}`)}
              role="button"
              tabIndex="0"
              className={styles.Post_Card}
            >
              <Card.Content>
                <Card.Title>{post.frontmatter.title}</Card.Title>
                <p className={styles.Excerpt}>{post.excerpt}</p>
              </Card.Content>
              <Card.Footer>
                <div className={styles.Tags}>
                  <IoMdPricetag />{" "}
                  {post.frontmatter.tags.map(tag => {
                    return <span key={tag}>{tag}</span>
                  })}
                </div>
                <p className={styles.Author}>{post.frontmatter.author}</p>
                <span className={styles.small_text}>
                  {`${post.timeToRead} min read`}
                  <span className={styles.Divider}>|</span>
                  {moment(post.frontmatter.date, "YYYY-MM-DD").format("LL")}
                </span>
              </Card.Footer>
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
