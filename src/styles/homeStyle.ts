import styled from 'styled-components'
import { Swiper } from 'swiper/react';

const Background = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Wrapper = styled.span`
  font-size: .8em;
  padding: 1em 0;
  color: rgba(0, 0, 0, 0.5);
`

const Slider = styled(Swiper)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover
  }
`

export {
  Background,
  Wrapper,
  Slider
}
