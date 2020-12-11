import styled from "styled-components"

//componente responsavel por segurar todo o layout
export const LayoutWrapper = styled.section`
  display: flex;
`

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;

  /* & = significa que é filho 
     &.body =  significa que ta junto
  */
  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
`
