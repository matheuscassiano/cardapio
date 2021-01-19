import { AppProps } from 'next/dist/next-server/lib/router/router'
import TabBarMenu from '../../components/TabBarMenu'

import { Background, Clean } from './styles'
import { Title, SubTitle, LineBreak, Price, SubPrice } from '../../styles/global'

import Empty from '../../assets/empty.svg'

const Bill: React.FC<AppProps> = () => {

  return (
    <Background>
      <Title>Sua conta</Title>
      <Clean>
        <Empty />
        <p>Você ainda não fez nenhum pedido, vá ate o cardápio para escolher</p>
      </Clean>
      <TabBarMenu />
    </Background>
    )
}

export default Bill
