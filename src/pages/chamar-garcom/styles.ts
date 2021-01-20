import styled from 'styled-components'

const Background = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.color.background};
`

const Content = styled.section`
  width: calc(100% - 5em);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Info = styled.p`
  text-align: center;
  padding: 1em .5em;
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.weight.small};
`

export {
    Background,
    Content,
    Info
}
