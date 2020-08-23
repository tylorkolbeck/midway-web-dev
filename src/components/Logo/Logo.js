import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./Logo.module.scss"
import logo from "../../assets/MWD_logo.svg"

export default class Logo extends Component {
  render() {
    return (
      <Link to="/" className={this.props.className}>
        <div
          className={styles.Logo_wrapper}
          style={{
            dispaly: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <img src={logo} alt="MWD Logo" />
          </div>
          {/* <h1>MWD</h1> */}
        </div>
      </Link>
    )
  }
}
