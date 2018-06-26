import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  background-color: #fff;
  margin-bottom: 16px;
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
