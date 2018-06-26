import React from 'react'
import Tour from '@@components/tour'
import Filter from '@@components/filter'

const Search: React.ComponentType<Props> = ({ list }) => (
  <div>
    <div>
      <Filter />
    </div>
    <div>{list.map(tour => <Tour {...{ tour, key: tour.id }} />)}</div>
  </div>
)

export default Search

export interface Props {
  readonly list: Tour[]
}
