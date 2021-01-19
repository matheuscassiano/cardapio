import { AppProps } from 'next/dist/next-server/lib/router/router'
import TabBarMenu from '../../components/TabBarMenu'

import { Background, Content, Clean, AddMore, Order } from './styles'
import { Title, Price } from '../../styles/global'

import Empty from '../../assets/empty.svg'
import { useState } from 'react'
import MenuList from '../../patterns/MenuList'
import MenuListItem from '../../patterns/MenuListItem'
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
      ): (
        <Content>
          <MenuList>
            <MenuListItem cols={3}>
              <Image src="/ellipse.png" width="45" height="45" />
              <p>1 Picanha na Chapa com Fritas<br/>
                <ul>
                  <li>+ Para 3 pessoas</li>
                  <li>+ Batata Frita</li>
                </ul>
              </p>
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
            <tr>
              <td>Subtotal</td>
              <td><Price>R$ 265.00</Price></td>
            </tr>
            <tr>
              <td>Taxa de Serviço</td>
              <td><Price>R$ 26.50</Price></td>
            </tr>
            <tr>
              <td>Total</td>
              <td><Price>R$ 291.50</Price></td>
            </tr>
          </Order>
        </Content>
      )}
      <TabBarMenu />
    </Background>
    )
}

export default Bill
