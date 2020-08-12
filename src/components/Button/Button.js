import React from "react"
import styles from "./Button.module.scss"

export default function Button(props) {
  return (
    <button className={[styles.Button, styles[props.bg]].join(" ")}>
      {props.children}
    </button>
  )
}
