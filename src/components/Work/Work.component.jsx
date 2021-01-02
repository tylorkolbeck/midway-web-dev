import React from "react"
import styles from "./Work.styles.module.scss"
import { Card } from "../Card/Card"
import LinkToNowhere from "../LinkToNowhere/LinkToNowhere.component"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function Work({
  data,
  onClick,
  descriptionPreview,
  description,
}) {
  const { name, link, logoImg, services } = data
  return (
    <Card onClick={onClick}>
      <div className={styles.Logo_Container}>
        <img src={data.logoImg.fluid.src} alt="logo" />
      </div>
      {descriptionPreview && (
        <Card.Content>
          <p>{descriptionPreview}...</p>
        </Card.Content>
      )}

      {description && (
        <Card.Content>{documentToReactComponents(description)}</Card.Content>
      )}

      <Card.Footer>
        <LinkToNowhere text="Learn More" />
        <Card.Tags tags={services} />
      </Card.Footer>
    </Card>
  )
}
