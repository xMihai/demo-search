import { compose, withProps } from 'recompose'
import { connect } from 'react-redux'
import Sort, { Props as ViewProps } from './Sort.view'
import { SORTING } from '@@store/tours/state'
import { State } from '@@store/state'
import mapDispatchToProps from '@@store/mapDispatchToProps'
import { getSorting } from '@@store/tours/selectors'
import actions from '@@store/actions'

export default compose<ViewProps, Props>(
  connect<StateProps, {}, Props, State>(
    (state: State) => ({ selected: getSorting(state) }),
    mapDispatchToProps({ select: actions.tours.sort })
  ),
  withProps<PropsStage2, ReduxProps>({
    options: {
      [SORTING.LOW_PRICE]: 'Lowest price first',
      [SORTING.HIGH_PRICE]: 'Highest price first',
      [SORTING.LONGEST]: 'Longest tour first',
      [SORTING.SHORTEST]: 'Shortest tour first',
    },
  })
)(Sort)

export type Props = NoProps

interface StateProps {
  readonly selected: SORTING
}

interface DispatchProps {
  readonly select: (value: string) => void
}

type ReduxProps = StateProps & DispatchProps

interface PropsStage2 {
  readonly options: ObjectMap<string>
}
