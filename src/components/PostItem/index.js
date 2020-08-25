import React from "react"

import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink to="/slug">
    <S.PostItemWrapper>
      {/* Tipo de Post / propriedade background*/}
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          30 de Janeiro de 2020 · 4 min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>Velit ut consequat laborum amet enim.</S.PostItemTitle>
        <S.PostItemDescription>
          Exercitation do sint consectetur id ad officia ea.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
