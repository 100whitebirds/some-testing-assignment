import styled from 'styled-components'

export const CloseButton = styled.button`
  background: linear-gradient(to right, #03217b -50%, rgba(255, 255, 255, 0));
  color: white;
  border-radius: 2rem 0 0 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  cursor: pointer;
  border: none;
  position: absolute;
  width: 20vw;
  height: 1.5rem;
  right: 0;
  &:hover {
    background: linear-gradient(to right, #03217b -20%, rgba(255, 255, 255, 0));
  }
`