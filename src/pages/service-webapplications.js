import React from "react"
import styles from "../css/pages/service-web-development.module.scss"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import WhatWeKnow from "../components/WhatWeKnow/WhatWeKnow"
import Aside from "../components/Aside/Aside"

export default function Webdevelopment() {
  const hero = (
    <Hero
      size="half"
      heading="Web Application Services"
      subText="At Midway Web Development we have extensive experience building both internal and customer facing web applications."
    />
  )
  return (
    <Layout sideNav hero={hero}>
      <section className={styles.Technologies}>
        <Aside>
          A web application is a software or program which is accessible using
          any web browser. Its frontend is usually created using languages like
          HTML, CSS, Javascript, which are supported by major browsers.
          <span>- guru99.com</span>
        </Aside>
      </section>

      <section className={styles.Content}>
        <h1>
          Our Web Application Services<span className="blue-dot">.</span>
        </h1>
        <div>
          <h2>Quality and Reliability</h2>
          <p>
            At Midway Web Development we take pride in the quality of our work.
            Every app we build utliizes the latest technologies and libraries to
            ensure your app remains performant and bug free. The experience will
            be seamless and intuitive as your users navigate the features of
            your app.
          </p>
        </div>
      </section>

      <section className={styles.Content}>
        <div>
          <h2>Mobile First Design</h2>
          <p>
            With mobile conversion rates on the rise and the fact that Google
            ranks for mobile-friendliness, it only makes sense to keep this in
            mind when developing your application. By designing your app, with
            mobile optimization in mind, we help you create a foundation that
            will strengthen your designs for everything from mobile to desktop
            and beyond.
          </p>
        </div>
      </section>

      <section className={styles.Content}>
        <div>
          <h2>Progressive Web Apps</h2>
          <p>
            Progressive Web Apps are web applications that load like regular web
            pages or websites, but can offer the user functionality such as
            working offline and device hardware access traditionally only
            available to native mobile apps. Progressive Web Apps are built and
            enhanced with modern APIs to deliver native-like capabilities,
            reliability, and installability while reaching any device with a
            single codebase.
          </p>
          <p>
            Companies who have launched Progressive Web Apps have seen
            significant improvements. Twitter saw a 65% increase in pages per
            session and Hulu saw a 27% increase in return visits!
          </p>
        </div>
        <h1>
          Technologies<span className="blue-dot">.</span>
        </h1>
        <p>
          These are just some of the technologies that we specialize in and use
          to build your web application.
        </p>
        <div style={{ maxWidth: "600px", margin: "50px auto" }}>
          <WhatWeKnow />
        </div>
      </section>
    </Layout>
  )
}
