import React, { useState } from "react"
import Title from "./Title"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        description {
          name
          id
        }
        date
        position
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data

  const [value, setValue] = useState(0)

  const { company, position, date, description } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                className={`job-btn ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map(desc => {
            return (
              <div key={desc.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{desc.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        About Me
      </Link>
    </section>
  )
}

export default Jobs
