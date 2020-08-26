import React from "react"
import styles from "../css/pages/resume.module.scss"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import Link from "../components/Link/Link"
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai"

export default function resume() {
  const hero = (
    <Hero
      size="half"
      heading="Tylor Kolbeck"
      subText="UI/UX Developer | Web Developer | Navy Veteran"
    />
  )
  return (
    <Layout hero={hero} sideNav>
      <section className={styles.Resume_top}>
        <div className={styles.Profile_image}>IMAGE HERE</div>
        <div className={styles.Header_info}>
          <div>
            <h1 className={styles.Name}>Tylor Kolbeck</h1>
            <h2 className={styles.Title}>Founder</h2>
          </div>
          <div>
            <p>San Diego CA</p>
            <p style={{ display: "flex", alignItems: "center" }}>
              tylor.kolbeck@email.com
            </p>
            <div className={styles.Resources}>
              <div className={styles.SocialMedia}>
                <Link to="/">
                  <AiFillLinkedin />
                </Link>

                <Link to="/">
                  <AiFillTwitterSquare />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor
          hic dolorem odit architecto nostrum pariatur quibusdam non consectetur
          recusandae at qui placeat sit, reprehenderit impedit eius
          exercitationem adipisci quos harum vitae laboriosam corrupti nobis?
          Officia, consequuntur quia. Pariatur blanditiis dicta eligendi autem
          obcaecati at. Dolore dolorum fugiat minus, ipsa ab impedit autem
          dolorem, magni facere quidem tempora expedita ex. Voluptatibus libero
          laborum, obcaecati dolorem sequi necessitatibus itaque debitis ipsa
          dolore dolores aspernatur veritatis, velit ullam illo soluta?
          Veritatis explicabo itaque possimus doloribus quia error ut aliquid
          consequatur omnis qui aliquam voluptatum, laborum exercitationem
          voluptates amet, incidunt quae, illo voluptas!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse impedit
          temporibus porro qui, sed aspernatur enim soluta reprehenderit
          architecto inventore cupiditate doloribus incidunt, beatae aliquam
          corporis asperiores, quam suscipit rem. Explicabo quidem asperiores
          exercitationem nisi architecto eum earum illo at non repellendus
          deleniti ducimus vel reiciendis, esse ratione sed. Aliquam.
        </p>
      </section>
    </Layout>
  )
}
