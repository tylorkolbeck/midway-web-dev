import React from "react"
import styles from "./LinkToNowhere.styles.module.scss"

export default function LinkToNowhere({ text, onClick }) {
  return (
    <p className={styles.LinkToNowhere} onClick={onClick}>
      {text}
    </p>
  )
}
