import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./Navigation.module.scss"
import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import MobileMenu from "../MobileMenu/MobileMenu"
import { FiArrowDown } from "react-icons/fi"
import useClickOutside from "../../hooks/useClickOutside"

export default function Navigation() {
  const { isVisible, ref, setIsVisible } = useClickOutside(false)
  const [state, setState] = useState({
    servicesTabOpen: false,
  })

  function toggleServicesTabHandler() {
    // setState(prevState => {
    //   return {
    //     ...state,
    //     servicesTabOpen: !prevState.servicesTabOpen,
    //   }
    // })
    setIsVisible(true)
  }
  return (
    <nav className={styles.Navigation_Wrapper}>
      <div className={styles.Navigtion_content}>
        <div>
          <MobileMenu />
          <ul>
            <li>
              <Logo />
            </li>
            <li>
              <div className={styles.DropdownMenu}>
                <button
                  ref={ref}
                  className={[
                    styles.Dropdown_button,
                    isVisible ? styles.is_open : "",
                  ].join(" ")}
                  onClick={toggleServicesTabHandler}
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
                    <Link to="/contact">Web Development</Link>
                    <Link to="/">Web Applications</Link>
                    <Link to="/">Logo Design</Link>
                    <Link to="/">UX</Link>
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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <Button bg="light">Contact Us</Button>
        </div>
      </div>
    </nav>
  )
}
