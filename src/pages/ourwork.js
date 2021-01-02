import React from "react"
import styles from "../css/pages/ourWork.module.scss"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
// Implememnt gatsby image to optimize loading speed
// import Image from "gatsby-image"
import Work from "../components/Work/Work.component"
import Modal from "../components/Modal/Modal.component"
import ModalBackground from "../components/Modal/ModalBackground.component"
import ClientModal from "../components/ClientModal/ClientModal.component"

export default function OurWork({ data }) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false)

  function toggleModal(event, clientData) {
    if (!modalIsOpen && clientData) {
      document.body.classList.add('modal-open');
      setModalIsOpen(clientData)
    } else {
      document.body.classList.remove('modal-open');
      setModalIsOpen(false)
    }
  }

  const { allContentfulClient: clients } = data

  const heroComponent = (
    <Hero
      heading="Our Work"
      subText="These are clients that we have had the privilege of working with at MWD."
    />
  )
  return (
    <>
      {modalIsOpen && <ModalBackground onClick={toggleModal} />}
      <Modal shown={modalIsOpen} toggleModal={toggleModal}>
        {modalIsOpen && (
          <ClientModal clientData={modalIsOpen} closeModal={toggleModal} />
        )}
      </Modal>

      <Layout hero={heroComponent} sideNav>
        <section>
          <div className={styles.Work_Cards}>
            {clients.nodes.map(client => (
              <Work
                key={client.id}
                data={client}
                descriptionPreview={client.descriptionPreview}
                onClick={event => toggleModal(event, client)}
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query GetClientData {
    allContentfulClient(sort: { fields: createdAt, order: ASC }) {
      nodes {
        id
        link
        name
        services
        descriptionPreview
        description {
          json
        }
        logoImg {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
