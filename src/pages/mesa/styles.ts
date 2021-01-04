import styled from 'styled-components'

const Background = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #2E65C6;
`

const Title = styled.h1`
  color: white;
  text-align: center;
  padding: ${props => props.theme.field.gap.big};
  font-size: ${props => props.theme.font.size.regular};
  font-weight: ${props => props.theme.font.weight.regular};
`

const Subtitle = styled.h2`
  width: ${props => props.theme.field.width};
  padding-bottom: 1.5em;
  font-size: ${props => props.theme.font.size.regular};
  font-weight: ${props => props.theme.font.weight.medium};
`
export {
  Background,
  Title,
  Subtitle
}
