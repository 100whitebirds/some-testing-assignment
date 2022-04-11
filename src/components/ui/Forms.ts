import styled from 'styled-components'

export const Form = styled.div`
  align-items: left;
`

export const FormGroup = styled.div`
  align-items: center;
	color: palevioletred;
  display: flex;
	margin: 20px auto;
  @media only screen and (max-width: 600px) {
    margin: 3px;
    font-size: 12px;
    flex-direction: column;
  }
`

export const Label = styled.label`
	margin-bottom: 1rem;
	color: white;
  display: block;
`

export const ErrorLabel = styled.label`
  text-align: center;
	margin-bottom: 1rem;
	color: red;
  text-shadow: 0px 0px 10px red;
  display: block;
`

export const Message = styled.label`
	margin-bottom: 1rem;
	color: white;
  display: block;
`