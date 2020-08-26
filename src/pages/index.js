import React, { useState } from "react"
import styles from "../css/pages/index.module.scss"
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
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

export default function Home() {
  const [arrowHidden, setArrowHidden] = useState(false)

  // Used to hide the dancing down arrow after a certain scroll position
  useScrollPosition(({ prevPos, currPos }) => {
    const hideDownArrow = currPos.y < -200

    if (hideDownArrow) setArrowHidden(true)
    else return
  })
  return (
    <Layout className={styles.test}>
      <HomePageHero arrowHidden={arrowHidden} />
      <main>
        <Hero
          size="quarter"
          bg="pri"
          centered
          headingComponent={
            <h1
              className="h1-xl"
              style={{
                textAlign: "left",
                maxWidth: "1200px",
                margin: "0 auto",
                marginBottom: "25px",
                marginTop: "50px",
              }}
            >
              One Stop Shop.
            </h1>
          }
        >
          <div className={styles.Services_container}>
            <Card>
              <Card.Content>
                <Card.Title>Professional Websites</Card.Title>
                <p>
                  Need a custom website to get your business online? Learn more
                  about why a website is critical to your company's success.
                </p>
              </Card.Content>
              <Card.Footer>
                <Card.Link to="/service-web-development">
                  Web Development Services
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Content>
                <Card.Title>Custom Applications</Card.Title>
                <p>
                  Need a custom web application? Learn more about how we can
                  help you improve your companies efficiency with a custom web
                  service.
                </p>
              </Card.Content>
              <Card.Footer>
                <Card.Link to="/service-webapplications">
                  Web App Services
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Content>
                <Card.Title>Design And User Experience</Card.Title>
                <p>
                  Need a logo, company branding, or UX services? Learn more
                  about how we design for the user.
                </p>
              </Card.Content>
              <Card.Footer>
                <Card.Link to="/service-ux">UI/UX Services</Card.Link>
              </Card.Footer>
            </Card>
          </div>
        </Hero>

        <section className={styles.Homepage_section}>
          <div>
            <h1 className="h1-xl">
              High Performance<span className="blue-dot">.</span>
            </h1>
            <p>
              We develop using the <b>latest in modern web technologies</b> so
              you can be guaranteed that your product will be fast and
              efficient. A fast website means happy customers.
            </p>

            <Link to="/service-web-development">
              Web Development Services <FiArrowRight />
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
              Web App Services <FiArrowRight />
            </Link>
          </div>
        </section>

        <section className={styles.Homepage_section}>
          <div>
            <h1 className="h1-xl">
              Reach Your Audience<span className="blue-dot">.</span>
            </h1>
            <p>
              At MWD we put a lot of focus into <b>SEO and Marketing</b> to help
              you gain quality organic traffic. With organic traffic you can{" "}
              <b>save hundreds on ad space</b> as well as increasing your
              visitor count.
            </p>
            <Link to="/service-web-development">
              Web Development Services <FiArrowRight />
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
              Web App Services <FiArrowRight />
            </Link>
          </div>
        </section>

        <Hero
          size="quarter"
          headingComponent={
            <h1
              className="h1-xl"
              style={{
                textAlign: "left",
                maxWidth: "1200px",
                margin: "0 auto",
                marginBottom: "25px",
              }}
            >
              What We Know.
            </h1>
          }
          bg="pri"
          centered
        >
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
