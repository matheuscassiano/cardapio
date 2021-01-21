import { AppProps } from 'next/dist/next-server/lib/router/router'
import TabBarMenu from '../../components/TabBarMenu'
import { Title, Button } from '../../styles/global'
import { Background, Content, Info, TextArea, CustomFooter, CustomButton, CustomButtonRed } from './styles'

import Waiters from '../../assets/waiters.svg'
import { Modal } from '../../components/Modal'
import { useState } from 'react'

const Waiter: React.FC<AppProps> = () => {
  const [caracters, setCaracters] = useState(0)
  const [callModalActive, setCallModalActive] = useState(false)
  const [askModalActive, setAskModalActive] = useState(false)

  return (
    <Background>
      <Title>Chame os Garçom</Title>
      <Content>
        <Waiters />
        <Info>Está precisando tirar alguma dúvida? Então <b>Chame o Garçom.</b> Mas se você precisar apenas de algum favor como talheres, sal, copos e etc… clique em <b>Pedir algo ao Garçom.</b></Info>
        <Button onClick={() => setCallModalActive(true)}>Desejo chamar o Garçom</Button>
        <Button onClick={() => setAskModalActive(true)}>Desejo pedir algo ao Garçom</Button>
      </Content>
      <TabBarMenu />
      <Modal title="Digite o que precisa" active={askModalActive} setActive={setAskModalActive}>
        <TextArea placeholder="Ex: Trás um talher e pimenta por favor…" maxLength={250} onChange={({ target }) => setCaracters(target.value.length)} />
        <CustomFooter>
          <CustomButton>Enviar pedido</CustomButton>
          <span>{caracters}/250</span>
        </CustomFooter>
      </Modal>
      <Modal title="Realmente deseja chamar o garçom?" active={callModalActive} setActive={setCallModalActive}>
        <CustomFooter>
          <CustomButtonRed>Não</CustomButtonRed>
          <CustomButton>Enviar pedido</CustomButton>
        </CustomFooter>
      </Modal>
    </Background>
  )
}

export default Waiter
