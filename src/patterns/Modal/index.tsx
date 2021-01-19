import Image from 'next/image';
import { useState } from 'react';
import CheckBox from '../../components/CheckBox';
import Footer from '../../components/Footer';
import { Price, SubPrice } from '../../styles/global';
import MenuList from '../MenuList';
import MenuListItem from '../MenuListItem';
import {
  ModalContainer, ModalContent, ModalHeader, ModalClose, ModalTitle, ModalImage,
  ModalInfo, Name, Detail, ModalSelectedItems, ModalSelectItems } from './styles';

interface Modal {
  active: Boolean;
  setActive: Function;
  title?: string;
}

const Modal: React.FC<Modal> = ({ active, setActive, children, title }) => {
  return(
    <ModalContainer show={active}>
      <ModalContent>
        <ModalHeader>
          <ModalClose onClick={() => setActive(false) } >
            <Image src="/arrow-down.svg" width="24" height="24" />
          </ModalClose>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
       {children}
      </ModalContent>
    </ModalContainer>
  )
}

export {
   Modal,
   ModalImage,
   ModalInfo,
   Name,
   Detail,
   ModalSelectedItems,
   ModalSelectItems,
   CheckBox
}
