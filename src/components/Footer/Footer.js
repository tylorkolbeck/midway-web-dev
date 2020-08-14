import React from "react"
import { Link } from "gatsby"
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
          <div>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
          </div>
          <div className={styles.socialMediaIcons}>
            <AiFillTwitterCircle />
            <AiFillFacebook />
            <AiOutlineInstagram />
            <AiFillDribbbleCircle />
            <AiFillGithub />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; Copyright 2020, Midway Web Development</p>
      </div>
    </>
  )
}
