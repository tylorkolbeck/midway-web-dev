import React from "react"
import styles from "../css/pages/service-web-development.module.scss"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import Aside from "../components/Aside/Aside"

export default function UxService() {
  const hero = (
    <Hero
      size="half"
      heading="UI/UX Design Solutions"
      subText="The Midway Web Development team creates products and experiences that are made for the user."
    />
  )

  return (
    <Layout sideNav hero={hero}>
      <section>
        <Aside>
          The goal of UX design in business is to “improve customer satisfaction
          and loyalty through the utility, ease of use, and pleasure provided in
          the interaction with a product.”{" "}
          <span style={{ fontSize: "14px" }}>
            -Oxford Journal Interacting With Computers
          </span>
        </Aside>
      </section>

      <section className={styles.Content}>
        <div>
          <h2>What is UX Design Research?</h2>
          <p>
            UX (user experience) research is the systematic study of target
            users and their requirements, to add realistic contexts as well as
            insights to design processes. This process can be divided into two
            approaches: Attitudinal and Behavioral. UX researchers often adopt
            various methods to uncover problems, discover usability issues and
            find potential design opportunities. Doing so, they reveal valuable
            information which can be fed into the design process.
          </p>

          <h2>How do we help?</h2>
          <p>
            One of the keys to being proactive in your users experience is to
            perform UX Research. Here at Midway Web Development, we will help
            you discover exactly what your users need all while providing you
            with clear data regarding it. We offer in-depth Quantitative and
            Qualitative Research to ensure you stay ahead of design problems.
          </p>

          <h2>What do we do?</h2>
          <p>
            We offer your company a clear picture of target users data and help
            you in identifying possible design opportunities. You can perform UX
            research at any stage of the development process and we take pride
            in aiding you in gathering the most useful insights to optimize your
            users experience.
          </p>
        </div>
      </section>
    </Layout>
  )
}
