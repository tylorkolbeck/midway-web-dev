import React from "react"
import styles from "./Hero.module.scss"

/**
 *
 * @param {String} heading Heading text
 * @param {String} subText Sub text
 * @param {String} bg bg_pri || bg_tert || bg_svg || bg_accent
 * @param {Component} children
 */

export default function Hero({ size, bg, heading, subText, children }) {
  const heroSize = size || "half"
  const heroBackgound = bg || "bg_pri"

  return (
    <div
      className={[
        styles.Hero_wrapper,
        styles[heroSize],
        styles[heroBackgound],
      ].join(" ")}
    >
      <div>
        {heading && <h1>{heading}</h1>}
        {subText && <p>{subText}</p>}
        {children && <div className={styles.Content}>{children}</div>}
      </div>
    </div>
  )
}
