import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Container, SubTitle, Title } from '../../styles/global'
import { Background, TableImage, ArrowImage, Info, Button } from './styles'
import { InputField } from '../../components/InputField'
import Link from 'next/link'

const Table: React.FC<AppProps> = () => {
  return (
      <Background>
        <Title color="white">Verificação de mesa</Title>
        <TableImage />
        <Container>
          <div>
            <SubTitle>Preencha as Informações</SubTitle>
            <InputField as="select" defaltValue="0">
              <option value="0" disabled>Selecione sua mesa</option>
              <option value="1">Mesa 01</option>
              <option value="2">Mesa 02</option>
              <option value="3">Mesa 03</option>
              <option value="4">Mesa 04</option>
              <option value="5">Mesa 05</option>
              <option value="6">Mesa 06</option>
            </InputField>
            <InputField placeholder="Digite a senha da sua mesa" />
            <Info>Caso não tenha a senha da sua mesa, chame algum garçom e peça a ele a senha</Info>
            <Link href="/cardapio">
              <Button>
                <ArrowImage />
              </Button>
            </Link>
          </div>
        </Container>
      </Background>
    )
}

export default Table
