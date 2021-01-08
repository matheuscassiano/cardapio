import styled from 'styled-components'

const List = styled.ul`
    padding: 0;
    list-style: none;
    overflow: auto;

    @media (min-width: ${props => props.theme.device.tablet1}px) {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start
    }
`

export default List
