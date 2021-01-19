import styled from 'styled-components'

const Background = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.color.background};
`

const Content = styled.section`
    width: 100%;
    height: calc(100vh - 8em);
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding-bottom: 5em;
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

const AddMore = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em 0;
`

export {
    Background,
    Content,
    Clean,
    AddMore
}
