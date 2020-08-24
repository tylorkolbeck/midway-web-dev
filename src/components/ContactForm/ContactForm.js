import React, { useState } from "react"
import styles from "./ContactForm.module.scss"
import Button from "../Button/Button"

const initialFormState = {
  name: "",
  email: "",
  message: "",
}

export default function ContactForm(props) {
  const [state, setState] = useState(initialFormState)
  const [error, setError] = useState(false)
  const [messageSuccess, setMessageSuccess] = useState(false)

  let classNames = [styles.ContactForm]

  classNames.push(props.mini ? styles.miniForm : "")
  classNames.push(props.light ? styles.light : "")

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  function handleFormSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => {
        setState(initialFormState)
        setMessageSuccess("Your message is on its way!")
        setError(false)
      })
      .catch(() => setError("There was an error sending your message."))

    e.preventDefault()
  }

  function handleFormChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <p className="error-text">{error && error}</p>
        <p className="success-text">{messageSuccess && messageSuccess}</p>
      </div>

      <div className={classNames.join(" ")}>
        <div>
          <label htmlFor="message_name">Name</label>

          <input
            placeholder="Enter your name"
            type="text"
            name="name"
            id="message_name"
            value={state.name}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="message_email">Email</label>

          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="message_email"
            value={state.email}
            onChange={handleFormChange}
          />
        </div>
        <div className={styles.ContactForm_textarea}>
          <label htmlFor="message_message">Message</label>

          <textarea
            placeholder="Enter your messsage..."
            name="message"
            id="message_message"
            type="text"
            value={state.message}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <Button type="submit">Send Message</Button>
        </div>
      </div>
    </form>
  )
}
