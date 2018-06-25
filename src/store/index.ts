import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// import reducer from './reducers'
import saga from './saga'
import reducer from './reducer'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

// then run the saga
// tslint:disable-next-line:no-expression-statement
sagaMiddleware.run(saga)

export default store
