import React from "react"
import { Link } from "gatsby"
import styles from "./Card.module.scss"

export function Card(props) {
  return (
    <div {...props} className={styles.Service}>
      {props.children}
    </div>
  )
}

Card.Title = ({ children, position }) => {
  return <h3 style={{ textAlign: position ? position : "left" }}>{children}</h3>
}

Card.SubTitle = ({ children, position }) => {
  return (
    <h4
      style={{ textAlign: position ? position : "left" }}
      className={styles.Card_subtitle}
    >
      {children}
    </h4>
  )
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

Card.Link = ({ children, to, position }) => {
  return (
    <Link
      to={to}
      className={styles.Card_link}
      style={{
        display: "inline-block",
      }}
    >
      {children}
    </Link>
  )
}

Card.Text = ({ children }) => {
  return <p>{children}</p>
}
