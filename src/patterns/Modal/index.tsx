import Image from 'next/image';
import { useState } from 'react';
import CheckBox from '../../components/CheckBox';
import Footer from '../../components/Footer';
import { Price, SubPrice } from '../../styles/global';
import MenuList from '../MenuList';
import MenuListItem from '../MenuListItem';
import {
  ModalContainer, ModalContent, ModalClose, ModalImage,
  ModalInfo, Name, Detail, ModalSelectedItems, ModalSelectItems } from './styles';

interface Modal {
  active: Boolean;
  setActive: Function;
}

const Modal: React.FC<Modal> = ({ active, setActive }) => {
  const [amount, setAmount] = useState(0)
  return(
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
            <MenuListItem cols={4}>
              <Image src="/ellipse.png" width="45" height="45" />
              <p>Para 3 pessoas <br/>
              <span>Carne 1kg</span></p>
              <Price>R$ 9.00</Price>
              <CheckBox id="01"/>
            </MenuListItem>
            <MenuListItem cols={4}>
              <Image src="/ellipse.png" width="45" height="45" />
              <p>Para 3 pessoas <br/>
              <span>Carne 1kg</span></p>
              <Price>R$ 9.00</Price>
              <CheckBox id="02"/>
            </MenuListItem>
            <MenuListItem cols={4}>
              <Image src="/ellipse.png" width="45" height="45" />
              <p>Para 3 pessoas <br/>
              <span>Carne 1kg</span></p>
              <Price>R$ 9.00</Price>
              <CheckBox id="03"/>
            </MenuListItem>
            <MenuListItem cols={4}>
              <Image src="/ellipse.png" width="45" height="45" />
              <p>Para 3 pessoas <br/>
              <span>Carne 1kg</span></p>
              <Price>R$ 9.00</Price>
              <CheckBox id="04"/>
            </MenuListItem>
          </MenuList>
        </ModalSelectItems>
        <Footer>
          <a>
            <button onClick={() => { amount !== 0 ? setAmount(amount - 1) : "" }}>-</button>
            {amount}
            <button onClick={() => setAmount(amount + 1)}>+</button>
          </a>
          <span>Adicionar</span>
          <Price color="white">R$ 9.00</Price>
        </Footer>
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
