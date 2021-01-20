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

const SliderContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 3em 0;
  padding: 0 3em;
  text-align: center;
`

export {
  Background,
  Button,
  SliderContent
}
