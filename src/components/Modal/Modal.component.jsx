import React, { useState } from "react"
import styles from "./Modal.styles.module.scss"
import ModalBackground from "../Modal/ModalBackground.component"

export default function Modal({ shown, toggleModal, children }) {
  if (shown) {
    return (
      <div className={styles.Modal} onClick={toggleModal}>
        {children}
      </div>
    )
  } else {
    return null
  }
}
