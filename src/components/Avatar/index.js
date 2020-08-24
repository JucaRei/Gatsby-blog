import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"
// fixed ou fluid
//fixed(width: 60, height: 60) {
// fluid tem que determinar o tamanho do container

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo-teste.jpg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )

  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
