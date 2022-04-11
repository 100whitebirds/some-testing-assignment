import styled from 'styled-components'

export const Table = styled.table`
  display: flex;
  flex-direction: row;
  border-radius: 0.6rem;
  box-shadow: 0px 0px 10px blue;
  width: 70vw;
  padding: 10px;
  margin: 10px;

  @media only screen and (max-width: 1030px) {
    font-size: 12px;
    flex-direction: column;
  }
`

export const THead = styled.thead`
  display: flex;
  flex-direction: column;
  width: 20vw;

  @media only screen and (max-width: 1030px) {
    width: 80vw;
  }
`

export const TBody = styled.tbody`
  display: flex;
  flex-direction: column;
`

export const TR = styled.tr`
  display: flex;
  flex-direction: column;
`

export const TH = styled.th`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;

  @media only screen and (max-width: 1030px) {
    flex-direction: column;
  }
`

export const H4 = styled.h4`
  margin-right: 20px;
`