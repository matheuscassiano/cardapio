import styled from 'styled-components'
import { Swiper } from 'swiper/react'

const Background = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #FFFFFF;

  h2 {
    width: calc(100% - 1em);
    margin-left: 1em;
    padding-bottom: 0;
  }
`

const Header = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 15px 15px;
}
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
`;

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
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);
    border-radius: ${props => props.theme.radius.medium};
  }
`;

export {
  Background,
  Header,
  SliderMenu,
  SliderBanner
}
