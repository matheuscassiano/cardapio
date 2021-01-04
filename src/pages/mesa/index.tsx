import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Container } from '../../styles/Container'
import { Background } from './styles'
import InputText from '../../components/TextInput/index.tsx'

const Home: React.FC<AppProps> = () => {
  return (
      <Background>
        <h1>Verificação de mesa</h1>
        <Container>
          <h2>Preencha as Informações</h2>
          <InputText />
          <InputText />
          <p>Caso não tenha a senha da sua mesa, chame algum garçom e peça a ele a senha</p>
        </Container>
      </Background>
    )
}

export default Home
