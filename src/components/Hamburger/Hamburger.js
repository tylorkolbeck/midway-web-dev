import React from "react"
import styles from "./Hamburger.module.scss"

export default function Hamburger() {
  return (
    <div className={[styles.nav_icon].join(" ")}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
