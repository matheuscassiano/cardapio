import styled from 'styled-components'

const Input = styled.input`
  width: ${props => props.theme.field.width};
  height: ${props => props.theme.field.height};
  padding: 0 1em;
  margin: ${props => props.theme.field.gap.small};
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.weight.small};
  border-radius: ${props => props.theme.field.radius};
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  ::placeholder { /* Internet Explorer 10-11 */
    color: #A0A0A0;
  }
`

export default Input
