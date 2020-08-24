import React, { useState, useEffect } from "react"
import styles from "./MobileMenu.module.scss"
import Hamburger from "../Hamburger/Hamburger"
import { Link } from "gatsby"

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState()

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

      <div className={[styles.menu, menuOpen ? styles.menuOpen : ""].join(" ")}>
        <Link to="/" onClick={toggleMenuOpen}>
          Home
        </Link>
        <Link to="/service-web-development" onClick={toggleMenuOpen}>
          Web Development
        </Link>
        <Link to="/service-webapplications" onClick={toggleMenuOpen}>
          Web Applications
        </Link>
        <Link to="/service-logodesign" onClick={toggleMenuOpen}>
          Logo Design
        </Link>
        <Link to="/service-ux" onClick={toggleMenuOpen}>
          UX Services
        </Link>
        <Link to="/about" onClick={toggleMenuOpen}>
          About
        </Link>
        <Link to="/blog" onClick={toggleMenuOpen}>
          Blog
        </Link>
        <Link to="/contact" onClick={toggleMenuOpen}>
          Contact
        </Link>
      </div>

      {/* {menuOpen && (
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
      )} */}
    </div>
  )
}
