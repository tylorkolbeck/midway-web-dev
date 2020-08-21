import React from "react"
import { Link } from "gatsby"
import { navLinks, serviceLinks } from "../../utils/siteNavigationLinks"
import styles from "./Footer.module.scss"
import ContactForm from "../ContactForm/ContactForm"
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillDribbbleCircle,
  AiFillGithub,
} from "react-icons/ai"

export default function Footer() {
  return (
    <>
      <div className={styles.Footer}>
        <div>
          <h1>Contact Us</h1>
          <ContactForm mini />
        </div>
        <div className={styles.NavigationLinks}>
          <ul>
            <h3>Navigation</h3>
            {navLinks.map(link => {
              if (link.slug) {
                return (
                  <li>
                    <Link to={link.slug}>{link.displayText}</Link>
                  </li>
                )
              }
            })}
          </ul>
          {/* Services */}
          <ul>
            {/* <p>{link.displayText}</p> */}
            <h3>Services</h3>
            <ul>
              {serviceLinks.map(link => {
                return (
                  <li>
                    <Link to={link.slug}>{link.displayText}</Link>
                  </li>
                )
              })}
            </ul>
          </ul>

          {/* <div className={styles.socialMediaIcons}>
            <AiFillTwitterCircle />
            <AiFillFacebook />
            <AiOutlineInstagram />
            <AiFillDribbbleCircle />
            <AiFillGithub />
          </div> */}
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; Copyright 2020, Midway Web Development</p>
      </div>
    </>
  )
}
