import React from "react"
import styles from "./Button.module.scss"
import { navigate } from "gatsby"
import { FiArrowRight } from "react-icons/fi"

let iconMapping = {
  arrowRight: <FiArrowRight />,
}

export default function Button(props) {
  function clickHandler() {
    if (props.to) {
      navigate(props.to)
    } else if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <button
      style={{ ...props.style }}
      className={[styles.Button, styles[props.bg]].join(" ")}
      type={props.type}
      onClick={clickHandler}
    >
      {props.children}
      {props.icon ? iconMapping[props.icon] : null}
    </button>
  )
}
