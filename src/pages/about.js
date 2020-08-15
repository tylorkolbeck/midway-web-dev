import React from "react"
import styles from "../css/pages/about.module.scss"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import { Card } from "../components/Card/Card"
import avatar from "../assets/avatar_default.png"
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
        heading="Who We Are"
        subText="Meet the team behind the awesome work that is done at Midway Web Development!"
      />
      <section className={styles.Content}>
        <h1 style={{ textAlign: "center" }}>The Team</h1>
        <div className={styles.Cards_people}>
          <Card>
            <Card.Image size="80%">
              <img src={avatar} alt="Profile 1" />
            </Card.Image>
            <Card.Title position="center">Tylor Kolbeck</Card.Title>
            <Card.SubTitle position="center">Web Developer</Card.SubTitle>
            <div style={{ textAlign: "center" }}>
              <Card.Link>Learn More</Card.Link>
            </div>
          </Card>
          <Card>
            <Card.Image size="80%">
              <img src={avatar} alt="Profile 1" />
            </Card.Image>
            <Card.Title position="center">John Kaplanis</Card.Title>
            <Card.SubTitle position="center">Web Developer</Card.SubTitle>
            <div style={{ textAlign: "center" }}>
              <Card.Link>Learn More</Card.Link>
            </div>
          </Card>
          <Card>
            <Card.Image size="80%">
              <img src={avatar} alt="Profile 1" />
            </Card.Image>
            <Card.Title position="center">Kaila Kolbeck</Card.Title>
            <Card.SubTitle position="center">Graphic Designer</Card.SubTitle>
            <div style={{ textAlign: "center" }}>
              <Card.Link>Learn More</Card.Link>
            </div>
          </Card>
        </div>
        <aside className={styles.Aside_about}>
          <h1 style={{ textAlign: "center" }}>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            perferendis itaque rerum nam voluptatum est in explicabo reiciendis
            minima vel. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro perferendis itaque rerum nam voluptatum est in explicabo
            reiciendis minima vel.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            deleniti placeat iure harum nihil officia dolore, est ipsum? Labore,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            perferendis itaque rerum nam voluptatum est in explicabo reiciendis
            minima vel. ab.
          </p>
        </aside>
      </section>
    </Layout>
  )
}
