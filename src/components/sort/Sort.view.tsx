import React from 'react'
import { SORTING } from '@@store/tours/reducer'
import * as S from './Sort.styled'

const Sort: React.ComponentType<Props> = ({ select, options, selected }) => (
  <S.Select onChange={event => select(event.target.value)} value={selected}>
    {Object.keys(options).map(value => <option {...{ value, key: value }}>{options[value]}</option>)}
  </S.Select>
)

export default Sort

export interface Props {
  readonly options: ObjectMap<string>
  readonly selected: SORTING
  readonly select: (value: string) => void
}
