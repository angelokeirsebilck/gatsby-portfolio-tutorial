import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const Blog = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogItems },
  } = data
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="blog-page">
        <Blogs blogs={blogItems} title="Blog Page" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs(sort: { fields: date, order: DESC }) {
      nodes {
        category
        content
        date(formatString: "MMMM Do, YYYY")
        description
        title
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        id
      }
    }
  }
`
export default Blog
