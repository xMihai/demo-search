import React from 'react'

const Search: React.ComponentType<Props> = ({ filter }) => <input onChange={event => filter(event.target.value)} />

export default Search

export interface Props {
  readonly filter: (value: string) => void
}
