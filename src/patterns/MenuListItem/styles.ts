import styled from 'styled-components'

const Item = styled.li`
    padding: 1em 0;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

    img {
        align-self: center;
        justify-self: center;
        object-fit: contain;
    }

    p {
        align-self: center;
    }

    strong {
        align-self: center;
        justify-self: center;
        color: ${props => props.theme.color.secoundary};
        font-size: ${props => props.theme.font.size.small};
        font-weight: ${props => props.theme.font.weight.medium};
    }
`

export default Item
