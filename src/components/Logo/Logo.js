import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./Logo.module.scss"

export default class Logo extends Component {
  render() {
    return (
      <Link to="/">
        <div className={styles.Logo_wrapper}>
          <div>
            <h1>MWD</h1>
          </div>
        </div>
      </Link>
    )
  }
}
