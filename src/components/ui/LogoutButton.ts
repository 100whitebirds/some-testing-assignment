import styled from 'styled-components'

export const LogoutButton = styled.button`
  background: linear-gradient(to right, #03217b 0%, deeppink 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 50%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  float: right;
  &:hover {
    background: linear-gradient(to right, #03217b 0%, rgba(255, 255, 255, 0));
  }
`