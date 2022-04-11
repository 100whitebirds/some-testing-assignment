import styled from 'styled-components'

export const SubmitButton = styled.button`
  margin-top: 1vh;
  margin-bottom: 2vh;
  background: linear-gradient(to right, #03217b -50%, rgba(255, 255, 255, 0));
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 60%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem 0 0 2rem;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #03217b -20%, rgba(255, 255, 255, 0));
  }
`