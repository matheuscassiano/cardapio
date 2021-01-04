import styled from 'styled-components'

const Button = styled.button`
  width: ${props => props.theme.field.width};
  height: ${props => props.theme.field.height};
  display: flex;
  align-items: center;
  margin: ${props => props.theme.field.gap.small};
  padding: 0 2em;
  text-align: left;
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.weight.small};
  border-radius: ${props => props.theme.field.radius};
  border: ${props => props.bgColor == "#FFFFFF" ? '1px solid black' : '0'};
  color: ${props => props.textColor};
  background: ${props => props.bgColor};
  box-shadow: 0px 0px 3.5px ${props => `${props.bgColor}80`};

  img {
    width: 2em;
    height: 2em;
    margin: 0 1em;
    object-fit: contain;
  }
`

export default Button
