import { ReducerMap, Action } from 'redux-actions'
import update from 'immutability-helper'
import { increment, decrement, isRequestAction, isPayloadAction, isErrorAction } from '@@store/helpers'

export enum SORTING {
  LOW_PRICE,
  HIGH_PRICE,
  LONGEST,
  SHORTEST,
}

// Initial state
export const initialState: State = {
  tours: {
    data: [],
    fetching: 0,
    init: false,
    error: null,
    filter: '',
    sorting: SORTING.LOW_PRICE,
  },
}

// Configuration for building reducer
export const configMap: ReducerMap<State, any> = {
  TOURS: {
    FETCH: (state: State, action: Action<Tour[] | Error>) => {
      if (isRequestAction(action)) return update(state, { tours: { fetching: { $apply: increment } } })
      if (isPayloadAction(action))
        return update(state, {
          tours: { fetching: { $apply: decrement }, data: { $set: action.payload }, init: { $set: true } },
        })
      if (isErrorAction(action))
        return update(state, {
          tours: { fetching: { $apply: decrement }, error: { $set: (action.payload as Error).message } },
        })
      return state
    },
    FILTER: (state: State, action: Action<string>) => update(state, { tours: { filter: { $set: action.payload } } }),
    SORT: (state: State, action: Action<string>) =>
      update(state, { tours: { sorting: { $set: !!action.payload ? +action.payload : 0 } } }),
  },
}

export interface State {
  readonly tours: {
    readonly data: Tour[]
    // In practice, there may be more than one request at a time, thus type is number instead of boolean
    readonly fetching: number
    readonly init: boolean
    readonly error: null | string
    readonly filter: string
    readonly sorting: SORTING
  }
}
