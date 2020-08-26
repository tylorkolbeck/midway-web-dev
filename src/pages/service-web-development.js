import React from "react"
import styles from "../css/pages/service-web-development.module.scss"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import WhatWeKnow from "../components/WhatWeKnow/WhatWeKnow"

export default function Webdevelopment() {
  const hero = (
    <Hero
      size="half"
      heading="Web Development Services"
      subText="At Midway Web Development we have have a team of proffesionals that
  can provide you with all of the necessary services to get your
  business online."
    />
  )
  return (
    <Layout sideNav hero={hero}>
      <section className={styles.Content}>
        <div>
          <h1>
            Why You Need A Website<span className="blue-dot">.</span>
          </h1>
          <p>
            The easiest way for a company to legitimize themselves and build
            client trust is to have a strong online presence. An online presence
            not only adds value to your company's brand but it also offers an
            opportunity to get your business in front of possible clients. A
            website is made up not only of flashy graphics and colors but of
            thoughtful design and usability. At MWD, we put usability at the
            forefront of everything we do and offer solutions before they become
            problems. When designing your web product, we know that your website
            only adds value to your already worthy product.
          </p>
        </div>
      </section>

      <section className={styles.Content}>
        <h1>What We Care About...</h1>
        <div>
          <h2>
            Responsive Web Design<span className="blue-dot">.</span>
          </h2>
          <p>
            With over half of all web traffic coming from mobile devices it is
            important that your website looks good and performs well across as
            many devices as possible. That's why we develop websites that are
            not only responsive but are performant and reliable.
          </p>
          <p>
            When developing your website we start with mobile layouts. We
            optimize the site At MWD, we put usability at the forefront of
            everything we do and offer solutions before they become problems.
            When designing your web product, we know that your website only adds
            value to your already worthy product.
          </p>
        </div>
      </section>

      <section className={styles.Technologies}>
        <h2>
          Technology<span className="blue-dot">.</span>
        </h2>
        <p>
          When choosing a company to design and build your website you want to
          know what technologies they are using. This matters because you want a
          website that is secure, performant, reliable, and easy to maintain. At
          MWD We use the latest in web development technologies so that you have
          nothing to worry about except running your business. Below are the
          primary technologies that we utilize.
        </p>

        <div style={{ maxWidth: "600px", margin: "50px auto" }}>
          <WhatWeKnow />
        </div>
      </section>

      <section className={styles.Content}>
        <div>
          <h2>
            SEO And Marketing<span className="blue-dot">.</span>
          </h2>
          <p>
            SEO or “Search Engine Optimization” is the practice of increasing
            traffic to your website through search engine results. With quality
            SEO you can expect to attract visitors to your site that are looking
            for your service and potentially converting that user into a future
            client. All of our websites are made with SEO as a top priority.
            Whatever industry you operate in, having a strong search engine
            optimization is paramount to your success in today’s digital age.
          </p>
        </div>
      </section>
      <section className={styles.Content}>
        <div>
          <h2>
            Website Content<span className="blue-dot">.</span>
          </h2>
          <p>
            A website can only be useful if your message is precise. Your site’s
            “Copy” is the backbone of your site and a strong one allows your
            users to navigate throughout your website with ease to find whatever
            information they need. We can not only help you create your message,
            but also deliver it strongly so your users come to understand your
            brand and its voice.
          </p>
        </div>
      </section>
    </Layout>
  )
}
