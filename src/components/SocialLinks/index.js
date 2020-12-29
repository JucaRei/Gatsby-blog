import React from "react"

import Icons from "./icons"
import links from "./content"

import * as S from "./styled"

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {/* varrer o array de icones */}
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItem key={i}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

// target vai abrir em outra aba
export default SocialLinks
