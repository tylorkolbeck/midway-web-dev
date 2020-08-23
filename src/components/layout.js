import React from "react"
import styles from "../css/layout.module.scss"
import SideNavigation from "../components/SideNavigation/SideNavigation"
import Head from "../components/Helmet/Helmet"
import "normalize.css"
import Navigation from "./Navigation/Navigation"
import "../css/core.scss"
import Footer from "../components/Footer/Footer"

export default function Layout(props) {
  return (
    <div>
      <Head />
      <Navigation />
      {props.hero}
      <div
        className={[
          styles.Layout_container,
          props.sideNav ? styles.showSideNav : "",
        ].join(" ")}
      >
        {props.sideNav && <SideNavigation />}

        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}
