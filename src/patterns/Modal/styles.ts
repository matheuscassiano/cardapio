import styled, { keyframes } from 'styled-components'

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
  width: 100%;
  height: calc(100vh - 15em);
  overflow-x: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 50px 50px 0px 0px;
  animation: ${up} .2s linear forwards;
  background-color: ${props => props.theme.color.background};
`

const ModalClose = styled.div`
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1em;
  left: 1em;
  border-radius: ${props => props.theme.radius.full};
  background-color: rgba(255, 255, 255, .7);
  z-index: 2;
`

const ModalImage = styled.div`
  div {
    height: 25vh;

    img {
      object-fit: cover
    }
  }
`

export {
  ModalContainer,
  ModalContent,
  ModalClose,
  ModalImage
}
