import { connect } from 'react-redux'
import Search, { Props as ViewProps } from './Search.view'
import { getMatchingSortedList } from '@@store/tours/selectors'
import { State } from '@@store/tours/reducer'

export default connect<ViewProps>(
  (store: State) => ({
    list: getMatchingSortedList(store),
  }),
  null,
  null,
  {
    areStatePropsEqual: (a, b) => {
      return false
    },
  }
)(Search)
