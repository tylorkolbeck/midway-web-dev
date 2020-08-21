import React from "react"
import styles from "../css/pages/resume.module.scss"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import Link from "../components/Link/Link"
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai"

export default function resume({ data }) {
  const { contentfulResume: resume } = data
  console.log(data)

  const hero = (
    <Hero
      size="half"
      heading={resume.name}
      subText={resume.job.map(job => (
        <span key={job} className={styles.JobTitle}>
          {job}
        </span>
      ))}
    />
  )
  return (
    <Layout hero={hero} sideNav>
      <section className={styles.Resume_top}>
        <div className={styles.Profile_image}>
          <img src={resume.profileImage.fluid.src} alt={resume.name} />
        </div>
        <div className={styles.Header_info}>
          <div>
            <h1 className={styles.Name}>{resume.name}</h1>
            <h2 className={styles.Title}>{resume.title}</h2>
          </div>
          <div>
            <p>{resume.location}</p>
            <p style={{ display: "flex", alignItems: "center" }}>
              {resume.email}
            </p>
            <div className={styles.Resources}>
              <div className={styles.SocialMedia}>
                <Link to="/">
                  <AiFillLinkedin />
                </Link>

                <Link to="/">
                  <AiFillTwitterSquare />
                </Link>
              </div>
              {/* <div>
              <p>
                <Link to="/">View Resume</Link>{" "}
              </p>
              <p>
                <Link to="/">Read Tylors Posts</Link>
              </p>
            </div> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        {documentToReactComponents(
          resume.childContentfulResumeAboutRichTextNode.json
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ResumeBySlug($slug: String!) {
    contentfulResume(slug: { eq: $slug }) {
      name
      title
      location
      email
      slug
      job
      profileImage {
        fluid {
          src
        }
      }
      childContentfulResumeAboutRichTextNode {
        json
      }
    }
  }
`
