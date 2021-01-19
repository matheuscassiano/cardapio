import styled from 'styled-components'

const TableContainer = styled.section`
  width: 100%;
  padding: 0 1.5em;
`

const Table = styled.div`
  width: 100%;
`

const TableLine = styled.p`
    display: flex;
    justify-content: space-between;
    margin: .5em 0;
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5em;
`

const Button = styled.button`
    width: 47%;
    color: white;
    padding: .8em 1.5em;
    font-size: ${props => props.theme.font.size.small};
    font-weight: ${props => props.theme.font.weight.medium};
    border-radius: ${props => props.theme.radius.medium};

    :first-child {
        background-color: ${props => props.theme.color.yellow};
        box-shadow: 0 0 10px ${props => props.theme.color.yellow}80;
    }

    :last-child {
        background-color: ${props => props.theme.color.primary};
        box-shadow: 0 0 10px ${props => props.theme.color.primary}80;
    }
`

const Total = styled.span`
    font-size: ${props => props.theme.font.size.regular};
    font-weight: ${props => props.theme.font.weight.big};
`

export {
    TableContainer,
    Table,
    TableLine,
    ButtonContainer,
    Button,
    Total,
}
