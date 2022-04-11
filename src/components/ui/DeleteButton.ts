import styled from 'styled-components'

export const DeleteButton = styled.button`
  background: linear-gradient(to left, #03217b -50%, rgba(0, 0, 0, 0));
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 50%;
  height: 2rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  &:hover {
    background: linear-gradient(to left, #03217b -20%,  rgba(0, 0, 0, 0));
  }
`