import styled from 'styled-components'
interface SocialButton {
  bgColor: any;
  textColor: any;
}

const Button = styled.button<SocialButton>`
  width: ${props => props.theme.field.width};
  height: ${props => props.theme.field.height};
  display: flex;
  align-items: center;
  margin: ${props => props.theme.field.gap.small};
  padding: 0 2em;
  text-align: left;
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.weight.small};
  border-radius: ${props => props.theme.radius.medium};
  border: ${props => props.bgColor == "#FFFFFF" ? '1px solid black' : '0'};
  color: ${props => props.textColor};
  background: ${props => props.bgColor};
  box-shadow: 0px 0px 3.5px ${props => `${props.bgColor}80`};

  span {
    margin-left: 1em
  }
`
export { Button }
