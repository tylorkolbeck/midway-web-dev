import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import ContactForm from "../components/ContactForm/ContactForm"

export default function contact() {
  const hero = (
    <Hero
      heading="Contact Us"
      subText="Want to work together on your next web project? Send us a message and you will hear back from us within the next 24 hours!"
      size="half"
    />
  )
  return (
    <Layout sideNav hero={hero}>
      <section>
        <h1>Lets Work Together!</h1>
        <ContactForm />
      </section>
    </Layout>
  )
}
