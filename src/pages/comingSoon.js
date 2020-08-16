import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import calendarIllustration from "../assets/illustration_calendar.svg"

export default function comingSoon() {
  return (
    <div>
      <Layout>
        <Hero
          heading="Coming Soon"
          subText="Please be patient while we update our products page."
          size="quarter"
        />
        <section>
          <div style={{ textAlign: "center" }}>
            <img height="300px" src={calendarIllustration} alt="Coming Soon" />
          </div>
          <h1>Our Products</h1>
          <p>
            Please be patient while we update our products page. Once complete,
            you will be able to view Midway Web Development's products and
            projects that we have created.
          </p>
        </section>
      </Layout>
    </div>
  )
}
