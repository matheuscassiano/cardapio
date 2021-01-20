import { AppProps } from 'next/dist/next-server/lib/router/router'
import { InputBreak, InputField } from '../../components/InputField'
import { Order, TableLine, Total } from '../../components/Order'
import Card from '../../components/Card'

import { Price, Title, Label, Button } from '../../styles/global'
import { Background, SliderContent } from './styles'

import CardImage from '../../assets/card.svg'
import PixImage from '../../assets/pix.svg'
import PixOne from '../../assets/pix-01.svg'

import { useState } from 'react'
import { Modal } from '../../components/Modal'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper-bundle.css';

const Table: React.FC<AppProps> = () => {
  const [selected, setSelected] = useState("card")
  const [pixModalActive, setPixModalActive] = useState(false)

  return (
      <Background>
        <Title>Pagamento - {selected === "card" ? "Cartão" : "PIX"}</Title>
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
                <CardImage onClick={() => setSelected('card')} />
                <PixImage onClick={() => setSelected('pix')} />
            </InputBreak>
            <br/>
            {selected === "card" ? (
                <>
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
                </>     
            ): (
                <>
                <Label>Nome completo</Label>
                <InputField />
                <Label>CPF</Label>
                <InputField />
                </>
            )}
        </Card>
        {selected === "card" ? (
        <Button>Pagar com Cartão</Button>
        ): (
            <Button onClick={() => setPixModalActive(true)}>Copiar chave PIX</Button>
        )}
        <Modal active={pixModalActive} setActive={setPixModalActive}>
        <Swiper 
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}>
            <SwiperSlide>
            <SliderContent>
                    <PixOne />
                    <h4>É super facil pagar com o PIX!</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </SliderContent>
            </SwiperSlide>
            <SwiperSlide>
                <SliderContent>
                    <PixOne />
                    <h4>É super facil pagar com o PIX!</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </SliderContent>
            </SwiperSlide>
            <SwiperSlide>
                <SliderContent>
                    <PixOne />
                    <h4>É super facil pagar com o PIX!</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </SliderContent>
            </SwiperSlide>
        </Swiper>
        </Modal>
      </Background>
    )
}

export default Table
