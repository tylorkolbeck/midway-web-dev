import React from "react"
import styles from "./Button.module.scss"

export default function Button(props) {
  return (
    <button
      style={{ ...props.style }}
      className={[styles.Button, styles[props.bg]].join(" ")}
    >
      {props.children}
    </button>
  )
}
