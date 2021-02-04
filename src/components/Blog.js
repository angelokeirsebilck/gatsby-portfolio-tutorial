import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({
  category,
  date,
  description,
  title,
  id,
  slug,
  image: {
    childImageSharp: { fluid },
  },
}) => {
  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
      <article>
        <Image fluid={fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Blog
