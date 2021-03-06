interface Tour {
  readonly id: number
  readonly tour_name: string
  readonly length: number
  readonly description: string
  readonly price: number
  readonly saving: number
  readonly currency: string
  readonly destinations: string[]
  readonly age_from: number
  readonly age_to: number
  readonly rating: number
  readonly tour_operator: string
  readonly country: string
  readonly tour_image: string
  readonly map_image: string
}

interface EnhancedTour extends Tour {
  readonly match: string
  readonly indexedPrice: number
}

interface RequestAction {
  readonly type: string
  readonly error?: false
  readonly payload: undefined
  readonly meta?: any
}

interface PayloadAction<T> {
  readonly type: string
  readonly error?: false
  readonly payload: T
  readonly meta?: any
}

interface ErrorAction {
  readonly type: string
  readonly error: true
  readonly payload: Error
  readonly meta?: any
}

// tslint:disable-next-line:interface-over-type-literal
type NoProps = {}

declare module '*/tours.json' {
  // tslint:disable-next-line:array-type
  const value: Array<Tour>
  export default value
}

interface ObjectMap<T> {
  readonly [key: string]: T
}
