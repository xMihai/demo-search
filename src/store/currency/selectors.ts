import { State } from '@@store/state'

export const getConversion = (state: State) => state.currency.conversion
