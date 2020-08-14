import React from "react"
import { Link } from "gatsby"
import { FiArrowRight } from "react-icons/fi"
import styles from "./Card.module.scss"

export function Card({ children }) {
  return <div className={styles.Service}>{children}</div>
}

Card.Header = ({ children }) => {
  return <h4>{children}</h4>
}

Card.Icon = ({ children }) => {
  return <div>{children}</div>
}

Card.Link = ({ children, to }) => {
  return (
    <Link to={to} className={styles.Card_link}>
      {children}
    </Link>
  )
}

Card.Text = ({ children }) => {
  return <p>{children}</p>
}
