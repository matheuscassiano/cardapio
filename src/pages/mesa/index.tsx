import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Container, SubTitle, Title } from '../../styles/global'
import { Background, Info, Button } from './styles'
import InputFild from '../../components/InputFild'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Table: React.FC<AppProps> = () => {
  const [windowSize, setWindowSize] = useState({
    width: 100,
    height: 100,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  return (
      <Background>
        <Title color="white">Verificação de mesa</Title>
        <Image src="/table.svg" alt="table" width={windowSize.width} height={windowSize.width * .7} />
        <Container>
          <div>
            <SubTitle>Preencha as Informações</SubTitle>
            <InputFild as="select">
              <option disabled selected>Selecione sua mesa</option>
              <option value="1">Mesa 01</option>
              <option value="2">Mesa 02</option>
              <option value="3">Mesa 03</option>
              <option value="4">Mesa 04</option>
              <option value="5">Mesa 05</option>
              <option value="6">Mesa 06</option>
            </InputFild>
            <InputFild placeholder="Digite a senha da sua mesa" />
            <Info>Caso não tenha a senha da sua mesa, chame algum garçom e peça a ele a senha</Info>
            <Button>
              <Image src="/arrow-right.svg" width="40" height="40" />
            </Button>
          </div>
        </Container>
      </Background>
    )
}

export default Table
