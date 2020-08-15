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
          <Link to="/" onClick={toggleMenuOpen}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenuOpen}>
            About
          </Link>
          <Link to="/contact" onClick={toggleMenuOpen}>
            Contact
          </Link>
          <Link to="/blog" onClick={toggleMenuOpen}>
            Blog
          </Link>
        </div>
      )}
    </div>
  )
}
