import React from "react"
import styles from "../css/pages/service-webdevelopment.module.scss"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import { Card } from "../components/Card/Card"
import userInterface from "../assets/user_interface.svg"
import Aside from "../components/Aside/Aside"
import WhatWeKnow from "../components/WhatWeKnow/WhatWeKnow"

export default function Webdevelopment() {
  return (
    <Layout>
      <Hero
        bg="bg_tert"
        size="half"
        heading="Web Development Services"
        subText="At Midway Web Development we have have a team of proffesionals that
        can provide you with all of the necessary services to get your
        business online."
      />
      <section className={styles.Technologies}>
        <h1>Technologies</h1>
        <p>
          These are just some of the technologies that we specialize in and use
          to build your website.
        </p>
        <WhatWeKnow />
      </section>
      <section className={styles.Content}>
        {/* <Aside>
          We believe that getting your website up and running should be an
          enjoyable process because it will define who you are on the web.{" "}
        </Aside> */}
        <h1>About Our Services</h1>
        <div>
          <h2>Qualility Online Presence</h2>
          <p>
            The easiest way for a company to legitimize themselves and build
            client trust is to have a strong internet presence. An online
            presence not only adds value to your companies brand but it also
            offers an opportunity get your business in front of possible
            clients. A website not only consist of having flashy graphics and
            colors, but of thoughtful design and usability. At MWD we take
            usability very seriously. If you have a product it will not be worth
            a penny if it is not usable.
          </p>
        </div>
      </section>

      <section className={styles.Content}>
        <div>
          <h2>Responsive Web Design</h2>
          <p>
            With over half of all web traffic coming from a mobile device it is
            important that your website looks good and performs well across as
            many devices sizes as possible. Thats why at MWD we develop websites
            that are responsive and performant by using the latest in modern web
            technologies.
          </p>
          <p>
            We first design your website with the mobile user in mind by
            optimizing media to be delivered on slow speed connections as well
            ensuring the layout works for a smaller device. We then design out
            your desktop sized site taking advantage of the extra screen real
            estate and connection performance to really wow your audience.
          </p>
        </div>
      </section>

      {/* <Hero
        bg="bg_tert"
        size="quarter"
        heading="50% of web traffic is from a mobile device. "
      /> */}

      <section className={styles.Content}>
        <div>
          <h2>SEO And Marketing</h2>
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
          <h2>Website Content</h2>
          <p>
            A website is not useful if it does not provide the right message.
            Your site “copy” is the content that delivers your message and
            guides people through your website to convey information and deliver
            your message. At MWD we help you to create your message so that your
            can convert visitors into paying clients.
          </p>
        </div>
      </section>
    </Layout>
  )
}
