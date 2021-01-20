import styled from 'styled-components'

const Background = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 .5em;
  background-color: ${props => props.theme.color.background};
`

const Button = styled.button`
  width: calc(100% - 2em);
  color: white;
  font-size: ${props => props.theme.font.size.small};
  padding: .8em;
  margin: 1.5em 0;
  border-radius: ${props => props.theme.radius.medium};
  background-color: ${props => props.theme.color.primary};
`

export {
  Background,
  Button
}
