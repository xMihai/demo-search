import { connect } from 'react-redux'
import Search, { Props as ViewProps } from './Search.view'
import { getMatchingSortedList } from '@@store/tours/selectors'
import { State } from '@@store/state'

export default connect<ViewProps>((store: State) => ({
  list: getMatchingSortedList(store),
}))(Search)
