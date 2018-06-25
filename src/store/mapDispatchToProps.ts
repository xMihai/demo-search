import { bindActionCreators, Dispatch, ActionCreatorsMapObject } from 'redux'

const mapDispatchToProps = (actions: ActionCreatorsMapObject) => (dispatch: Dispatch) =>
  bindActionCreators(actions, dispatch)

export default mapDispatchToProps
