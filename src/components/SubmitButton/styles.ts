import styled from 'styled-components'

const Button = styled.button`
  width: calc(100% - 6em);
  height: ${props => props.theme.field.height};
  border: 0;
  color: white;
  margin: ${props => props.theme.button.gapY};
  font-size: ${props => props.theme.button.fontSize};
  font-weight: ${props => props.theme.button.fontWeight};
  border-radius: ${props => props.theme.button.radius};
  background: #8BBE8A;
  box-shadow: 0px 0px 5px rgba(139, 190, 138, 0.25);
`

export default Button
