import React from "react"
//import { StaticQuery, graphql } from "gatsby" // buscar dados usando o staticQuery via graphql
import { useStaticQuery, graphql } from "gatsby" // usando react hooks

import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  // renderizar esse dados
  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}
// query igual a IDE do graphql
// const Profile = () => (
//   <StaticQuery
//     query={graphql`
//       query MySiteMetadata {
//         site {
//           siteMetadata {
//             title
//             position
//             description
//           }
//         }
//       }
//     `}

// um dos jeitos de fazer a requisição
// render={data=> (
//   <div className="Profile-wrapper">
//     <h1>{data.site.siteMetadata.title}</h1>
//     <h2>{data.site.siteMetadata.position}</h2>
//     <p>{data.site.siteMetadata.author}</p>
//   </div>
// )}

//outro utilizando o destructuring, para ter menos repetição
//   render={({
//     site: {
//       siteMetadata: { title, position, description },
//     },
//   }) => (
//     <div className="Profile-wrapper">
//       <h1>{title}</h1>
//       <h2>{position}</h2>
//       <p>{description}</p>
//     </div>
//   )}
// />

export default Profile
