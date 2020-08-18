import React from "react"
import styles from "../css/pages/service-webdevelopment.module.scss"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import Aside from "../components/Aside/Aside"
import WhatWeKnow from "../components/WhatWeKnow/WhatWeKnow"

export default function Webdevelopment() {
  const hero = (
    <Hero
      bg="bg_tert"
      size="half"
      heading="Logo Design Services"
      subText="More than just a logo, it's your brand identity"
    />
  )
  return (
    <Layout sideNav hero={hero}>
      <section>
        <Aside>
          A logo is an image that embodies the brand of an organization. It
          needs to be easiy recognizable and usable in any format. Midway Web
          Development has a team of creative graphic designers who will turn
          your vision into a reality.
        </Aside>
      </section>

      <section className={styles.Technologies}>
        <h1>Technologies</h1>
        <WhatWeKnow />
      </section>

      <section className={styles.Content}>
        <h1>About Our Services</h1>
        <div>
          <h2>Professional Design</h2>
          <p>
            Designing a successful logo takes knowledge, experience, talent and
            attention to detail. This includes a deep understanding of color
            schemes and how they stand out out clients psychologically. Our team
            will work closely with you to create a logo that effectively
            communicates your brand identity and messaging to your potential
            clients.
          </p>
        </div>
      </section>

      <section className={styles.Content}>
        <div>
          <h2>Brand Guidelines</h2>
          <p>
            In addition to a unique and scalable logo, we will equip you with
            brand guidelines to ensure consistency in all of your marketing
            efforts. These will include color schemes, fonts, social media
            graphics as well as various file types for your logo to ensure high
            quality across digital and print.
          </p>
        </div>
      </section>
    </Layout>
  )
}
