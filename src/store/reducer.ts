import { handleActions } from 'redux-actions'
import { ReducerMap } from 'redux-actions'
import * as Tours from './tours/reducer'
import * as Currency from './currency/reducer'
import { State } from './state'

const configMap = { ...Tours.configMap, ...Currency.configMap } as ReducerMap<State, any>
export const initialState: State = { ...Tours.initialState, ...Currency.initialState }

// Combined reducer
export default handleActions<State, any>(configMap, initialState)
