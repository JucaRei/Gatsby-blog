import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: #192734;
  border-left: 1px solid #38444d;
  display: flex;
  flex-direction: column;
  /* empilhar tudo */
  height: 100vh;
  /* um grupo encima, outro embaixo */
  justify-content: space-between;
  padding: 0.8rem 0;
  /* vai sempre ocupar aquela posição */
  position: fixed;
  right: 0;
  width: 3.75rem;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  &:hover {
    color: #1fa1f2;
  }
`