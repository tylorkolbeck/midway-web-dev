import React from "react"
import { Link } from "gatsby"
import styles from "./Navigation.module.scss"
import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import Hamburger from "../Hamburger/Hamburger"

export default function Navigation() {
  return (
    <nav className={styles.Navigation_Wrapper}>
      <div className={styles.Navigtion_content}>
        <div>
          <Hamburger />
          <ul>
            <li>
              <Logo />
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <Button bg="light">Contact Us</Button>
        </div>
      </div>
    </nav>
  )
}
