import { compose } from 'recompose'
import { connect } from 'react-redux'
import mapDispatchToProps from '@@store/mapDispatchToProps'
import actions from '@@store/actions'
import Search from './Search.view'
import debounceHandler from '@hocs/debounce-handler'

export default compose(
  connect(
    null,
    mapDispatchToProps({ filter: actions.tours.filter })
  ),
  debounceHandler('filter', 500)
)(Search)
