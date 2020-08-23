import React from "react"
import styles from "./Link.module.scss"
import { Link } from "gatsby"

export default function LinkEl({ to, children, color }) {
  const classNames = [color ? styles[color] : styles.pri, styles.Link].join(" ")

  return (
    <Link to={to} className={classNames}>
      {children}
    </Link>
  )
}
