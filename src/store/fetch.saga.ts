import { put, takeEvery } from 'redux-saga/effects'
import { ActionFunctionAny, Action } from 'redux-actions'
import { isRequestAction } from '@@store/helpers'

// API saga worker
// emits response or Error as action payload
const worker = <T>(url: string, actionCreator: ActionFunctionAny<Action<T>>) =>
  function*(action: Action<T>): IterableIterator<any> {
    if (isRequestAction(action)) {
      const response: Response = yield fetch(url)
      if (response.ok) {
        const body = yield response.json()
        yield put(actionCreator(body))
      } else yield put(actionCreator(new Error(response.statusText)))
    }
  }

// On every action.type encounter, fetch the URL and use the actionCreator to emit response as payload
export default <T>(url: string, actionCreator: ActionFunctionAny<Action<T>>) =>
  takeEvery(actionCreator().type, worker(url, actionCreator))
