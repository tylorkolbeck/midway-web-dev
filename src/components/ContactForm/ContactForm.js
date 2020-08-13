import React from "react"
import styles from "./ContactForm.module.scss"
import Button from "../Button/Button"

export default function ContactForm(props) {
  let formClass = props.mini ? styles.miniForm : ""

  return (
    <form name="contact" method="POST" data-netlify="true">
      <div>
        <h1>Contact Us</h1>
      </div>
      <div className={[styles.ContactForm, formClass].join(" ")}>
        <div>
          <h4>Name</h4>
          <input placeholder="Enter your name" type="text" name="name" />
        </div>
        <div>
          <h4>Email</h4>
          <input placeholder="Enter your email" type="email" name="email" />
        </div>
        <div className={styles.ContactForm_textarea}>
          <h4>Message</h4>
          <textarea placeholder="Enter your messsage..." name="message" />
        </div>
        <div>
          <Button
            bg="tert"
            icon="arrowRight"
            style={{ width: "120px" }}
            type="submit"
          >
            Send
          </Button>
        </div>
      </div>
    </form>
  )
}
