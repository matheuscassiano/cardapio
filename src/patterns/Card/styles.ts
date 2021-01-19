import styled from 'styled-components'

const CardContainer = styled.div`
    width: 100%;
    padding: 1.5em;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    border-radius: ${props => props.theme.radius.big};
`

export default CardContainer
