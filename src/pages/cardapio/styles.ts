import styled from 'styled-components'
import { Swiper } from 'swiper/react'

const Background = styled.main`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 3em;
  background-color: ${props => props.theme.color.background};

  h2 {
    width: calc(100% - 1em);
    margin-left: 1em;
    padding-bottom: 0;
  }

  input {
    width: calc(100% - 4em);
    display: block;
    margin: auto;
  }

  hr {
    width: calc(100% - 2em);
    margin: 0 1em 1em;
  }
`

const Header = styled.div`
  border-radius: 0px 0px 15px 15px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`

const SliderMenu = styled(Swiper)`
  padding: ${props => props.theme.field.gap.medium};

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    z-index: 10;
  }

  .swiper-slide:first-child {
    margin-left: 1em;
  }

  img {
    margin: .5em 0;
    object-fit: contain;
  }
`

const SliderBanner = styled(Swiper)`
  padding-left: 0;
  margin: ${props => props.theme.field.gap.medium};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.radius.regular};
  }

  .swiper-slide:first-child {
    margin-left: 1em;
  }

  .swiper-slide {
    display: flex;
    border-radius: ${props => props.theme.radius.medium};
  }
`

const SliderPromotion = styled(Swiper)`
  padding-left: 0;
  margin: ${props => props.theme.field.gap.medium};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.radius.medium};
  }

  .swiper-slide:first-child {
    margin-left: 1em;
  }

  h6 {
    font-size: ${props => props.theme.font.size.small};
    font-weight: ${props => props.theme.font.weight.medium};
  }

  p span, p strong {
    font-size: ${props => props.theme.font.size.small};
    font-weight: ${props => props.theme.font.weight.small};
  }
`

export {
  Background,
  Header,
  SliderMenu,
  SliderBanner,
  SliderPromotion
}
