import Image from 'next/image';
import Footer from '../../components/Footer';
import { ModalContainer, ModalContent, ModalClose, ModalImage, ModalInfo, Name, Detail } from './styles';

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
      </ModalImage>
      <ModalInfo>
        <Name>Picanha na Chapa com Fritas</Name>
        <Detail>Medalhão de picanha feiro na  chapa com manteiga de garrafa</Detail>
        <span>A partir de R$ 70.00 R$ 88.00</span>
      </ModalInfo>
      <Footer>
        <a><button>-</button>1<button>+</button></a>
        <span>Adicionar</span>
        <span>R$ 9.00</span>
      </Footer>
    </ModalContent>
  </ModalContainer>
)

export default Modal
