import styled from 'styled-components'
import Table from '../../assets/table.svg'
import Arrow from '../../assets/arrow-right.svg'

const Background = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.color.secoundary};

  div {
    align-self: normal;
  }
`

const TableImage = styled(Table)`

`
const ArrowImage = styled(Arrow)`

`

const Info = styled.p`
  text-align: center;
  width: ${props => props.theme.field.width};
  margin: ${props => props.theme.field.gap.medium};
  font-size: ${props => props.theme.font.size.regular};
  font-weight: ${props => props.theme.font.weight.small};
`

const Button = styled.button`
  width: 6em;
  height: 6em;
  border-radius: ${props => props.theme.radius.full};
  background-color: ${props => props.theme.color.secoundary};
  box-shadow: 0px 0px 10px ${props => props.theme.color.secoundary}f0;
`

export {
  Background,
  TableImage,
  ArrowImage,
  Info,
  Button
}
