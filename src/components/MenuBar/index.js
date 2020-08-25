import React from "react"

import * as S from "./styled"

// Icones
import { Home3 as Home } from "@styled-icons/icomoon/Home3"
import { SearchAlt as Search } from "@styled-icons/boxicons-regular/SearchAlt"
import { ArrowCircleUp as Arrow } from "@styled-icons/material/ArrowCircleUp"
import { LightBulb as Light } from "@styled-icons/heroicons-solid/LightBulb"
import { GridFourUp as Grid } from "@styled-icons/open-iconic/GridFourUp"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema">
        <Light />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o Topo">
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)
export default MenuBar
