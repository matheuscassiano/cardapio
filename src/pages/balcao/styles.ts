import styled from 'styled-components'

const Background = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 .5em;
  background-color: ${props => props.theme.color.background};

  input {
    width: calc(100% - 2em);
    margin-bottom: 2em;
  }
`

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
        max-width: 50vw;
    }
`

export {
  Background,
  ImageContainer
}
