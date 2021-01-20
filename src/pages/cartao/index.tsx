import { AppProps } from 'next/dist/next-server/lib/router/router'
import { InputBreak, InputField } from '../../components/InputField'
import { Order, TableLine, Total } from '../../components/Order'
import Card from '../../components/Card'

import { Price, Title, Label } from '../../styles/global'
import { Background } from './styles'

import CardImage from '../../assets/card.svg'
import PixImage from '../../assets/pix.svg'

const Table: React.FC<AppProps> = () => {
  return (
      <Background>
        <Title>Pagamento - Cartão</Title>
        <Order>
            <InputField placeholder="Cupom de desconto" />
            <TableLine>
                <p>Subtotal</p>
                <Price>R$ 265.00</Price>
            </TableLine>
            <TableLine>
                <p>Taxa de Serviço</p>
                <Price>R$ 26.50</Price>
            </TableLine>
            <TableLine>
                <p>Cupom de desconto</p>
                <Price>- R$ 45.00</Price>
            </TableLine>
            <InputField placeholder="Cupom de desconto" as="select">
                <option value="1">Parcelar em 1x</option>
                <option value="2">Parcelar em 2x</option>
                <option value="3">Parcelar em 3x</option>
            </InputField>
            <TableLine>
                <Total>Total</Total>
                <Price><Total>R$ 246.50</Total></Price>
            </TableLine>
        </Order>
        <Card>
            <InputBreak>
                <CardImage />
                <PixImage />
            </InputBreak>
            <br/>
            <Label>Nome do titular do cartão </Label>
            <InputField />
            <Label>CPF do titular</Label>
            <InputField />
            <Label>Número do cartão</Label>
            <InputField />
            <InputBreak>
                <Label>Data de validade
                    <InputField />
                </Label>
                <Label>CVC
                    <InputField />
                </Label>
            </InputBreak>
        </Card>
      </Background>
    )
}

export default Table
