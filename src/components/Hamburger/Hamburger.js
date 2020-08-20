import React from "react"
import styles from "./Hamburger.module.scss"

export default function Hamburger({ open, onClick }) {
  return (
    <div
      className={open ? styles.BurgerWrapper : ""}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div className={[styles.nav_icon, open ? styles.open : ""].join(" ")}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
