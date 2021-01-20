import { TableContainer, Table, TableLine, ButtonContainer, Button, Total } from './styles';

const Order: React.FC = ({ children }) => {
  return(
      <TableContainer>
        <Table>
            {children}
        </Table>
    </TableContainer>
  )
}

export {
    Order,
    TableLine,
    Total,
    ButtonContainer, 
    Button
}
