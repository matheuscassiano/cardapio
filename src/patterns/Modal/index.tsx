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

const Modal: React.FC<Modal> = ({ active, setActive, children }) => {
  const [amount, setAmount] = useState(0)
  return(
    <ModalContainer show={active}>
      <ModalContent>
      <ModalClose onClick={() => setActive(false) } >
        <Image src="/arrow-down.svg" width="24" height="24" />
      </ModalClose>
       {children}
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
