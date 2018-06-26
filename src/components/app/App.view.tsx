import React from 'react'
import Tour from '@@components/tour'

import './styled'

const App: React.ComponentType<Props> = ({ list }) => <div>{list.map(tour => <Tour {...{ tour }} />)} </div>

export default App

export interface Props {
  readonly list: Tour[]
}
