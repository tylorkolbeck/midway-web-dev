import React from "react"
import styles from "./SideNavigation.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"

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
  console.log(posts)
  return (
    <div className={styles.SideNavigation}>
      <ul>
        <li className={styles.Navigation_header}>Navigation</li>
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
          <Link to="/">Products</Link>
        </li>

        <li className={styles.Navigation_header}>Our Services</li>
        <li>
          <Link to="/">Webdesign</Link>
        </li>
        <li>
          <Link to="/">Web Applications</Link>
        </li>
        <li>
          <Link to="/">Design</Link>
        </li>
        <li>
          <Link to="/">UX</Link>
        </li>
        <li className={styles.Navigation_header}>Blog Posts</li>
        <li>
          <Link to="/blog">View All</Link>
        </li>

        {posts.map(post => {
          return (
            <li>
              <Link to={`../${post.slug}`}>{post.frontmatter.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideNavigation
