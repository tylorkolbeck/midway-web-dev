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
      <h1>What We Know</h1>
      <div>
        <div>
          <DiJsBadge />
          <p>Javascript</p>
        </div>
        <div>
          <DiReact />
          <p>React</p>
        </div>
        <div>
          <DiHtml5 />
          <p>HTML</p>
        </div>
        <div>
          <DiCss3 />
          <p>CSS</p>
        </div>
        <div>
          <DiNodejsSmall />
          <p>NodeJS</p>
        </div>
        <div>
          <DiWordpress />
          <p>Wordpress</p>
        </div>
        <div>
          <DiMysql />
          <p>MySQL</p>
        </div>
        <div>
          <DiMongodb />
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  )
}
