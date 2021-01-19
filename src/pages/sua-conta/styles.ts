import styled from 'styled-components'

const Background = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.color.background};
`

const Clean = styled.div`
    width: min(80vw, 250px);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    p {
        padding: 1em 0;
        text-align: center;
        font-size: ${props => props.theme.font.size.regular};
        font-weight: ${props => props.theme.font.weight.small};
    }
`

export {
    Background,
    Clean
}
