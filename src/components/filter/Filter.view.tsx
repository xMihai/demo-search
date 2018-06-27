import React from 'react'
import * as S from './Filter.styled'

const Search: React.ComponentType<Props> = ({ filter }) => (
  <S.Input onChange={event => filter(event.target.value)} placeholder={'Search...'} />
)

export default Search

export interface Props {
  readonly filter: (value: string) => void
}
