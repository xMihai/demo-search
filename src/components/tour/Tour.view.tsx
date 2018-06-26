import React from 'react'
import * as S from './Tour.styled'

const Tour: React.ComponentType<Props> = ({ tour }) => (
  <S.Wrapper>
    <S.Column1>
      <div>
        <S.Photo src={tour.tour_image} />
      </div>
      <div>
        <S.Map src={tour.map_image} />
      </div>
    </S.Column1>
    <S.Column2>
      <S.Title>{tour.tour_name}</S.Title>
      <S.Description>{tour.description}</S.Description>
      <S.Table>
        <tbody>
          <tr>
            <S.LabelCell>Destinations</S.LabelCell>
            <S.ValueCell>
              {tour.destinations.length} destinations in {tour.country}
            </S.ValueCell>
          </tr>
          <tr>
            <S.LabelCell>Starts / ends in</S.LabelCell>
            <S.ValueCell>
              {tour.destinations[0]} / {tour.destinations[tour.destinations.length - 1]}
            </S.ValueCell>
          </tr>
          <tr>
            <S.LabelCell>Age range</S.LabelCell>
            <S.ValueCell>
              {tour.age_from} to {tour.age_to} year olds
            </S.ValueCell>
          </tr>
          <tr>
            <S.LabelCell>Operator</S.LabelCell>
            <S.ValueCell>{tour.tour_operator}</S.ValueCell>
          </tr>
        </tbody>
      </S.Table>
    </S.Column2>
  </S.Wrapper>
)

export default Tour

export interface Props {
  readonly tour: Tour
}
