import actions from '@@store/actions'
import fetchSaga from '@@store/fetch.saga'

// On this action, fetch URL and emit
export default fetchSaga('https://api.myjson.com/bins/18x6yt', actions.tours.fetch)
