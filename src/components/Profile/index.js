import React from 'react'
import { StaticQuery, graphql } from 'gatsby'  // buscar dados usando o staticQuery

const Profile = () => (
  <StaticQuery
      query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `}
    render={({site: {siteMetadata: { title, position, description}}}) => (
      // destructuring
      <div className="Profile-wrapper">
        <h1>{title}</h1>
        <h2>{position}</h2>
        <p>{description}</p>
      </div>
    )}
  />
)

export default Profile