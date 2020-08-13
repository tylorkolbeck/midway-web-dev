import React from "react"
import styles from "./ContactForm.module.scss"
import Button from "../Button/Button"

export default function ContactForm() {
  return (
    <div className={styles.ContactForm_container}>
      <div style={{ textAlign: "center", marginTop: "150px" }}>
        <h1>Contact Us</h1>
        <p>We would love to work together!</p>
      </div>
      <div className={styles.ContactForm}>
        <div>
          <h4>Name</h4>
          <input placeholder="Enter your name" />
        </div>
        <div>
          <h4>Email</h4>
          <input placeholder="Enter your email" />
        </div>
        <div className={styles.ContactForm_textarea}>
          <h4>Message</h4>
          <textarea placeholder="Enter your messsage..." />
        </div>
        <div
          style={{
            gridColumn: "1 / 3",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button bg="tert" icon="arrowRight" style={{ width: "120px" }}>
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}
