import React from "react"
import styles from "./Hero.module.scss"

export default function Hero() {
  return (
    <div className={styles.Hero_wrapper}>
      <section>
        <h1>We Build Things For The Web</h1>
        <p>
          Professional website and web application development using the latest
          in modern web techonologies.
        </p>
      </section>
    </div>
  )
}
