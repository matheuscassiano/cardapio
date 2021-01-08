import styled from 'styled-components'

const Label = styled.label`
  width: 1.2em;
  height: 1.2em;
  margin-left: 0 !important;
  background-color: lightgray;
  border-radius: ${props => props.theme.radius.full};
`

const Input = styled.input`
  display: none !important;
  border: 0;
  
  :checked + label {
    background-color: ${props => props.theme.color.primary};
  }
`

export {
  Label,
  Input
}
