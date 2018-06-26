import React from 'react'
import * as S from './Tour.styled'

const Tour: React.ComponentType<Props> = ({ tour }) => (
  <S.Wrapper>
    <div>
      <S.Title>{tour.tour_name}</S.Title>
      <S.Description>{tour.description}</S.Description>
      <S.Table>
        <tbody>
          <S.Row>
            <S.LabelCell>Destinations</S.LabelCell>
            <S.ValueCell>
              {tour.destinations.length} destinations in {tour.country}
            </S.ValueCell>
          </S.Row>
          <S.Row>
            <S.LabelCell>Starts / ends in</S.LabelCell>
            <S.ValueCell>
              {tour.destinations[0]} / {tour.destinations[tour.destinations.length - 1]}
            </S.ValueCell>
          </S.Row>
          <S.Row>
            <S.LabelCell>Age range</S.LabelCell>
            <S.ValueCell>
              {tour.age_from} to {tour.age_to} year olds
            </S.ValueCell>
          </S.Row>
          <S.Row>
            <S.LabelCell>Operator</S.LabelCell>
            <S.ValueCell>{tour.tour_operator}</S.ValueCell>
          </S.Row>
        </tbody>
      </S.Table>
    </div>
  </S.Wrapper>
)

export default Tour

export interface Props {
  readonly tour: Tour
}
