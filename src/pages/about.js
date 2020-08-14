import React from "react"
import styles from "../css/pages/about.module.scss"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import { Card } from "../components/Card/Card"
import avatar from "../assets/avatar_default.png"
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillDribbbleCircle,
  AiFillGithub,
} from "react-icons/ai"

export default function About({ data }) {
  return (
    <Layout>
      <Hero
        heading="The Midway Team"
        subText="Meet the team behind the awesome work that is done at Midway Web Development!"
      />
      <section className={styles.Content}>
        <aside>
          <h1>Who We Are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            perferendis itaque rerum nam voluptatum est in explicabo reiciendis
            minima vel.
          </p>
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            deleniti placeat iure harum nihil officia dolore, est ipsum? Labore,
            ab.
          </p>
        </aside>
        <div className={styles.Cards_people}>
          <Card>
            <Card.Image size="80%">
              <img src={avatar} alt="Profile 1" />
            </Card.Image>
            <Card.Title>Person 1</Card.Title>
            <Card.SubTitle>Webdeveloper</Card.SubTitle>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              quibusdam.
            </Card.Text>
            <div className={styles.Social_media}>
              <AiFillGithub />
              <AiFillTwitterCircle />
              <AiOutlineInstagram />
              <AiFillFacebook />
            </div>
          </Card>
          <Card>
            <Card.Image size="80%">
              <img src={avatar} alt="Profile 1" />
            </Card.Image>
            <Card.Title>Person 2</Card.Title>
            <Card.SubTitle>Webdeveloper</Card.SubTitle>

            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              quibusdam.
            </Card.Text>
            <div className={styles.Social_media}>
              <AiFillGithub />
              <AiFillTwitterCircle />
              <AiOutlineInstagram />
              <AiFillFacebook />
            </div>
          </Card>
          <Card>
            <Card.Image size="80%">
              <img src={avatar} alt="Profile 1" />
            </Card.Image>
            <Card.Title>Person 3</Card.Title>
            <Card.SubTitle>Webdeveloper</Card.SubTitle>

            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              quibusdam.
            </Card.Text>
            <div className={styles.Social_media}>
              <AiFillGithub />
              <AiFillTwitterCircle />
              <AiOutlineInstagram />
              <AiFillFacebook />
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  )
}
