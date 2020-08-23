import React from "react"
import styles from "../css/pages/about.module.scss"
import { navigate, graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import { Card } from "../components/Card/Card"
import tylorImg from "../assets/tylor_cropped.png"
import johnImg from "../assets/john_cropped.png"
import kailaImg from "../assets/kaila_cropped.png"
const heroComponent = (
  <Hero
    heading="Who We Are"
    subText="Meet the team at Midway Web Development!"
  />
)

export default function About({ data }) {
  const { allContentfulResume: team } = data
  console.log(team)
  return (
    <Layout hero={heroComponent} sideNav>
      <section className={styles.Content}>
        <aside className={styles.Aside_about}>
          <h1>Our Mission</h1>
          <p>
            Our mission is to make the planning and deployment of your next web
            project a fun and painless process. Your website defines what your
            company is what it is about so it should be nothing short of an
            exciting process.
          </p>
          <p>
            While you handle the aspects of starting or running your business,
            let us handle getting you online so that the world can discover you.
            Our timely and cost effective solutions will give you one less thing
            to worry about.
          </p>
          <p>
            We proudly stand by our services and deliver our products with a
            100% satisfaction gurantee.{" "}
          </p>
        </aside>
        <h1>The Team</h1>
        <div className={styles.Cards_people}>
          {team.nodes.map(person => {
            return (
              <Card
                onClick={() => navigate(`/${person.slug}`)}
                onKeyDown={() => navigate(`/${person.slug}`)}
                role="button"
                tabIndex="0"
                key={person.slug}
              >
                <Card.Image size="80%">
                  <img src={person.avatarImage.fixed.src} alt="Profile 1" />
                </Card.Image>
                <Card.Title position="center">{person.name}</Card.Title>
                <Card.SubTitle position="center">
                  {person.cardTitle}
                </Card.SubTitle>
                <div style={{ textAlign: "center" }}>
                  <Card.Link to={`/${person.slug}`}>Learn More</Card.Link>
                </div>
              </Card>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetAboutCardData {
    allContentfulResume {
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
