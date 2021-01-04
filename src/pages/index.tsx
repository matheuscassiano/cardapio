import { AppProps } from 'next/dist/next-server/lib/router/router'
import styled from 'styled-components'

import SubmitButton from '../components/SubmitButton'
import SocialButton from '../components/SocialButton'
import InputText from '../components/TextInput/index.tsx'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/components/pagination/pagination.min.css';


import Image from 'next/image'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Container = styled.form`
  width: 100%;
  padding: 2.5em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px -5px 100px 5px rgba(0, 0, 0, 0.25);
  border-radius: 50px 50px 0px 0px;
  position: fixed;
  bottom: 0;
  z-index: 2;
`

const Wrapper = styled.span`
  font-size: .8em;
  padding: 1em 0;
  color: rgba(0, 0, 0, 0.5);
`

const Slider = styled(Swiper)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.img`
  width: 100vw;
  height: 100vh;
  
  object-fit: cover;
`

const Home: React.FC<AppProps> = () => {
  return (
    <>
      <Slider
      slidesPerView={1}
      autoplay={true}
      pagination={{ clickable: true }} >
        <SwiperSlide>
          <Picture src="https://www.recipetineats.com/wp-content/uploads/2019/09/Ramen-3.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <Picture src="https://www.recipetineats.com/wp-content/uploads/2019/09/Ramen_RamenStreet_YM-2.jpg" alt=""/>
        </SwiperSlide>
      </Slider>
      <Container>
        <InputText name="Nome" placeholder="Nome" />
        <InputText name="Indicador" placeholder="Email ou Telefone" />
        <SubmitButton text="Entrar" />
        <Wrapper>ou</Wrapper>
        <SocialButton 
        bgColor='#3D5A99'
        textColor='#FFFFFF'
        text="Continuar com Faceboock" 
        logo="https://cdn.iconscout.com/icon/free/png-256/facebook-1865900-1581916.png" />
        <SocialButton 
        textColor='#000000' 
        bgColor='#FFFFFF'
        text="Continuar com Google"
        logo="https://cdn.iconscout.com/icon/free/png-256/google-231-432517.png" />
        <SocialButton 
        bgColor='#000000'
        textColor='#FFFFFF'
        text="Continuar com Apple"
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDzlgYsOMUxG8ejMtf11DfUObotAU7h-UvA&usqp=CAU" />
      </Container>
    </>
  )
}

export default Home
