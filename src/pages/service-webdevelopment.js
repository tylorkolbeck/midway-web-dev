import React from "react"
import styles from "../css/pages/service-webdevelopment.module.scss"
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
        {/* <Aside>
          We believe that getting your website up and running should be an
          enjoyable process because it will define who you are on the web.{" "}
        </Aside> */}

        <div>
          <h1>
            Why You Need A Website<span className="blue-dot">.</span>
          </h1>
          <p>
            The easiest way for a company to legitimize themselves and build
            client trust is to have a strong internet presence. An online
            presence not only adds value to your company's brand but it also
            offers an opportunity get your business in front of possible
            clients. A website is not only made up of flashy graphics and
            colors, but of thoughtful design and usability. At MWD we put
            usability at the forefront when designing your web product beacuse,
            if you have a product it is only worth something if its usable.
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
            With over half of all web traffic coming from a mobile device it is
            important that your website looks good and performs well across as
            many devices sizes as possible. Thats why at MWD we develop websites
            that are responsive and performant.
          </p>
          <p>
            When developing your website we start with mobile layouts. We
            optimize the site to so that media can be quickly delivered on slow
            speed connections and that the site looks good from the smallest
            phone up to a device the size of a TV.
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
          website that is secure, performant, reliable and easy to maintain. At
          MWD We use the latest in web development technologies so that you have
          nothing to worry about except running your business. Below is a list
          of a hand full of the main technologies that we.
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
            client. All of our websites are made with SEO as a top priority,
            there is no point in having a website if people can not find it
          </p>
        </div>
      </section>
      <section className={styles.Content}>
        <div>
          <h2>
            Website Content<span className="blue-dot">.</span>
          </h2>
          <p>
            A website is not useful if it does not provide the right message.
            Your site “copy” is the content that delivers your message and
            guides people through your website to convey information and deliver
            your message. At MWD we help you to create your message so your
            visitors can find what they came looking for.
          </p>
        </div>
      </section>
    </Layout>
  )
}
