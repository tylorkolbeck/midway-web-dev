import React from "react"

import styles from "../css/pages/index.module.scss"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import cloud_computing from "../assets/cloud_computing.svg"
import development from "../assets/development.svg"
import user_interface from "../assets/user_interface.svg"
import { FiArrowRight } from "react-icons/fi"
import meetTheTeam from "../assets/meet_the_team.svg"
import WhatWeKnow from "../components/WhatWeKnow/WhatWeKnow"

export default function Home() {
  return (
    <Layout>
      <Hero
        heading="We Build Things For The Web"
        subText="Professional website and web application development using the latest
          in modern web techonologies."
        size="half"
      />
      <main>
        <section>
          <div className={styles.Services_container}>
            <div className={styles.Service}>
              <div className={styles.Service_icon}>
                <img src={development} alt="Web Development" />
              </div>
              <h4>Website | Wordpress</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                numquam?
              </p>
              <Link to="/">
                Learn More <FiArrowRight />
              </Link>
            </div>
            <div className={styles.Service}>
              <div className={styles.Service_icon}>
                <img src={cloud_computing} alt="Cloud Computing" />
              </div>
              <h4>Web App | CMS</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                numquam?
              </p>
              <Link to="/">
                Learn More <FiArrowRight />
              </Link>
            </div>
            <div className={styles.Service}>
              <div className={styles.Service_icon}>
                <img src={user_interface} alt="UX and Design" />
              </div>
              <h4>Design | UX</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                numquam?
              </p>
              <Link to="/">
                Learn More <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.Homepage_section}>
          <div>
            <h1>Get Yourself Online</h1>
            <p style={{ fontWeight: "300" }}>
              Let us help you to{" "}
              <b>get your next business or web project online. </b> We have a
              talented team of experienced web developers and graphic designers
              so you can focus on starting your business and we will focus on
              getting you online.
            </p>
            <Link to="/">
              Learn More <FiArrowRight />
            </Link>
          </div>
          <div className={styles.svg_wrapper}></div>
        </section>

        <section className={styles.Homepage_section}>
          <div className={styles.svg_wrapper}></div>
          <div>
            <h1>Professional Services</h1>
            <p style={{ fontWeight: "300" }}>
              We can provide you with{" "}
              <b> technology that is fast, responsive </b>, and built using the
              latest in modern web technologies.
            </p>
            <Link to="/">
              Learn More <FiArrowRight />
            </Link>
          </div>
        </section>
        <WhatWeKnow />

        <section className={styles.MeetTheTeam}>
          <h1>Meet The Team</h1>

          <img src={meetTheTeam} alt="Meet The Team" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            odit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            tenetur?
          </p>
          <div
            style={{
              textAlign: "center",
              display: "inline-block",
              marginTop: "20px",
            }}
          >
            <Link to="/">
              Learn More <FiArrowRight />
            </Link>
          </div>
        </section>

        {/* <div style={{ height: "1000px" }}></div> */}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

// <div>
//         <h1
//           css={css`
//             display: inline-block;
//             border-bottom: 1px solid;
//           `}
//         >
//           Amazing Pandas Eating Things
//         </h1>
//         <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
//         {data.allMarkdownRemark.edges.map(({ node }) => (
//           <div key={node.id}>
//             <Link
//               to={node.fields.slug}
//               css={css`
//                 text-decoration: none;
//                 color: inherit;
//               `}
//             >
//               <h3
//                 css={css`
//                   margin-bottom: ${rhythm(1 / 4)};
//                 `}
//               >
//                 {node.frontmatter.title}{" "}
//                 <span
//                   css={css`
//                     color: #bbb;
//                   `}
//                 >
//                   — {node.frontmatter.date}
//                 </span>
//               </h3>
//             </Link>

//             <p>{node.excerpt}</p>
//           </div>
//         ))}
//       </div>
//       <h1>This is heading 1</h1>
//       <h2>This is heading 2</h2>
//       <h3>This is heading 3</h3>
//       <h4>This is heading 4</h4>
