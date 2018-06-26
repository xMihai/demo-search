import React from 'react'
import Search from '@@components/search'
import * as S from './App.styled'

const App: React.ComponentType<Props> = () => (
  <S.Wrapper>
    <S.Content>
      <Search />
    </S.Content>
  </S.Wrapper>
)

export default App

export type Props = NoProps
