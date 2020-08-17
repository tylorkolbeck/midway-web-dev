import React from "react"
import styles from "../css/layout.module.scss"
import { Link } from "gatsby"
import Head from "../components/Helmet/Helmet"
import "normalize.css"
import Navigation from "./Navigation/Navigation"
import "../css/core.scss"
import Footer from "../components/Footer/Footer"

export default function Layout(props) {
  return (
    <div>
      <Head />
      <Navigation />
      {props.hero}
      <div
        className={[
          styles.Layout_container,
          props.sideNav ? styles.showNav : "",
        ].join(" ")}
      >
        {props.sideNav && (
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
              <li>
                <Link to="/">Post One</Link>
              </li>
              <li>
                <Link to="/">Post Two</Link>
              </li>
              <li>
                <Link to="/">Post Three</Link>
              </li>
              <li>
                <Link to="/">Post Four</Link>
              </li>
            </ul>
          </div>
        )}

        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}
