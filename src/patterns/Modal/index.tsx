import Image from 'next/image';
import Footer from '../../components/Footer';
import { Price, SubPrice } from '../../styles/global';
import MenuList from '../MenuList';
import MenuListItem from '../MenuListItem';
import { ModalContainer, ModalContent, ModalClose, ModalImage, ModalInfo, Name, Detail, ModalSelectedItems, ModalSelectItems } from './styles';

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
        <p>A partir de <Price>R$ 70.00</Price> <SubPrice>R$ 88.00</SubPrice></p>
      </ModalInfo>
      <ModalSelectedItems>
        <div>
          <p>Escolha o tamanho</p>
          <p>0 de 1</p>
        </div>
        <span>Obrigatório</span>
      </ModalSelectedItems>
      <ModalSelectItems>
        <MenuList>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Para 3 pessoas <br/>
            <span>Carne 1kg</span></p>
            <Price>R$ 9.00</Price>
          </MenuListItem>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Para 3 pessoas <br/>
            <span>Carne 1kg</span></p>
            <Price>R$ 9.00</Price>
          </MenuListItem>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Para 3 pessoas <br/>
            <span>Carne 1kg</span></p>
            <Price>R$ 9.00</Price>
          </MenuListItem>
          <MenuListItem>
            <Image src="/ellipse.png" width="45" height="45" />
            <p>Para 3 pessoas <br/>
            <span>Carne 1kg</span></p>
            <Price>R$ 9.00</Price>
          </MenuListItem>
        </MenuList>
      </ModalSelectItems>
      <Footer>
        <a><button>-</button>1<button>+</button></a>
        <span>Adicionar</span>
        <span>R$ 9.00</span>
      </Footer>
    </ModalContent>
  </ModalContainer>
)

export default Modal
