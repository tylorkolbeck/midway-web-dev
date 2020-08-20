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

  let formClass = props.mini ? styles.miniForm : ""

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

      <div className={[styles.ContactForm, formClass].join(" ")}>
        <div>
          <h4>Name</h4>
          <input
            placeholder="Enter your name"
            type="text"
            name="name"
            value={state.name}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <h4>Email</h4>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            value={state.email}
            onChange={handleFormChange}
          />
        </div>
        <div className={styles.ContactForm_textarea}>
          <h4>Message</h4>
          <textarea
            placeholder="Enter your messsage..."
            name="message"
            value={state.message}
            onChange={handleFormChange}
          />
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
