import { compose } from 'recompose'
import { connect } from 'react-redux'
import mapDispatchToProps from '@@store/mapDispatchToProps'
import actions from '@@store/actions'
import Search, { Props as ViewProps } from './Filter.view'
import debounceHandler from '@hocs/debounce-handler'

export default compose<ViewProps, Props>(
  connect(
    null,
    mapDispatchToProps({ filter: actions.tours.filter })
  ),
  debounceHandler('filter', 300)
)(Search)

export type Props = NoProps
