import React from "react"
import styles from "../css/pages/about.module.scss"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import { Card } from "../components/Card/Card"

const heroComponent = (
  <Hero
    heading="Who We Are"
    subText="The Midway Web Development team is made up of experienced and talented web developers, graphic designers and UX developers. Let us put our skills to use in creating your next web project."
  />
)

export default function About({ data }) {
  const { allContentfulResume: team } = data
  return (
    <Layout hero={heroComponent} sideNav>
      <section className={styles.Content}>
        <aside className={styles.Aside_about}>
          <h1>
            Our Mission<span className="blue-dot">.</span>
          </h1>
          <p>
            Our mission is to make the planning and deployment of your next web
            project a fun and painless process. Your website defines what your
            company is, what it is about, so it should be nothing short of an
            exciting process
          </p>
          <p>
            While you handle the aspects of starting or running your business,
            let us handle getting you online so that the world can discover you.
            Our timely and cost effective solutions give you one less thing to
            worry about, allowing your business to thrive with a strong online
            presence.
          </p>
          <p>
            We proudly stand by our services and deliver our products with a
            100% satisfaction guarantee.{" "}
          </p>
        </aside>

        <h1 style={{ marginTop: "50px" }}>
          The Team<span className="blue-dot">.</span>
        </h1>
        <div className={styles.Cards_people}>
          {team.nodes.map(person => {
            return (
              <div className={styles.About_profile_wrapper} key={person.slug}>
                <div className={styles.Avatar}>
                  <img src={person.avatarImage.fixed.src} alt="Profile 1" />
                </div>
                <div className={styles.Title}>
                  <h2>
                    {person.name}
                    <span className="blue-dot">.</span>
                  </h2>
                  <h3>{person.cardTitle}</h3>
                  <Card.Link to={`/${person.slug}`}>View Resume</Card.Link>
                </div>
              </div>

              // <Card
              //   onClick={() => navigate(`/${person.slug}`)}
              //   onKeyDown={() => navigate(`/${person.slug}`)}
              //   role="button"
              //   tabIndex="0"
              //   key={person.slug}
              // >
              //   <Card.Image size="80%">
              //     <div className={styles.AvatarOverlay_blue}>
              //       <img src={person.avatarImage.fixed.src} alt="Profile 1" />
              //     </div>
              //   </Card.Image>
              //   <Card.Title position="center">{person.name}</Card.Title>
              //   <Card.SubTitle position="center">
              //     {person.cardTitle}
              //   </Card.SubTitle>
              //   <div style={{ textAlign: "center" }}>
              //     <Card.Link to={`/${person.slug}`}>Learn More</Card.Link>
              //   </div>
              // </Card>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetAboutCardData {
    allContentfulResume(sort: { fields: createdAt, order: ASC }) {
      nodes {
        cardTitle
        avatarImage {
          fixed {
            src
          }
        }
        slug
        name
      }
    }
  }
`
