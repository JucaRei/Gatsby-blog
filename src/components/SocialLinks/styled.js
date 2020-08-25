import styled from "styled-components"

//Segurar todos o links de navegação
export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

//Lista de links
export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

//O item
export const SocialLinksItem = styled.li``

//O proprio link em si
export const SocialLinksLink = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`

// definir o tamanho do icone e definir o preenchimento
export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
