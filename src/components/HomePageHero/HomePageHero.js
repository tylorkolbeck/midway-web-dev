import React from "react"
import styles from "./HomePageHero.module.scss"
import Button from "../Button/Button"
import { FaArrowDown } from "react-icons/fa"

export default function HomePageHero({ arrowHidden }) {
  return (
    <div className={styles.HomePageHero_wrapper}>
      <div>
        <h1 className="h1-xl" style={{ maxWidth: "600px" }}>
          Midway Web Development And Design
          <span className="blue-dot">.</span>
        </h1>

        <hr className="blue-hr"></hr>

        <p>
          Getting your business online with a website or as a custom web
          application should be a fun and exciting process. At Midway Web
          Development thats what we strive to provide.
        </p>
        <Button bg="primary" style={{ marginTop: "50px" }} to="/contact">
          Get Started
        </Button>
      </div>
      <div></div>
      <div
        className={[
          styles.Icon_absolute_center,
          arrowHidden ? styles.hidden : "",
        ].join(" ")}
      >
        <FaArrowDown />
      </div>
    </div>
  )
}
