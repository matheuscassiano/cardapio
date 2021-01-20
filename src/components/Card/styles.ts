import styled from 'styled-components'

const CardContainer = styled.div`
    width: calc(100% - 2em);
    padding: 1.5em;
    margin: 0 auto;
    box-shadow: 0 0 3px rgba(0, 0, 0, .3);
    border-radius: ${props => props.theme.radius.big};
`

export {
    CardContainer
}
