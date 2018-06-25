import { compose } from 'recompose'
import { connect } from 'react-redux'
import mapDispatchToProps from '@@store/mapDispatchToProps'
import App, { Props as ViewProps } from './App.view'
import actions from '@@store/actions'
import withLifecycle from '@hocs/with-lifecycle'
import { getMatchingList } from '@@store/tours/selectors'
import { State } from '@@store/tours/reducer'

export default compose<ViewProps, NoProps>(
  connect(
    (store: State) => ({
      list: getMatchingList(store),
    }),
    mapDispatchToProps({ fetch: actions.tours.fetch })
  ),
  withLifecycle({
    onDidMount: ({ fetch }: Props) => fetch(),
  })
)(App)

interface Props extends ViewProps {
  readonly fetch: typeof actions.tours.fetch
}
