import { compose } from 'recompose'
import { connect } from 'react-redux'
import mapDispatchToProps from '@@store/mapDispatchToProps'
import App, { Props as ViewProps } from './App.view'
import actions from '@@store/actions'
import withLifecycle from '@hocs/with-lifecycle'

export default compose<ViewProps, NoProps>(
  connect(
    null,
    mapDispatchToProps({ fetch: actions.tours.fetch })
  ),
  withLifecycle<PropsStage1>({
    onDidMount: ({ fetch }) => fetch(),
  })
)(App)

interface PropsStage1 extends ViewProps {
  readonly fetch: typeof actions.tours.fetch
}
