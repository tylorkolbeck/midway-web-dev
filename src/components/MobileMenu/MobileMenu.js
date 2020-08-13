import React, { useState, useEffect } from "react"
import styles from "./MobileMenu.module.scss"
import Hamburger from "../Hamburger/Hamburger"
import { Link } from "gatsby"

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    menuOpen
      ? (document.body.style.position = "fixed")
      : (document.body.style.position = "relative")
  }, [menuOpen])

  function toggleMenuOpen() {
    setMenuOpen(menuOpen => !menuOpen)
  }

  return (
    <div className={styles.MobileMenu_wrapper}>
      <Hamburger open={menuOpen} onClick={toggleMenuOpen} />

      {menuOpen && (
        <div
          className={[styles.MobileMenu, menuOpen ? styles.open : ""].join(" ")}
        >
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Blog</Link>
        </div>
      )}
    </div>
  )
}
