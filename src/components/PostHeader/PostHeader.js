import React from "react"
import styles from "./PostHeader.module.scss"
import { IoMdPricetag } from "react-icons/io"

import {
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share"

export default function PostHeader({ author, tags, date, avatar }) {
  const url = typeof window !== "undefined" ? window.location.href : ""
  return (
    <div className={styles.PostHeader}>
      <div className={styles.infoBox}>
        <img src={avatar} alt={author} className={styles.avatar} />
        <div className={styles.infoBox2}>
          <div className="blue-heading-italic" style={{ marginBottom: "0px" }}>
            By: {author} on {date}
          </div>
          <div className={styles.Tags}>
            <IoMdPricetag />{" "}
            {tags.map(tag => {
              return <span key={tag}>{tag}</span>
            })}
          </div>
        </div>
      </div>
      <div className={styles.socialMediaLinks}>
        <TwitterShareButton url={url}>
          <TwitterIcon round={true} url={url} size={32} />
        </TwitterShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon round={true} url={url} size={32} />
        </FacebookShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon round={true} url={url} size={32} />
        </LinkedinShareButton>
      </div>
    </div>
  )
}
