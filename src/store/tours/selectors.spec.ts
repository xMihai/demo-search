// tslint:disable:no-expression-statement
import { initialState } from '@@store/reducer'
import { SORTING } from './state'
import update from 'immutability-helper'
import {
  getData,
  getFilter,
  getMatchString,
  getDataWithMatcher,
  getFilterKeywords,
  getMatchingSortedList,
} from './selectors'
import tours from './__mocks__/tours.json'

describe('Tours selectors', () => {
  test('getData is getter', () => {
    const state = { ...initialState }
    expect(getData(state)).toBe(state.tours.data)
  })

  test('getFilter is getter', () => {
    const state = update(initialState, { tours: { filter: { $set: 'aaa' } } })
    expect(getFilter(state)).toBe('aaa')
  })

  test('getMatchString', () => {
    expect(getMatchString(tours[0])).toMatchSnapshot()
  })

  test('getDataWithMatcher', () => {
    const state = update(initialState, { tours: { data: { $set: tours } } })
    expect(getDataWithMatcher(state)).toMatchSnapshot()
  })

  test('getFilterKeywords > empty filter', () => {
    const state = update(initialState, { tours: { filter: { $set: '' } } })
    expect(getFilterKeywords(state)).toEqual([])
  })

  test('getFilterKeywords > short filter', () => {
    const state = update(initialState, { tours: { filter: { $set: 'aa' } } })
    expect(getFilterKeywords(state)).toEqual([])
  })

  test('getFilterKeywords > short keywords', () => {
    const state = update(initialState, { tours: { filter: { $set: 'aa bb CC' } } })
    expect(getFilterKeywords(state)).toEqual(['aa bb cc'])
  })

  test('getFilterKeywords > some long keywords', () => {
    const state = update(initialState, { tours: { filter: { $set: 'aa BB CCC' } } })
    expect(getFilterKeywords(state)).toEqual(['aa bb ccc', 'ccc'])
  })

  test('getMatchingSortedList > price sorting', () => {
    const state1 = update(initialState, {
      tours: { data: { $set: tours.slice(0, 10) }, sorting: { $set: SORTING.LOW_PRICE } },
    })
    const list1 = getMatchingSortedList(state1).map(tour => tour.length)
    const state2 = update(state1, { tours: { sorting: { $set: SORTING.HIGH_PRICE } } })
    const list2 = getMatchingSortedList(state2).map(tour => tour.length)
    list2.reverse()
    expect(list1).toEqual(list2)
  })

  test('getMatchingSortedList > duration sorting', () => {
    const state1 = update(initialState, {
      tours: { data: { $set: tours.slice(0, 10) }, sorting: { $set: SORTING.LONGEST } },
    })
    const list1 = getMatchingSortedList(state1).map(tour => tour.length)
    const state2 = update(state1, { tours: { sorting: { $set: SORTING.SHORTEST } } })
    const list2 = getMatchingSortedList(state2).map(tour => tour.length)
    list2.reverse()
    expect(list1).toEqual(list2)
  })
})
