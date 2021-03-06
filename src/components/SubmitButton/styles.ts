import styled from 'styled-components'

const Button = styled.button`
  max-width: 30em;
  color: white;
  box-shadow: 0px 0px 5px rgba(139, 190, 138, 0.25);
  width: ${props => props.theme.field.width};
  height: ${props => props.theme.field.height};
  margin: ${props => props.theme.field.gap.small};
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.small};
  border-radius: ${props => props.theme.radius.medium};
  background-color: ${props => props.theme.color.secoundary};
`

export default Button
