import { TableContainer, Table, TableLine, ButtonContainer, Button, Total } from './styles';

const Order: React.FC = ({ children }) => {
  return(
      <TableContainer>
        <Table>
            {children}
            <ButtonContainer>
                <Button>Pagar no Balcão</Button>
                <Button>Pagar Online</Button>
            </ButtonContainer>
        </Table>
    </TableContainer>
  )
}

export {
    Order,
    TableLine,
    Total
}
