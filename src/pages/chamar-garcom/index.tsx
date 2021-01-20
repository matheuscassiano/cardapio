import { AppProps } from 'next/dist/next-server/lib/router/router'
import TabBarMenu from '../../components/TabBarMenu'
import { Title, Button } from '../../styles/global'
import { Background, Content, Info } from './styles'

import Waiters from '../../assets/waiters.svg'

const Waiter: React.FC<AppProps> = () => {

  return (
    <Background>
      <Title>Chame os Garçom</Title>
      <Content>
        <Waiters />
        <Info>Está precisando tirar alguma dúvida? Então <b>Chame o Garçom.</b> Mas se você precisar apenas de algum favor como talheres, sal, copos e etc… clique em <b>Pedir algo ao Garçom.</b></Info>
        <Button>Desejo chamar o Garçom</Button>
        <Button>Desejo pedir algo ao Garçom</Button>
      </Content>
      <TabBarMenu />
    </Background>
    )
}

export default Waiter
