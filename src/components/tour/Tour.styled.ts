import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 16px;
`
export const Column1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 96px;
`

export const Column2 = styled.div`
  flex-grow: 1;
  margin-left: 16px;
`

export const Column3 = styled.div`
  width: 200px;
  margin-left: 16px;
`

export const Title = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: bold;
`
export const Description = styled.div`
  font-size: 12px;
  line-height: 2;
`
export const Table = styled.table`
  font-size: 12px;
  line-height: 16px;
`
export const LabelCell = styled.td`
  color: #999;
  text-transform: uppercase;
  padding: 0 8px 0 0;
  font-size: 10px;
`
export const ValueCell = styled.td`
  padding: 0;
`

const Image = styled.img`
  width: 100%;
  display: block;
`

export const Photo = Image.extend`
  margin-bottom: 8px;
`

export const Map = Image

export const PriceWrapper = styled.div`
  display: flex;
`

export const SavingsColumn = styled.div`
  width: 50%;
`
export const PriceColumn = SavingsColumn.extend`
  text-align: right;
`

export const PriceLabel = styled.div`
  font-size: 12px;
`

export const SavingsNumber = styled.div`
  font-size: 14px;
`

export const PriceNumber = SavingsNumber.extend`
  font-weight: bold;
`
export const DurationWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`

export const Break = styled.hr<{ readonly opaque: boolean }>`
  border-width: 1px;
  opacity: ${({ opaque }) => (opaque ? 0.5 : 0.3)};
`
