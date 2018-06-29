import * as Tours from './tours/state'
import * as Currency from './currency/state'

export type State = Tours.State & Currency.State
