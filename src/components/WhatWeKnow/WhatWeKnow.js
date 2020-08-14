import React from "react"
import styles from "./WhatWeKnow.module.scss"

import {
  DiJsBadge,
  DiReact,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiWordpress,
  DiMongodb,
  DiMysql,
} from "react-icons/di"

export default function WhatWeKnow() {
  return (
    <div className={styles.Tech_stack}>
      <div>
        <div className={styles.iconCard}>
          <DiJsBadge />
          <p>Javascript</p>
        </div>
        <div className={styles.iconCard}>
          <DiReact />
          <p>React</p>
        </div>
        <div className={styles.iconCard}>
          <DiHtml5 />
          <p>HTML</p>
        </div>
        <div className={styles.iconCard}>
          <DiCss3 />
          <p>CSS</p>
        </div>
        <div className={styles.iconCard}>
          <DiNodejsSmall />
          <p>NodeJS</p>
        </div>
        <div className={styles.iconCard}>
          <DiWordpress />
          <p>Wordpress</p>
        </div>
        <div className={styles.iconCard}>
          <DiMysql />
          <p>MySQL</p>
        </div>
        <div className={styles.iconCard}>
          <DiMongodb />
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  )
}
