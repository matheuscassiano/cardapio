import styled from 'styled-components'
import { Swiper } from 'swiper/react';

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
  Wrapper,
  Slider,
  Picture
}