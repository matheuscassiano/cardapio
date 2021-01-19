import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Container, Price, SubTitle, Title } from '../../styles/global'
import { Background, Info } from './styles'
import InputFild from '../../components/InputFild'
import Image from 'next/image'
import Link from 'next/link'
import { Order, TableLine, Total } from '../../patterns/Order'

const Table: React.FC<AppProps> = () => {
  return (
      <Background>
        <Title>Pagamento - Balcão</Title>
        <InputFild />
        <Order>
            <TableLine>
                <p>Subtotal</p>
                <Price>R$ 265.00</Price>
            </TableLine>
            <TableLine>
                <p>Taxa de Serviço</p>
                <Price>R$ 26.50</Price>
            </TableLine>
            <TableLine>
                <Total>Total</Total>
                <Price><Total>R$ 291.50</Total></Price>
            </TableLine>
        </Order>
      </Background>
    )
}

export default Table
