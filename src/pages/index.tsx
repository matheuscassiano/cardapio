import { AppProps } from 'next/dist/next-server/lib/router/router'
import styled from 'styled-components'

import SubmitButton from '../components/SubmitButton'
import SocialButton from '../components/SocialButton'
import InputText from '../components/TextInput/index.tsx'


const Container = styled.div`
  width: 100%;
  padding: 3em 0;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px -5px 100px 5px rgba(0, 0, 0, 0.25);
  border-radius: 50px 50px 0px 0px;
  position: fixed;
  bottom: 0;
  z-index: 2;
`
Container.Wrapper = styled.span`
  font-size: .8em;
  padding: 1em 0;
  color: rgba(0, 0, 0, 0.5);
`

const Home: React.FC<AppProps> = () => {
  return (
    <Container>
      <InputText placeholder={"Nome"} />
      <InputText placeholder={"Email ou Telefone"} />
      <SubmitButton text={"Entrar"} />
      <Container.Wrapper>ou</Container.Wrapper>
      <SocialButton logo={"A"} bgColor={'#3D5A99'} textColor={'#FFF'} text={"Continuar com Faceboock"} />
      <SocialButton logo={"G"} bgColor={'#FFFFFF'} textColor={'#000'} text={"Continuar com Google"} />
      <SocialButton logo={"A"} bgColor={'#000000'} textColor={'#FFF'} text={"Continuar com Apple"} />
    </Container>
  )
}

export default Home
