import React from 'react'
import Tour from '@@components/tour'
import Filter from '@@components/filter'
import Sort from '@@components/sort'
import * as S from './Search.styled'

const Search: React.ComponentType<Props> = ({ list }) => (
  <div>
    <S.Bar>
      <S.FilterWrapper>
        <Filter />
      </S.FilterWrapper>
      <S.LabelWrapper>Sort by</S.LabelWrapper>
      <S.SortWrapper>
        <Sort />
      </S.SortWrapper>
    </S.Bar>
    <div>{list.map(tour => <Tour {...{ tour, key: tour.id }} />)}</div>
  </div>
)

export default Search

export interface Props {
  readonly list: Tour[]
}
