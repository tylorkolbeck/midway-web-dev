require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Midway Web Development",
    siteUrl: "https://trusting-hugle-177a1a.netlify.app/",
    titleTemplate: "%s · Innovative Web And Design Services",
    description:
      "Midway Web Development provides modern and efficient web and design services.",
    image: "/images/homepage.png",
    author: "Midway Web Development - Tylor Kolbeck - John Kaplanis",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-remark-images`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-176398512-1",
    //   },
    // },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-176398512-1",
          // Setting this parameter is optional
          anonymize: true,
        },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        // },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              withWebp: true,
            },
          },
        ],
        extensions: [`.mdx`, `.md`],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/blogposts`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://trusting-hugle-177a1a.netlify.app",
        sitemap: "https://trusting-hugle-177a1a.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
  ],
}
