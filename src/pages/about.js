import React from "react"
import styles from "../css/pages/about.module.scss"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import { Card } from "../components/Card/Card"
import avatar from "../assets/avatar_default.png"
import tylorImg from "../assets/tylor_cropped.png"
import johnImg from "../assets/john_cropped.png"
import kailaImg from "../assets/kaila_cropped.png"
// import {
//   AiOutlineArrowRight,
//   AiFillFacebook,
//   AiOutlineInstagram,
//   AiFillGithub,
// } from "react-icons/ai"

export default function About({ data }) {
  return (
    <Layout>
      <Hero
        bg="bg_tert"
        heading="Who We Are"
        subText="Meet the team behind the awesome work that is done at Midway Web Development!"
      />
      <section className={styles.Content}>
        <h1 style={{ textAlign: "center" }}>The Team</h1>
        <div className={styles.Cards_people}>
          <Card>
            <Card.Image size="80%">
              <img src={tylorImg} alt="Profile 1" />
            </Card.Image>
            <Card.Title position="center">Tylor Kolbeck</Card.Title>
            <Card.SubTitle position="center">Web | UX Developer</Card.SubTitle>
            <div style={{ textAlign: "center" }}>
              <Card.Link>Learn More</Card.Link>
            </div>
          </Card>
          <Card>
            <Card.Image size="80%">
              <img src={johnImg} alt="Profile 1" />
            </Card.Image>
            <Card.Title position="center">John Kaplanis</Card.Title>
            <Card.SubTitle position="center">
              Web Developer | Sales
            </Card.SubTitle>
            <div style={{ textAlign: "center" }}>
              <Card.Link>Learn More</Card.Link>
            </div>
          </Card>
          <Card>
            <Card.Image size="80%">
              <img src={kailaImg} alt="Profile 1" />
            </Card.Image>
            <Card.Title position="center">Kaila Kolbeck</Card.Title>
            <Card.SubTitle position="center">Designer</Card.SubTitle>
            <div style={{ textAlign: "center" }}>
              <Card.Link>Learn More</Card.Link>
            </div>
          </Card>
        </div>
        <aside className={styles.Aside_about}>
          <h1 style={{ textAlign: "center" }}>Our Mission</h1>
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
      </section>
    </Layout>
  )
}
