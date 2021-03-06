import React from "react"
import { Link } from "gatsby"
import styles from "./Card.module.scss"
import { IoMdPricetag } from "react-icons/io"

export function Card(props) {
  return (
    <div
      {...props}
      className={[
        styles.Card,
        props.className,
        props.onClick ? styles.cursor : "",
      ].join(" ")}
    >
      {props.children}
    </div>
  )
}

Card.Header = ({ children }) => {
  return <div className={styles.Card_Header}>{children}</div>
}

Card.Title = ({ children, position }) => {
  return (
    <h3
      className={styles.Card_Title}
      style={{ textAlign: position ? position : "left" }}
    >
      {children}
    </h3>
  )
}

Card.Content = ({ children }) => {
  return <div className={styles.Card_Content}>{children}</div>
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

Card.Image = ({ children, size, position, style }) => {
  const imageStyles = {
    width: size || "100%",
    margin: "0 auto",
    position: "relative",
  }
  return (
    <div
      style={{ imageStyles, ...style }}
      className={styles.Card_image}
      data-width={size}
    >
      {children}
    </div>
  )
}

Card.HeaderImage = ({ children }) => {
  return <div className={styles.Card_HeaderImage}>{children}</div>
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

Card.Footer = ({ children }) => {
  return <div className={styles.Card_footer}>{children}</div>
}

Card.Tags = ({ tags }) => {
  return (
    <div className={styles.Tags}>
      <IoMdPricetag />
      {tags.map(tag => {
        return <span key={tag}>{tag}</span>
      })}
    </div>
  )
}

Card.Text = ({ children }) => {
  return <p>{children}</p>
}
