import React from "react"
import styles from "../css/pages/service-webdevelopment.module.scss"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import { Card } from "../components/Card/Card"
import userInterface from "../assets/user_interface.svg"
import Aside from "../components/Aside/Aside"
import WhatWeKnow from "../components/WhatWeKnow/WhatWeKnow"

export default function Webdevelopment() {
  return (
    <Layout>
      <Hero
        bg="bg_tert"
        size="half"
        heading="Web Development Services"
        subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vitae?"
      />

      <section>
        <Aside>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
          officiis expedita doloremque id deserunt praesentium provident
          laboriosam suscipit ex cum?
        </Aside>
      </section>

      <section className={styles.Technologies}>
        <h1>Technologies</h1>
        <WhatWeKnow />
      </section>

      <section className={styles.Content}>
        <h1>About Our Services</h1>
        <div>
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis unde
            sed possimus dolorem aliquid eaque doloribus tenetur saepe
            necessitatibus quae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quidem, fuga aut. Commodi dolores optio veritatis
            nemo ratione hic natus odit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            eaque aperiam illo similique nobis mollitia dolore labore neque!
            Facilis, explicabo?
          </p>
        </div>
      </section>

      <section className={styles.Content}>
        <div>
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis unde
            sed possimus dolorem aliquid eaque doloribus tenetur saepe
            necessitatibus quae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quidem, fuga aut. Commodi dolores optio veritatis
            nemo ratione hic natus odit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            eaque aperiam illo similique nobis mollitia dolore labore neque!
            Facilis, explicabo?
          </p>
        </div>
      </section>

      <Hero bg="bg_tert" size="quarter" heading="Web Development Services" />

      <section className={styles.Content}>
        <h1>Why Websites Are Important</h1>
        <div>
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis unde
            sed possimus dolorem aliquid eaque doloribus tenetur saepe
            necessitatibus quae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quidem, fuga aut. Commodi dolores optio veritatis
            nemo ratione hic natus odit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            eaque aperiam illo similique nobis mollitia dolore labore neque!
            Facilis, explicabo?
          </p>
        </div>
      </section>
      <section className={styles.Content}>
        <div>
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis unde
            sed possimus dolorem aliquid eaque doloribus tenetur saepe
            necessitatibus quae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quidem, fuga aut. Commodi dolores optio veritatis
            nemo ratione hic natus odit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            eaque aperiam illo similique nobis mollitia dolore labore neque!
            Facilis, explicabo?
          </p>
        </div>
      </section>
    </Layout>
  )
}
