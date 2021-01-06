import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'

import SubmitButton from '../components/SubmitButton'
import SocialButton from '../components/SocialButton'
import InputFild from '../components/InputFild'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper-bundle.css';

import { Container } from '../styles/global'
import { Wrapper, Slider } from '../styles/homeStyle'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Home: React.FC<AppProps> = () => {
  return (
    <>
     <Head>
        <title>Cardápio Digital</title>
      </Head>
      <Slider
      slidesPerView={1}
      autoplay={true}
      pagination={{ clickable: true }} >
        <SwiperSlide>
          <img src="https://www.recipetineats.com/wp-content/uploads/2019/09/Ramen-3.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.recipetineats.com/wp-content/uploads/2019/09/Ramen_RamenStreet_YM-2.jpg" alt=""/>
        </SwiperSlide>
      </Slider>
      <Container>
        <InputFild placeholder="Nome" />
        <InputFild placeholder="Email ou Telefone" />
        <SubmitButton text="Entrar" />
        <Wrapper>ou</Wrapper>
        <SocialButton
        size="25"
        text="Continuar com Facebook"
        textColor='#FFFFFF'
        bgColor='#3D5A99'
        logo="/facebook.png" />
        <SocialButton
        size="25"
        textColor='#000000'
        bgColor='#FFFFFF'
        text="Continuar com Google"
        logo="/google.png" />
        <SocialButton
        size="25"
        bgColor='#000000'
        textColor='#FFFFFF'
        text="Continuar com Apple"
        logo="/apple.png" />
      </Container>
    </>
  )
}

export default Home
