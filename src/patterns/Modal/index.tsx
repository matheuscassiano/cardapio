import Image from 'next/image';
import Footer from '../../components/Footer';
import { ModalContainer, ModalContent, ModalClose, ModalImage } from './styles';

interface Modal {
  active: Boolean;
  setActive: Function;
}

const Modal: React.FC<Modal> = ({ active, setActive }) => (
  <ModalContainer show={active}>
    <ModalContent>
    <ModalClose onClick={() => setActive(false) } >
      <Image src="/arrow-down.svg" width="24" height="24" />
    </ModalClose>
      <ModalImage>
        <Image src="/prom.png" layout="fill" />
      </ModalImage>``
      <Footer>
        <a><button>-</button>1<button>+</button></a>
        <span>Adicionar</span>
        <span>R$ 9.00</span>
      </Footer>
    </ModalContent>
  </ModalContainer>
)

export default Modal
