import { AppProps } from 'next/dist/next-server/lib/router/router'
import TabBarMenu from '../../components/TabBarMenu'

import { Background, Content, Clean, AddMore } from './styles'
import { Title, Price, AddOnsList } from '../../styles/global'

import Empty from '../../assets/empty.svg'
import { useState } from 'react'

import MenuList from '../../components/MenuList'
import MenuListItem from '../../components/MenuListItem'
import { ButtonContainer, Button, Order, TableLine, Total } from '../../components/Order'

import Image from 'next/image'
import Link from 'next/link'

const Bill: React.FC<AppProps> = () => {
  const [empty, setEmpty] = useState(false)

  return (
    <Background>
      <Title>Sua conta</Title>
      {empty ? (
        <Clean>
          <Empty />
          <p>Você ainda não fez nenhum pedido, vá ate o cardápio para escolher</p>
        </Clean>
      ) : (
          <Content>
            <MenuList>
              <MenuListItem cols={3}>
                <Image src="/ellipse.png" width="45" height="45" />
                <div>
                  <p>1 Picanha na Chapa com Fritas</p>
                  <AddOnsList>
                    <li>+ Para 3 pessoas</li>
                    <li>+ Batata Frita</li>
                  </AddOnsList>
                </div>
                <Price>R$ 50.00</Price>
              </MenuListItem>
              <MenuListItem cols={3}>
                <Image src="/ellipse.png" width="45" height="45" />
                <p>1 Camarão Grande</p>
                <Price>R$ 49.00</Price>
              </MenuListItem>
              <MenuListItem cols={3}>
                <Image src="/ellipse.png" width="45" height="45" />
                <p>3 Coca-colas LS</p>
                <Price>R$ 18.00</Price>
              </MenuListItem>
            </MenuList>
            <AddMore>
              <Link href="/cardapio">Adicionar Mais pratos</Link>
            </AddMore>
            <Order>
              <TableLine>
                <p>Subtotal</p>
                <Price>R$ 265.00</Price>
              </TableLine>
              <TableLine>
                <p>Taxa de Serviço</p>
                <Price>R$ 26.50</Price>
              </TableLine>
              <TableLine>
                <Total>Total</Total>
                <Price><Total>R$ 291.50</Total></Price>
              </TableLine>
              <ButtonContainer>
                <Link href="/balcao">
                  <Button>Pagar no Balcão</Button>
                </Link>
                <Link href="/cartao">
                  <Button>Pagar Online</Button>
                </Link>
              </ButtonContainer>
            </Order>
          </Content>
        )}
      <TabBarMenu />
    </Background>
  )
}

export default Bill
