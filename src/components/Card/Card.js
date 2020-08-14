import React from "react"
import { Link } from "gatsby"
// import { FiArrowRight } from "react-icons/fi"
import styles from "./Card.module.scss"

export function Card({ children }) {
  return <div className={styles.Service}>{children}</div>
}

Card.Title = ({ children }) => {
  return <h3>{children}</h3>
}

Card.SubTitle = ({ children }) => {
  return <h4 className={styles.Card_subtitle}>{children}</h4>
}

Card.Image = ({ children, size, position }) => {
  const imageStyles = {
    width: size || "100%",

    margin: "0 auto",
  }
  return (
    <div style={imageStyles} className={styles.Card_image} data-width={size}>
      {children}
    </div>
  )
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
