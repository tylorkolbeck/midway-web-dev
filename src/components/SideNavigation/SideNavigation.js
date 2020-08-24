import React from "react"
import styles from "./SideNavigation.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
import Button from "../Button/Button"

const queryRecentPosts = graphql`
  query GET_RECENT_POSTS {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 10
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          title
        }
        slug
      }
    }
  }
`
function SideNavigation() {
  const {
    allMdx: { nodes: posts },
  } = useStaticQuery(queryRecentPosts)
  return (
    <div className={styles.SideNavigation}>
      <ul>
        <li className={styles.Navigation_header}>
          <h4>Navigation</h4>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/comingSoon">Products</Link>
        </li>

        <li className={styles.Navigation_header}>
          <h4>Services</h4>
        </li>
        <li>
          <Link to="/service-web-development">Web Development</Link>
        </li>
        <li>
          <Link to="/service-webapplications">Web Applications</Link>
        </li>
        <li>
          <Link to="/service-ux">UX/UI Services</Link>
        </li>
        <li className={styles.Navigation_header}>
          <h4>Recent Posts</h4>
        </li>

        {posts.map(post => {
          return (
            <li key={post.slug}>
              <Link to={`/${post.slug}`} id={post.slug}>
                {post.frontmatter.title}
              </Link>
            </li>
          )
        })}
        <li style={{ paddingTop: "20px" }}>
          <Button to="/blog">View All</Button>
        </li>
      </ul>
    </div>
  )
}

export default SideNavigation
