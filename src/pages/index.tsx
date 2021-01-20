import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'

import SubmitButton from '../components/SubmitButton'
import SocialButton from '../components/SocialButton'
import { InputField } from '../components/InputField'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper-bundle.css';

import { Container } from '../styles/global'
import { Background, Wrapper, Slider } from '../styles/homeStyle'
import Image from 'next/image'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Home: React.FC<AppProps> = () => {
  return (
    <Background>
     <Head>
        <title>Cardápio Digital</title>
      </Head>
      <Slider
      slidesPerView={1}
      autoplay={true}
      pagination={{ clickable: true }} >
        <SwiperSlide>
          <Image src="/food-one.png" alt="one" layout="fill"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/food-one.png" alt="one" layout="fill"/>
        </SwiperSlide>
      </Slider>
      <Container>
        <InputField placeholder="Nome" />
        <InputField placeholder="Email ou Telefone" />
        <SubmitButton href="/mesa">Entrar</SubmitButton>
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
    </Background>
  )
}

export default Home
