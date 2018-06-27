import React from 'react'
import * as S from './Sort.styled'

const Sort: React.ComponentType<Props> = ({ sort, options, selected }) => (
  <S.Select onChange={event => sort(event.target.value)}>
    {Object.keys(options).map(value => <option {...{ value, selected: selected === value }}>{options[value]}</option>)}
  </S.Select>
)

export default Sort

export interface Props {
  readonly options: ObjectMap<string>
  readonly selected: string
  readonly sort: (value: string) => void
}
