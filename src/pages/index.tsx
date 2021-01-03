import { AppProps } from 'next/dist/next-server/lib/router/router'
import styled from 'styled-components'
import InputText from '../components/TextInput'

const Container = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Home: React.FC<AppProps> = () => {
  return (
    <Container>
      <InputText placeholder={"Nome"} />
      <InputText placeholder={"Email ou Telefone"} />
    </Container>
  )
}

export default Home
