import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  height: 4em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: ${props => props.theme.color.primary};
  z-index: 2;

  * {
    color: white;
    align-self: center;
    justify-self: center;
  }

  a {
    padding: .5em 1em;
    border-radius: 1.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.color.primary};
    font-size: ${props => props.theme.font.size.small};
    font-weight: ${props => props.theme.font.weight.medium};
    background-color: ${props => props.theme.color.background};
  }

  button {
    font-size: ${props => props.theme.font.size.regular};
    padding: 0 .5em;
    color: ${props => props.theme.color.primary};
    background-color: transparent;
  }
`
export default FooterContainer
