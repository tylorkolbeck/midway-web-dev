import React from "react"
import "normalize.css"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import Navigation from "./Navigation/Navigation"
import "../css/core.scss"
import Footer from "../components/Footer/Footer"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

{
  /* <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div> */
}
