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

export enum SORTING {
  LOW_PRICE,
  HIGH_PRICE,
  LONGEST,
  SHORTEST,
}
