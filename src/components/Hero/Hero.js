import React from "react"
import styles from "./Hero.module.scss"

/**
 *
 * @param {String} heading Heading text
 * @param {String} subText Sub text
 * @param {String} bg pri
 * @param {Component} children
 */

export default function Hero({
  size,
  bg,
  heading,
  subText,
  children,
  centered,
}) {
  const heroSize = size || "half"
  const heroBackgound = bg || ""

  return (
    <div
      className={[
        styles.Hero_wrapper,
        styles[heroSize],
        styles[heroBackgound],
      ].join(" ")}
    >
      {centered ? (
        <div className={styles.centered}>
          {heading && <h1>{heading}</h1>}
          {subText && <p>{subText}</p>}
          {children && <div className={styles.Content}>{children}</div>}
        </div>
      ) : (
        <div className={styles.HomePageHero_wrapper}>
          <div>
            <h1 className="h1-xl">
              {heading}
              <span className="blue-dot">.</span>
            </h1>
            <hr className="blue-hr"></hr>
            <p className={styles.SubText}>{subText}</p>
          </div>
          <div></div>
          {children && <div className={styles.Content}>{children}</div>}
        </div>
      )}
    </div>
  )
}

{
  /* <div>
{heading && <h1>{heading}</h1>}
{subText && <p>{subText}</p>}
{children && <div className={styles.Content}>{children}</div>}
</div> */
}
