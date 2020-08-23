import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
// import calendarIllustration from "../assets/illustration_calendar.svg"
import planning_src from "../assets/planning.svg"

export default function comingSoon() {
  const hero = (
    <Hero
      heading="Coming Soon"
      subText="Please be patient while we update our products page."
      size="half"
    />
  )
  return (
    <div>
      <Layout sideNav hero={hero}>
        <section>
          <h1 className="h1-xl">
            Our Products<span className="blue-dot">.</span>
          </h1>
          <div style={{ textAlign: "center" }}>
            <img height="300px" src={planning_src} alt="Coming Soon" />
          </div>

          <p>
            <b>Please be patient while we update our products page.</b> Once
            complete, you will be able to view Midway Web Development's products
            and projects that we have created.
          </p>
        </section>
      </Layout>
    </div>
  )
}
