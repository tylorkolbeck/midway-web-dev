import React from "react"
import styles from "./Button.module.scss"
import { FiArrowRight } from "react-icons/fi"

let iconMapping = {
  arrowRight: <FiArrowRight />,
}

export default function Button(props) {
  return (
    <button
      style={{ ...props.style }}
      className={[styles.Button, styles[props.bg]].join(" ")}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
      {props.icon ? iconMapping[props.icon] : null}
    </button>
  )
}
