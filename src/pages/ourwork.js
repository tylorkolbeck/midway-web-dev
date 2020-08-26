import React from "react"
import styles from "../css/pages/ourWork.module.scss"
import { graphql } from "gatsby"
import { Card } from "../components/Card/Card"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import Image from "gatsby-image"

export default function ourWork({ data }) {
  const {
    allContentfulOurWork: { nodes: work },
  } = data
  console.log(work)
  const heroComponent = (
    <Hero
      heading="Our Work"
      subText="Browse through some of the various projects that we have worked on at MWD."
    />
  )
  return (
    <Layout hero={heroComponent} sideNav>
      <section>
        <div className={styles.Work_wrapper}>
          {work.map(work => {
            return (
              <Card key={work.id}>
                <Card.HeaderImage>
                  <Image fluid={work.websiteImage.fluid} alt={work.title} />
                </Card.HeaderImage>
                <Card.Content>
                  <Card.Title>{work.title}</Card.Title>
                  <p>{`${work.shortDescription.slice(0, 100)}...`}</p>
                </Card.Content>
                <Card.Footer>
                  <Card.Link to={work.websiteUrl}>Visit Site</Card.Link>
                </Card.Footer>
              </Card>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetWorkData {
    allContentfulOurWork(sort: { fields: importance, order: ASC }) {
      nodes {
        id
        slug
        title
        technologies
        websiteUrl
        shortDescription
        websiteImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
