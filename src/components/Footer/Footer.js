import React from "react"
import { Link } from "gatsby"
import { navLinks, serviceLinks } from "../../utils/siteNavigationLinks"
import styles from "./Footer.module.scss"
import ContactForm from "../ContactForm/ContactForm"

export default function Footer() {
  return (
    <div className={styles.Footer_wrapper}>
      <div className={styles.Footer}>
        <div>
          <h1>
            Get In Touch<span className="blue-dot">.</span>
          </h1>
          <div>
            <ContactForm mini light />
          </div>
        </div>
        <div className={styles.NavigationLinks}>
          <ul>
            <h3>Navigation</h3>
            {navLinks.map(link => {
              if (link.slug) {
                return (
                  <li key={link.slug}>
                    <Link to={link.slug}>{link.displayText}</Link>
                  </li>
                )
              }
            })}
          </ul>
          <ul>
            <h3>Services</h3>
            <ul>
              {serviceLinks.map(link => {
                return (
                  <li key={link.slug}>
                    <Link to={link.slug}>{link.displayText}</Link>
                  </li>
                )
              })}
            </ul>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; Copyright 2020, Midway Web Development</p>
      </div>
    </div>
  )
}
