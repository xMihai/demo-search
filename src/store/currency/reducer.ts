import { State } from './state'
import { ReducerMap } from 'redux-actions'

// Initial state
export const initialState: State = {
  currency: {
    conversion: { EUR: 1, USD: 0.8583, AUD: 0.6338 },
  },
}

// Configuration for building reducer
export const configMap: ReducerMap<State, any> = {}
