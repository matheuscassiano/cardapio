import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Order, TableLine, Total } from '../../components/Order'
import { InputField } from '../../components/InputField'

import { Price, Title } from '../../styles/global'
import { Background, ImageContainer } from './styles'

import Balcony from '../../assets/balcony.svg'

const Table: React.FC<AppProps> = () => {
    return (
        <Background>
            <Title>Pagamento - Balcão</Title>
            <InputField placeholder="Cupom de desconto" />
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
                    <p>Cupom de desconto</p>
                    <Price>- R$ 45.00</Price>
                </TableLine>
                <TableLine>
                    <Total>Total</Total>
                    <Price><Total>R$ 246.50</Total></Price>
                </TableLine>
            </Order>
            <ImageContainer>
                <Balcony />
                <p>Pague sua conta diretamente no balcão</p>
            </ImageContainer>
        </Background>
    )
}

export default Table
