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
    margin-left: 2em;
  }

  hr {
    width: calc(100% - 2em);
    margin: 0 1em 1em;
  }
`

const Header = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 15px 15px;
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
    /* width: 100%; */
    display: flex;
    /* box-shadow: 0px 0px 5px rgba(0, 0, 0, .5); */
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

  p {
    color: #8BBE8A;
    font-size: ${props => props.theme.font.size.small};
  }

  span {
    color: #A0A0A0;
    font-style: italic;
    text-decoration-line: line-through;
    font-weight: ${props => props.theme.font.weight.small};
  }
`

const Footer = styled.footer`
  width: 100%;
  height: 4em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: fixed;
  bottom: 0;
  background-color: ${props => props.theme.color.primary};

  a, span {
    align-self: center;
    justify-self: center;
  }

  a {
    padding: .5em 1em;
    border-radius: 1.5em;
    color: ${props => props.theme.color.primary};
    font-size: ${props => props.theme.font.size.small};
    font-weight: ${props => props.theme.font.weight.medium};
    background-color: ${props => props.theme.color.background};
  }

  span {
    color: white;
  }
`

export {
  Background,
  Header,
  SliderMenu,
  SliderBanner,
  SliderPromotion,
  Footer
}
