import { AppProps } from 'next/dist/next-server/lib/router/router'
import Image from 'next/image'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperSlide } from 'swiper/react'
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper.min.css';

import { Title, SubTitle, LineBreak } from '../../styles/global'
import { Background, Header, SliderMenu, SliderBanner } from './styles'
import InputFild from '../../components/InputFild'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Menu: React.FC<AppProps> = () => {
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
        <SliderBanner slidesPerView={1.3} spaceBetween={20}>
          <SwiperSlide>
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
        <SliderBanner slidesPerView={1.8} spaceBetween={20}>
          <SwiperSlide>
            <Image src="/prom.png" width="auto" height="100" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/prom.png" width="auto" height="100" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/prom.png" width="auto" height="100" />
          </SwiperSlide>
        </SliderBanner>
        <LineBreak />
      </Background>
    )
}

export default Menu
