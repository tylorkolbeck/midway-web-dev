import React from "react"
import styles from "./ContactForm.module.scss"
import Button from "../Button/Button"

export default function ContactForm(props) {
  let formClass = props.mini ? styles.miniForm : ""

  return (
    <div>
      <div>
        <h1>Contact Us</h1>
      </div>
      <div className={[styles.ContactForm, formClass].join(" ")}>
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
