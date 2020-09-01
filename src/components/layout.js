import React from "react"
import styles from "../css/layout.module.scss"
import SideNavigation from "../components/SideNavigation/SideNavigation"
import Head from "../components/Helmet/Helmet"
import "normalize.css"
import Navigation from "./Navigation/Navigation"
import "../css/core.scss"
import Footer from "../components/Footer/Footer"
import CookieConsent from "react-cookie-consent"

export default function Layout(props) {
  return (
    <div>
      {/* Cookie Consent Component */}
      <CookieConsent
        location="bottom"
        buttonText="Got It"
        declineText="Decline(optional)"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ color: "white", background: "rgba(61,65,66,0.85)" }}
        enableDeclineButton
        declineButtonStyle={{
          background: "none",
          borderRadius: "6px",
          border: "2px solid #888",
          color: "#888",
        }}
        flipButtons
        buttonStyle={{
          background: "#4464e7",
          color: "white",
          borderRadius: "6px",
        }}
      >
        <h4 style={{ color: "white", margin: "0px" }}>We Use Cookies</h4>
        <p style={{ color: "white", fontSize: "14px" }}>
          By using our site you agree to our use of cookies to deliver a better
          site experience.
        </p>
      </CookieConsent>

      <Head />
      <Navigation />
      {props.hero}
      <div
        className={[
          styles.Layout_container,
          props.sideNav ? styles.showSideNav : "", // if the layout wants the side nav add the side nav class
        ].join(" ")}
      >
        {props.sideNav && <SideNavigation />}

        <div className={styles.layoutContent}>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}
