import { bindActionCreators, Dispatch, ActionCreatorsMapObject } from 'redux'

const mapDispatchToProps = <T = any>(actions: ActionCreatorsMapObject<T>) => (dispatch: Dispatch) =>
  bindActionCreators(actions, dispatch)

export default mapDispatchToProps
