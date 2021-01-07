import Image from 'next/image';
import { ModalContainer, ModalContent, ModalClose, ModalImage } from './styles';

interface Modal {
  active: Boolean;
  setActive: Function;
}

const Modal: React.FC<Modal> = ({ active, setActive }) => (
  <ModalContainer show={active}>
    <ModalContent>
    <ModalClose onClick={() => setActive(false) } >
      <Image src="/arrow-down.svg" width="24" height="24" layout="intrinsic" />
    </ModalClose>
      <ModalImage>
        <Image src="/prom.png" layout="fill" />
      </ModalImage>

    </ModalContent>
  </ModalContainer>
)

export default Modal
