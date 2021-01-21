import styled from 'styled-components'
interface SocialButton {
  bgColor: string;
  textColor: string;
}

const Button = styled.button<SocialButton>`
  max-width: 30em;
  display: flex;
  align-items: center;
  padding: 0 2em;
  text-align: left;
  width: ${props => props.theme.field.width};
  height: ${props => props.theme.field.height};
  margin: ${props => props.theme.field.gap.small};
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.weight.small};
  border-radius: ${props => props.theme.radius.medium};
  border: ${({ bgColor }) => bgColor == "#FFFFFF" ? '1px solid black' : '0'};
  color: ${({ textColor }) => textColor};
  background: ${({ bgColor }) => bgColor};
  box-shadow: 0px 0px 3.5px ${({ bgColor }) => `${bgColor}80`};

  span {
    margin-left: 1em
  }
`
export { Button }
