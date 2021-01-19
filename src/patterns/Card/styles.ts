import styled from 'styled-components'

const CardContainer = styled.div`
    width: calc(100% - 2em);
    padding: 1.5em;
    margin: 0 auto;
    box-shadow: 0 0 3px rgba(0, 0, 0, .3);
    border-radius: ${props => props.theme.radius.big};
`

const Label = styled.label`
    margin-top: .5em;
    font-size: ${props => props.theme.font.size.small};
    font-weight: ${props => props.theme.font.weight.regular};
`

export {
    CardContainer,
    Label
}
