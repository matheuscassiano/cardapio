import styled from 'styled-components'

const Background = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.color.blue};
`

const Info = styled.p`
  text-align: center;
  width: ${props => props.theme.field.width};
  margin: ${props => props.theme.field.gap.medium};
  font-size: ${props => props.theme.font.size.regular};
  font-weight: ${props => props.theme.font.weight.small};
`

const Button = styled.button`
  width: 6em;
  height: 6em;
  border-radius: ${props => props.theme.radius.full};
  background-color: ${props => props.theme.color.blue};
  box-shadow: 0px 0px 10px ${props => props.theme.color.blue}f0;
`

export {
  Background,
  Info,
  Button
}
