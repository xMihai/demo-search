import React from 'react'
import Tour from '@@components/tour'
import Search from '@@components/search'
import './App.styled'

const App: React.ComponentType<Props> = ({ list }) => (
  <div>
    <div>
      <Search />
    </div>
    <div>{list.map(tour => <Tour {...{ tour, key: tour.id }} />)}</div>
  </div>
)

export default App

export interface Props {
  readonly list: Tour[]
}
