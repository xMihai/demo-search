import { all } from 'redux-saga/effects'
import tourSaga from '@@store/tours/saga'
// import otherSaga from '@@store/other/saga'

export default function*(): IterableIterator<any> {
  yield all([tourSaga /*, otherSaga */])
}
