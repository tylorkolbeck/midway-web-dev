import React from "react"
import styles from "../css/pages/index.module.scss"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import { FiArrowRight } from "react-icons/fi"
import WhatWeKnow from "../components/WhatWeKnow/WhatWeKnow"
import Link from "../components/Link/Link"
import HomePageHero from "../components/HomePageHero/HomePageHero"
import { Card } from "../components/Card/Card"
import Button from "../components/Button/Button"
// Images
import performance_src from "../assets/performance.svg"
import contract_src from "../assets/contract.svg"
import marketing_src from "../assets/marketing.svg"
import idea_src from "../assets/idea.svg"
import meeting_src from "../assets/meeting.svg"

export default function Home() {
  return (
    <Layout className={styles.test}>
      <HomePageHero />
      <main>
        <section>
          <p className="blue-heading-italic">SERVICES</p>
          <h1 className="h1-xl">
            One Stop Shop<span className="blue-dot">.</span>
          </h1>
          <div className={styles.Services_container}>
            <Card>
              <Card.Title>Proffesional Websites</Card.Title>
              <p>
                Need a custom website to get your business online? Learn more
                about why a website is critical to your companys success.
              </p>
              <Card.Link to="/service-webdevelopment">Learn More</Card.Link>
            </Card>
            <Card>
              <Card.Title>Custom Applications</Card.Title>
              <p>
                Need a custom web application? Learn more about how we can help
                you improve your companies effiency with a custom web service.
              </p>
              <Card.Link to="/service-webapplications">Learn More</Card.Link>
            </Card>

            <Card>
              <Card.Title>Design And User Experience</Card.Title>
              <p>
                Need a Logo, company branding or UX services? Learn more about
                how we design for the user.
              </p>
              <Card.Link to="/service-ux">Learn More</Card.Link>
            </Card>
          </div>
        </section>

        <section className={styles.Homepage_section}>
          <div>
            <h1 className="h1-xl">
              High Performance<span className="blue-dot">.</span>
            </h1>
            <p>
              We develop using the <b>latest in modern web technologies</b> so
              you can be guranteed that your product will be fast and
              effiecient. A fast website means happy customers.
            </p>

            <Link to="/service-webdevelopment">
              Learn More <FiArrowRight />
            </Link>
          </div>
          <div className={styles.svg_wrapper}>
            <img src={performance_src} alt="Performant Services"></img>
          </div>
        </section>

        <section
          className={styles.Homepage_section}
          style={{ marginBottom: "100px" }}
        >
          <div className={styles.svg_wrapper}>
            <img src={contract_src} alt="Performant Services"></img>
          </div>
          <div>
            <h1 className="h1-xl">
              Professional Services<span className="blue-dot">.</span>
            </h1>

            <p>
              Let us help you get your next business or web project online. We
              have a talented team of experienced{" "}
              <b>web developers, graphic designers, and content writers</b> to
              work for you so all you have to focus on is your business' day to
              day operations.
            </p>

            <Link to="/service-webapplications">
              Learn More <FiArrowRight />
            </Link>
          </div>
        </section>

        <section className={styles.Homepage_section}>
          <div>
            <h1 className="h1-xl">
              Reach Your Audience<span className="blue-dot">.</span>
            </h1>
            <p>
              At MWD we put a lot of focus into <b>SEO and marketing</b> to help
              you to gain quality organic traffic. With organice traffic you can{" "}
              <b>save hundreds on ad space</b> as well as increasing your
              visitor count.
            </p>
            <Link to="/service-webdevelopment">
              Learn More <FiArrowRight />
            </Link>
          </div>
          <div className={styles.svg_wrapper}>
            <img src={marketing_src} alt="Performant Services"></img>
          </div>
        </section>

        <section
          className={styles.Homepage_section}
          style={{ marginBottom: "100px" }}
        >
          <div className={styles.svg_wrapper}>
            <img src={idea_src} alt="Performant Services"></img>
          </div>
          <div>
            <h1 className="h1-xl">
              Innovative Talent<span className="blue-dot">.</span>
            </h1>

            <p>
              Have an idea but you not sure how to move it forward to the next
              step? MWD utilizes a proven process to welcome{" "}
              <b>innovative thinking and design</b> to help you make your
              product successful.
            </p>

            <Link to="/service-webapplications">
              Learn More <FiArrowRight />
            </Link>
          </div>
        </section>

        <Hero size="quarter" heading="What We Know" bg="pri" centered>
          <WhatWeKnow />
        </Hero>

        <section className={styles.MeetTheTeam}>
          <h1 className="h1-xl">
            Meet The Team<span className="blue-dot">.</span>
          </h1>

          <div className={styles.svg_wrapper}>
            <img src={meeting_src} alt="Performant Services"></img>
          </div>
          <p>
            The Midway Web Development team is made up of experienced and
            talented <b>web developers, graphic designers and UX developers.</b>{" "}
            Let us put our skills to use in creating your next web project.
          </p>
          <div
            style={{
              textAlign: "center",
              display: "inline-block",
              marginTop: "20px",
            }}
          >
            <Button to="/about">Meet The Team</Button>
          </div>
        </section>
      </main>
    </Layout>
  )
}
