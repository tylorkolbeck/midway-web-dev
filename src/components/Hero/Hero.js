import React from "react"
import styles from "./Hero.module.scss"

export default function Hero({ size, heading, subText }) {
  const heroSize = size || "half"
  return (
    <div className={[styles.Hero_wrapper, styles[heroSize]].join(" ")}>
      <section>
        <h1>{heading}</h1>
        <p>{subText}</p>
      </section>
    </div>
  )
}
