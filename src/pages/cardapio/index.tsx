import { AppProps } from 'next/dist/next-server/lib/router/router'
import Image from 'next/image'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper.min.css';

import { Title, SubTitle, LineBreak } from '../../styles/global'
import { Background, Header, SliderMenu, SliderBanner,SliderPromotion, Footer } from './styles'
import InputFild from '../../components/InputFild'

import MenuList from '../../patterns/MenuList'
import MenuListItem from '../../patterns/MenuListItem'
import { useState } from 'react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Menu: React.FC<AppProps> = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
      <Background>
        <Header>
          <Title>Mesa 12</Title>
          <InputFild placeholder="Pesquisar pratos" />
          <SliderMenu slidesPerView={4}>
            <SwiperSlide>
              <Image src="/beer.png" width="25" height="25" />
              <span>Cervejas</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/beer.png" width="25" height="25" />
              <span>Caldos</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/beer.png" width="25" height="25" />
              <span>Refeições</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/beer.png" width="25" height="25" />
              <span>Petiscos</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/beer.png" width="25" height="25" />
              <span>Cervejas</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/beer.png" width="25" height="25" />
              <span>Caldos</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/beer.png" width="25" height="25" />
              <span>Refeições</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/beer.png" width="25" height="25" />
              <span>Petiscos</span>
            </SwiperSlide>
          </SliderMenu>
        </Header>
        <SliderBanner slidesPerView={1.3} spaceBetween={10}>
          <SwiperSlide onClick={() => setModalActive(true)}>
            <Image src="/banner.png" width="auto" height="130" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/banner.png" width="auto" height="130" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/banner.png" width="auto" height="130" />
          </SwiperSlide>
        </SliderBanner>
        <LineBreak />
        <SubTitle>Promoções</SubTitle>
        <SliderPromotion slidesPerView={1.8} spaceBetween={20}>
          <SwiperSlide>
            <Image src="/prom.png" width="auto" height="100" />
            <h6>Picanha na Chapa com Fritas</h6>
            <p>R$ 50.00 <span>R$ 66.00</span></p>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/prom.png" width="auto" height="100" />
            <h6>Picanha na Chapa com Fritas</h6>
            <p>R$ 50.00 <span>R$ 66.00</span></p>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/prom.png" width="auto" height="100" />
            <h6>Picanha na Chapa com Fritas</h6>
            <p>R$ 50.00 <span>R$ 66.00</span></p>
          </SwiperSlide>
        </SliderPromotion>
        <LineBreak />
        <SubTitle>Cervejas</SubTitle>
        <MenuList>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
            <strong>R$ 9.00</strong>
          </MenuListItem>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
            <strong>R$ 9.00</strong>
          </MenuListItem>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
            <strong>R$ 9.00</strong>
          </MenuListItem>
        </MenuList>
        <SubTitle>Caldos</SubTitle>
        <MenuList>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
            <strong>R$ 9.00</strong>
          </MenuListItem>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
            <strong>R$ 9.00</strong>
          </MenuListItem>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
            <strong>R$ 9.00</strong>
          </MenuListItem>
        </MenuList>
        <Footer>
          <span></span>
          <a>Ver bandeija</a>
          <span>R$ 9.00</span>
        </Footer>
      </Background>
    )
}

export default Menu
