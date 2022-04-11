import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  upload: (e: any) => void
}

export const FileInput: FC<Props> = ({ upload }) => (
  <Div>
    <Input 
      type='file'
      id="file"
      onChange={upload}
    />
    <label htmlFor="file">
      <i></i>
      <Span>Загрузить фото</Span>
    </label>
  </Div>
)

const Input = styled.input`
  display: none;
`

const Span = styled.span`
  cursor: pointer;
`

const Div = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  max-width: 60%;
  height: 1rem;
  padding: 0.5rem;
  margin: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 0.8rem;
  font-weight: bold;
  &:hover {
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`