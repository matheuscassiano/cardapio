import styled from 'styled-components'
import { Swiper } from 'swiper/react';

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

export {
    Container,
    Wrapper,
    Slider,
    Picture
}