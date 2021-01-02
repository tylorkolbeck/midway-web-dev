import React from "react"
import styles from "./ClientModal.styles.module.scss"
import { Card } from "../Card/Card"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function Work({ clientData, closeModal }) {
  const { name, link, description, logoImg, services } = clientData

  return (
    <Card onClick={closeModal} className={styles.ClientModal_Card}>
      <div className={styles.Logo_Container}>
        <img src={logoImg.fluid.src} alt="logo" />
      </div>

      <Card.Content>
        <Card.Title>{name}</Card.Title>

        {documentToReactComponents(description.json)}
      </Card.Content>

      <Card.Footer>
        <div style={{ marginTop: "50px" }}>
          {link ? (
            <a href={link} target="_BLANK">
              Visit Company
            </a>
          ) : null}
        </div>

        <Card.Tags tags={services} />
      </Card.Footer>
    </Card>
  )
}
