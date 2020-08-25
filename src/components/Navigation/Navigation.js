import React from "react"
import { Link, navigate } from "gatsby"
import styles from "./Navigation.module.scss"
import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import MobileMenu from "../MobileMenu/MobileMenu"
import { FiArrowDown } from "react-icons/fi"
import useClickOutside from "../../hooks/useClickOutside"

export default function Navigation() {
  const { isVisible, ref, setIsVisible } = useClickOutside(false)

  return (
    <nav className={styles.Navigation_Wrapper}>
      <div className={styles.Navigtion_content}>
        <Logo className={styles.mobile_only} onClick={() => navigate("/")} />

        <MobileMenu />
        <div>
          <ul>
            <li
              style={{
                width: "150px",
              }}
            >
              <Logo />
            </li>
            <li>
              <div
                className={styles.DropdownMenu}
                onMouseLeave={() => setIsVisible(false)}
                onFocus={() => setIsVisible(true)}
                onBlur={() => setIsVisible(false)}
                role="button"
                tabIndex="0"
              >
                <button
                  ref={ref}
                  className={[
                    styles.Dropdown_button,
                    isVisible ? styles.is_open : "",
                  ].join(" ")}
                  onClick={() => setIsVisible(true)}
                  onMouseEnter={setIsVisible}
                >
                  Services <FiArrowDown />
                  <div
                    className={[
                      styles.Dropdown_container,
                      isVisible ? styles.is_open : "",
                    ].join(" ")}
                    onMouseLeave={() => setIsVisible(false)}
                  >
                    <Link to="/service-web-development">Web Development</Link>
                    <Link to="/service-webapplications">Web Applications</Link>
                    <Link to="/service-logodesign">Logo Design</Link>
                    <Link to="/service-ux">UI/UX Services</Link>
                  </div>
                </button>
              </div>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/ourwork">Our Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* </div> */}
        <div className={styles.Navigation_CTA}>
          <Button bg="primary" to="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  )
}
