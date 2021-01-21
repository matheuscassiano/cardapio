import { AppProps } from 'next/dist/next-server/lib/router/router'
import Image from 'next/image'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper.min.css';

import { Title, SubTitle, LineBreak, Price, SubPrice, AddOnsList } from '../../styles/global'
import { Background, Header, SliderMenu, SliderBanner, SliderPromotion } from './styles'
import { InputField } from '../../components/InputField'
import Tray from '../../components/Tray';

import MenuList from '../../components/MenuList'
import MenuListItem from '../../components/MenuListItem'
import { useEffect, useState } from 'react';
import {
  Modal, ModalImage, ModalInfo, Name, Detail, ModalSelectedItems,
  ModalSelectItems, CheckBox, BackgroundImageContainer
} from '../../components/Modal';
import TabBarMenu from '../../components/TabBarMenu';
import Footer from '../../components/Footer';

import Pratos from '../../assets/pratos.svg'
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Menu: React.FC<AppProps> = () => {
  const [amount, setAmount] = useState(0)
  const [modalActive, setModalActive] = useState(false)
  const [trayModalActive, setTrayModalActive] = useState(false)
  const [sizeScreen, setSizeScreen] = useState({ width: 100, height: 100 })

  useEffect(() => {
    setSizeScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  return (
    <Background>
      <Header>
        <Title>Mesa 12</Title>
        <InputField placeholder="Pesquisar pratos" />
        <SliderMenu slidesPerView={4}>
          <SwiperSlide>
            <Image src="/beer.png" width="25" height="25" />
            <span>Cervejas</span>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/beer.png" width="25" height="25" />
            <span>Caldos</span>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/beer.png" width="25" height="25" />
            <span>Refeições</span>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/beer.png" width="25" height="25" />
            <span>Petiscos</span>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/beer.png" width="25" height="25" />
            <span>Cervejas</span>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/beer.png" width="25" height="25" />
            <span>Caldos</span>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/beer.png" width="25" height="25" />
            <span>Refeições</span>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/beer.png" width="25" height="25" />
            <span>Petiscos</span>
          </SwiperSlide>
        </SliderMenu>
      </Header>
      <SliderBanner slidesPerView={sizeScreen.width >= 750 ? 2 : 1.3} spaceBetween={10}>
        <SwiperSlide onClick={() => setModalActive(true)}>
          <Image src="/banner.png" width={sizeScreen.width >= 750 ? 430 : "auto"} height={sizeScreen.width >= 750 ? 200 : 130} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/banner.png" width={sizeScreen.width >= 750 ? 430 : "auto"} height={sizeScreen.width >= 750 ? 200 : 130} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/banner.png" width={sizeScreen.width >= 750 ? 430 : "auto"} height={sizeScreen.width >= 750 ? 200 : 130} />
        </SwiperSlide>
      </SliderBanner>
      <LineBreak />
      <SubTitle>Promoções</SubTitle>
      <SliderPromotion slidesPerView={sizeScreen.width >= 750 ? 2.8 : 1.8} spaceBetween={20}>
        <SwiperSlide>
          <Image src="/prom.png" width={sizeScreen.width >= 750 ? 350 : "auto"} height={sizeScreen.width >= 750 ? 200 : 100} />
          <h6>Picanha na Chapa com Fritas</h6>
          <p><Price>R$ 50.00</Price> <SubPrice>R$ 66.00</SubPrice></p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/prom.png" width={sizeScreen.width >= 750 ? 350 : "auto"} height={sizeScreen.width >= 750 ? 200 : 100} />
          <h6>Picanha na Chapa com Fritas</h6>
          <p><Price>R$ 50.00</Price> <SubPrice>R$ 66.00</SubPrice></p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/prom.png" width={sizeScreen.width >= 750 ? 350 : "auto"} height={sizeScreen.width >= 750 ? 200 : 100} />
          <h6>Picanha na Chapa com Fritas</h6>
          <p><Price>R$ 50.00</Price> <SubPrice>R$ 66.00</SubPrice></p>
        </SwiperSlide>
      </SliderPromotion>
      <LineBreak />
      <SubTitle>Cervejas</SubTitle>
      <MenuList>
        <MenuListItem>
          <Image src="/ellipse.png" width="45" height="45" />
          <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
          <Price>R$ 9.00</Price>
        </MenuListItem>
        <MenuListItem>
          <Image src="/ellipse.png" width="45" height="45" />
          <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
          <Price>R$ 9.00</Price>
        </MenuListItem>
        <MenuListItem>
          <Image src="/ellipse.png" width="45" height="45" />
          <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
          <Price>R$ 9.00</Price>
        </MenuListItem>
        <MenuListItem>
          <Image src="/ellipse.png" width="45" height="45" />
          <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
          <Price>R$ 9.00</Price>
        </MenuListItem>
      </MenuList>
      <SubTitle>Caldos</SubTitle>
      <MenuList>
        <MenuListItem>
          <Image src="/ellipse.png" width="45" height="45" />
          <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
          <Price>R$ 9.00</Price>
        </MenuListItem>
        <MenuListItem>
          <Image src="/ellipse.png" width="45" height="45" />
          <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
          <Price>R$ 9.00</Price>
        </MenuListItem>
        <MenuListItem>
          <Image src="/ellipse.png" width="45" height="45" />
          <p>Skol - Cerveja Skol Pilsen <span>Bebida 600ml</span></p>
          <Price>R$ 9.00</Price>
        </MenuListItem>
      </MenuList>
      <TabBarMenu />
      <Tray>
        <p onClick={() => setTrayModalActive(true)}>Ver bandeija</p>
        <Price color="white">R$ 9.00</Price>
      </Tray>
      <Modal active={modalActive} setActive={setModalActive}>
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
              <p>Para 3 pessoas <br />
                <span>Carne 1kg</span></p>
              <Price>R$ 9.00</Price>
              <CheckBox id="01" />
            </MenuListItem>
            <MenuListItem cols={4}>
              <Image src="/ellipse.png" width="45" height="45" />
              <p>Para 3 pessoas <br />
                <span>Carne 1kg</span></p>
              <Price>R$ 9.00</Price>
              <CheckBox id="02" />
            </MenuListItem>
            <MenuListItem cols={4}>
              <Image src="/ellipse.png" width="45" height="45" />
              <p>Para 3 pessoas <br />
                <span>Carne 1kg</span></p>
              <Price>R$ 9.00</Price>
              <CheckBox id="03" />
            </MenuListItem>
            <MenuListItem cols={4}>
              <Image src="/ellipse.png" width="45" height="45" />
              <p>Para 3 pessoas <br />
                <span>Carne 1kg</span></p>
              <Price>R$ 9.00</Price>
              <CheckBox id="04" />
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
      </Modal>
      <Modal title="Seus Pedidos" active={trayModalActive} setActive={setTrayModalActive}>
        <br />
        <br />
        <br />
        <MenuList>
          <MenuListItem cols={4}>
            <Image src="/ellipse.png" width="45" height="45" />
            <div>
              <p>Picanha na Chapa com Fritas</p>
              <AddOnsList>
                <li>+ Para 3 pessoas</li>
                <li>+ Batata frita</li>
              </AddOnsList>
            </div>
            <Price>R$ 9.00</Price>
            <CheckBox id="01" />
          </MenuListItem>
          <MenuListItem cols={4}>
            <Image src="/ellipse.png" width="45" height="45" />
            <div>
              <p>Picanha na Chapa com Fritas</p>
              <AddOnsList>
                <li>+ Para 3 pessoas</li>
                <li>+ Batata frita</li>
              </AddOnsList>
            </div>
            <Price>R$ 9.00</Price>
            <CheckBox id="01" />
          </MenuListItem>
        </MenuList>
        <BackgroundImageContainer>
          <Pratos />
          <p>Adicione mais pratos</p>
        </BackgroundImageContainer>
        <Footer>
          <p>Total <br /> <span>R$100.00</span></p>
          <Link href="/sua-conta">Enviar Pedidos</Link>
        </Footer>
      </Modal>
    </Background>
  )
}

export default Menu
