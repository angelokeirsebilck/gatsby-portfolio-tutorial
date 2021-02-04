import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid
const About = ({
  data: {
    strapiAbout: {
      info,
      stack,
      title,
      image: {
        childImageSharp: { fluid },
      },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="About Me" description="about webdev" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(stack => {
                return <span key={stack.id}>{stack.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    strapiAbout {
      id
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      info
      stack {
        id
        title
      }
      title
    }
  }
`
export default About
