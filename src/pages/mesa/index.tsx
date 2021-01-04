import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Container } from '../../styles/Container'
import { Background, Title, Subtitle } from './styles'
import InputFild from '../../components/InputFild'

const Home: React.FC<AppProps> = () => {
  return (
      <Background>
        <Title>Verificação de mesa</Title>
        <Container>
          <Subtitle>Preencha as Informações</Subtitle>
          <InputFild as="select">
            <option disabled selected>Selecione sua</option>
            <option value="1">Mesa 01</option>
            <option value="2">Mesa 02</option>
            <option value="3">Mesa 03</option>
            <option value="4">Mesa 04</option>
            <option value="5">Mesa 05</option>
            <option value="6">Mesa 06</option>
          </InputFild>
          <InputFild placeholder="Digite a senha da sua mesa" />
          <p>Caso não tenha a senha da sua mesa, chame algum garçom e peça a ele a senha</p>
        </Container>
      </Background>
    )
}

export default Home
