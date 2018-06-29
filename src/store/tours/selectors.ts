import { createSelector } from 'reselect'

import { getConversion } from '@@store/currency/selectors'
import { SORTING } from './state'
import { State } from '@@store/state'

// Special character that divides keywords in an internal string. Cannot be used by user in search string.
const DIVIDER = '%'

export const getData = (state: State) => state.tours.data

export const getFilter = (state: State) => state.tours.filter

export const getSorting = (state: State) => state.tours.sorting

// Gets all relevant string properties, converts them to lowercase and concatenates all into one string
// TODO: convert characters with accents
export const getMatchString = (tour: Tour) =>
  [tour.tour_name, tour.description, tour.tour_operator, tour.country, ...tour.destinations]
    .map(s => s.toLocaleLowerCase())
    .join(DIVIDER)

// Get list of tours enhanced with match string
export const getDataWithMatcher = createSelector(
  [getData, getConversion],
  (data, conversion): EnhancedTour[] =>
    data.map(tour => ({
      ...tour,
      match: getMatchString(tour),
      indexedPrice: tour.price * (conversion[tour.currency] || 1),
    }))
)

// Get lowercase keywords with at least three letters
export const getFilterKeywords = createSelector([getFilter], filter =>
  [
    filter.toLocaleLowerCase(),
    ...filter
      .replace(/\W/g, ' ')
      .toLocaleLowerCase()
      .split(' '),
  ].filter(keyword => keyword.length >= 3)
)

const sortingFn = (key: keyof EnhancedTour) => (ascending: boolean) => (a: EnhancedTour, b: EnhancedTour): number => {
  if (a[key] > b[key]) return ascending ? 1 : -1
  if (a[key] < b[key]) return ascending ? -1 : 1
  return 0
}

const price = sortingFn('indexedPrice')
const tourLength = sortingFn('length')

const sortingMap = {
  [SORTING.LOW_PRICE]: price(true),
  [SORTING.HIGH_PRICE]: price(false),
  [SORTING.SHORTEST]: tourLength(true),
  [SORTING.LONGEST]: tourLength(false),
}

// Get the list of tours matching keywords, then sort
export const getMatchingSortedList = createSelector(
  [getDataWithMatcher, getFilterKeywords, getSorting],
  (data, keywords, sorting) => {
    const filteredData =
      keywords.length > 0 ? data.filter(tour => keywords.some(keyword => tour.match.includes(keyword))) : data
    return [...filteredData].sort(sortingMap[sorting])
  }
)
