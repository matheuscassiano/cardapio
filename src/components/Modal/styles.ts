import styled, { keyframes } from 'styled-components'
import { SubTitle } from '../../styles/global';

interface Modal {
  show: Boolean;
}

const up = keyframes`
  from {
    transform: translateY(100%)
  }

  to {
    transform: translateY(0)
  }
`

const ModalContainer = styled.div<Modal>`
  display: ${({show}) => show ? "block" : "none"};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .6);
  z-index: 2;
`

const ModalContent = styled.div`
  max-width: 31em;
  width: 100%;
  min-height: 30vh;
  height: auto;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  padding-bottom: 3em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 50px 50px 0px 0px;
  animation: ${up} .2s ease-in-out forwards;
  background-color: ${props => props.theme.color.background};

  @media (min-width: 31em) {
    margin: 0 calc((100vw - 31em) / 2);
  }
`

const ModalHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 1.5em 1em;
  position: fixed;
  top: 0;
  z-index: 2;
`

const ModalClose = styled.div`
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.radius.full};
  background-color: rgba(255, 255, 255, .7);
`

const ModalTitle = styled.h3`
  justify-self: center;
  font-weight: 500;
`

const ModalImage = styled.div`
  height: 25vh;
  div {
    height: 25vh;

    img {
      object-fit: cover
    }
  }
`

const ModalInfo = styled.div`
  padding: 1em;
`

const Name = styled(SubTitle)`
  margin-left: 0 !important;
  font-weight: ${props => props.theme.font.weight.regular};
`

const Detail = styled.p`
  margin: 1em 0;
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.weight.small};
`

const ModalSelectedItems = styled.div`
  height: 3.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  color: #5E5E5E;
  background-color: #CFD3D8;
  font-size: ${props => props.theme.font.size.small};

  span {
    padding: .3em .5em;
    color: white;
    border-radius: 1em;
    background-color: #363636;
    font-size: ${props => props.theme.font.size.small};
    font-weight: ${props => props.theme.font.weight.medium};
  }
`

const ModalSelectItems = styled.div`
  min-height: 8em;
  max-height: 28vh;
  overflow: auto;
`

const BackgroundImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2em;

  p {
    padding: 1em;
    font-size: ${props => props.theme.font.size.regular};
    font-weight: ${props => props.theme.font.weight.regular};
  }
`

export {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalClose,
  ModalTitle,
  ModalImage,
  ModalInfo,
  Name,
  Detail,
  ModalSelectedItems,
  ModalSelectItems,
  BackgroundImageContainer
}
