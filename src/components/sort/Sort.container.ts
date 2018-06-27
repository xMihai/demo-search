import { compose, withProps } from 'recompose'
import Sort, { Props as ViewProps } from './Sort.view'

export default compose<ViewProps, Props>(
  withProps<ViewProps, Props>({
    options: {
      'low-price': 'Lowest price first',
      'high-price': 'Highest price first',
      'long-tour': 'Longest tour first',
      'short-tour': 'Shortest tour first',
    },
    selected: 'low-price',
    sort: () => 0,
  })
)(Sort)

export type Props = NoProps
