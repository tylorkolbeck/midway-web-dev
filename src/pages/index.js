import React, { useEffect } from "react"
import styles from "../css/pages/index.module.scss"
import { Link, navigate } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import cloud_computing from "../assets/cloud_computing.svg"
import development from "../assets/development.svg"
import user_interface from "../assets/user_interface.svg"
import { FiArrowRight } from "react-icons/fi"
import meetTheTeam from "../assets/meet_the_team.svg"
import WhatWeKnow from "../components/WhatWeKnow/WhatWeKnow"

export default function Home() {
  return (
    <Layout className={styles.test}>
      <Hero
        heading="We Build Things For The Web"
        subText="Professional website and web application development using the latest
          in modern web techonologies."
        size="half"
        bg="bg_svg"
      />
      <main>
        <section>
          <div className={styles.Services_container}>
            <div
              className={styles.Service}
              onClick={() => navigate("/service-webdevelopment")}
            >
              <div className={styles.Service_icon}>
                <img src={development} alt="Web Development" />
              </div>
              <h4>Website | Wordpress</h4>
              <p>
                Custom web design and development services to get your business
                online for customers to see.
              </p>
              <Link to="/service-webdevelopment">
                Learn More <FiArrowRight />
              </Link>
            </div>
            <div
              className={styles.Service}
              onClick={() => navigate("/service-webapplications")}
            >
              <div className={styles.Service_icon}>
                <img src={cloud_computing} alt="Cloud Computing" />
              </div>
              <h4>Web App | CMS</h4>
              <p>
                Fast and effecient web application development services to power
                your business or idea.
              </p>
              <Link to="/service-webapplications">
                Learn More <FiArrowRight />
              </Link>
            </div>
            <div
              className={styles.Service}
              onClick={() => navigate("/service-ux")}
            >
              <div className={styles.Service_icon}>
                <img src={user_interface} alt="UX and Design" />
              </div>
              <h4>Design | UX</h4>
              <p>
                Logo design, branding and UX services to ensure your prodcuts
                are designed for your users.
              </p>
              <Link to="/service-ux">
                Learn More <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.Homepage_section}>
          <div>
            <h1>Get Yourself Online</h1>
            <p style={{ fontWeight: "300" }}>
              Let us help you to{" "}
              <b>get your next business or web project online. </b> We have a
              talented team of experienced web developers and graphic designers
              so you can focus on starting your business and we will focus on
              getting you online.
            </p>
            <Link to="/service-webdevelopment">
              Learn More <FiArrowRight />
            </Link>
          </div>
          <div className={styles.svg_wrapper}></div>
        </section>

        <section
          className={styles.Homepage_section}
          style={{ marginBottom: "100px" }}
        >
          <div className={styles.svg_wrapper}></div>
          <div>
            <h1>Professional Services</h1>
            <p style={{ fontWeight: "300" }}>
              We can provide you with{" "}
              <b> technology that is fast, responsive </b>, and built using the
              latest in modern web technologies.
            </p>
            <Link to="/service-webapplications">
              Learn More <FiArrowRight />
            </Link>
          </div>
        </section>

        <Hero size="quarter" heading="What We Know">
          <WhatWeKnow />
        </Hero>

        <section className={styles.MeetTheTeam}>
          <h1>Meet The Team</h1>

          <img src={meetTheTeam} alt="Meet The Team" />
          <p>
            The Midway Web Development team is made up of experienced and
            talented web developers, graphic designers and UX developers. Let us
            put our skills to use in creating your next web project.
          </p>
          <div
            style={{
              textAlign: "center",
              display: "inline-block",
              marginTop: "20px",
            }}
          >
            <Link to="/about">
              Learn More <FiArrowRight />
            </Link>
          </div>
        </section>

        {/* <div style={{ height: "1000px" }}></div> */}
      </main>
    </Layout>
  )
}
