import styled from 'styled-components'

const Button = styled.button`
  width: calc(100% - 6em);
  height: ${props => props.theme.field.height};
  display: flex;
  align-items: center;
  margin: .25em 0;
  padding: 0 2em;
  text-align: left;
  font-size: ${props => props.theme.button.fontSize};
  font-weight: ${props => props.theme.button.fontWeight};
  border-radius: ${props => props.theme.button.radius};
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
