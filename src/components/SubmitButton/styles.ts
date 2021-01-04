import styled from 'styled-components'

const Button = styled.button`
  width: ${props => props.theme.field.width};
  height: ${props => props.theme.field.height};
  color: white;
  margin: ${props => props.theme.field.gap.min};
  font-size: ${props => props.theme.font.size};
  font-weight: ${props => props.theme.font.weight};
  border-radius: ${props => props.theme.field.radius};
  background: #8BBE8A;
  box-shadow: 0px 0px 5px rgba(139, 190, 138, 0.25);
`

export default Button
