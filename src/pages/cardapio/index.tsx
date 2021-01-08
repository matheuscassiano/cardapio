import { AppProps } from 'next/dist/next-server/lib/router/router'
import Image from 'next/image'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper.min.css';

import { Title, SubTitle, LineBreak, Price, SubPrice } from '../../styles/global'
import { Background, Header, SliderMenu, SliderBanner, SliderPromotion } from './styles'
import InputFild from '../../components/InputFild'
import Footer from '../../components/Footer';

import MenuList from '../../patterns/MenuList'
import MenuListItem from '../../patterns/MenuListItem'
import { useEffect, useState } from 'react';
import Modal from '../../patterns/Modal';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Menu: React.FC<AppProps> = () => {
  const [modalActive, setModalActive] = useState(false)
  const [sizeScreen, setSizeScreen] = useState({width: 100, height: 100})

  useEffect(() => {
    setSizeScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])
  
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
        <SliderBanner slidesPerView={sizeScreen.width >= 750 ? 2 : 1.3} spaceBetween={10}>
          <SwiperSlide onClick={() => setModalActive(true)}>
            <Image src="/banner.png" width={sizeScreen.width >= 750 ? 430 : "auto"} height={sizeScreen.width >= 750 ? 200 : 130} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/banner.png" width={sizeScreen.width >= 750 ? 430 : "auto"} height={sizeScreen.width >= 750 ? 200 : 130} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/banner.png" width={sizeScreen.width >= 750 ? 430 : "auto"} height={sizeScreen.width >= 750 ? 200 : 130} />
          </SwiperSlide>
        </SliderBanner>
        <LineBreak />
        <SubTitle>Promoções</SubTitle>
        <SliderPromotion slidesPerView={sizeScreen.width >= 750 ? 2.8 : 1.8} spaceBetween={20}>
          <SwiperSlide>
            <Image src="/prom.png"width={sizeScreen.width >= 750 ? 350 : "auto"} height={sizeScreen.width >= 750 ? 200 : 100} />
            <h6>Picanha na Chapa com Fritas</h6>
            <p><Price>R$ 50.00</Price> <SubPrice>R$ 66.00</SubPrice></p>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/prom.png" width={sizeScreen.width >= 750 ? 350 : "auto"} height={sizeScreen.width >= 750 ? 200 : 100} />
            <h6>Picanha na Chapa com Fritas</h6>
            <p><Price>R$ 50.00</Price> <SubPrice>R$ 66.00</SubPrice></p>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/prom.png" width={sizeScreen.width >= 750 ? 350 : "auto"} height={sizeScreen.width >= 750 ? 200 : 100} />
            <h6>Picanha na Chapa com Fritas</h6>
            <p><Price>R$ 50.00</Price> <SubPrice>R$ 66.00</SubPrice></p>
          </SwiperSlide>
        </SliderPromotion>
        <LineBreak />
        <SubTitle>Cervejas</SubTitle>
        <MenuList>
        <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
            <Price>R$ 9.00</Price>
          </MenuListItem>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
            <Price>R$ 9.00</Price>
          </MenuListItem>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
            <Price>R$ 9.00</Price>
          </MenuListItem>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
            <Price>R$ 9.00</Price>
          </MenuListItem>
        </MenuList>
        <SubTitle>Caldos</SubTitle>
        <MenuList>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
            <Price>R$ 9.00</Price>
          </MenuListItem>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
            <Price>R$ 9.00</Price>
          </MenuListItem>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
            <Price>R$ 9.00</Price>
          </MenuListItem>
        </MenuList>
        <Footer>
          <span></span>
          <a>Ver bandeija</a>
          <Price color="white">R$ 9.00</Price>
        </Footer>
        <Modal active={modalActive} setActive={setModalActive} />
      </Background>
    )
}

export default Menu
