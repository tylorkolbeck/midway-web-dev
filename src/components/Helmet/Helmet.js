import React from "react"
import Helmet from "react-helmet"
import metaImage from "../../../static/homepage.png"

export default function Head() {
  return (
    <Helmet>
      <title>Midway Web Development</title>
      <meta name="title" content="Midway Web Development" />
      <meta
        name="description"
        content="Midway Web Development provides modern and efficient web, UI/UX, and design services."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Midway Web Development" />
      <meta
        property="og:description"
        content="Midway Web Development provides modern and efficient web, UI/UX, and design services."
      />
      <meta property="og:image" content={metaImage} />
      {/* 
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="Midway Web Development" /> */}
      {/* <meta
        property="twitter:description"
        content="Midway Web Development is a team of web developers that are here to get your business on line, whether its a company website or a web application, we can make it happen."
      /> */}
      <meta
        property="twitter:image"
        content="../../assets/meta_image.png"
      ></meta>
    </Helmet>
  )
}
