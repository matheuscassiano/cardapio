import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Text } from './styles'

const Home: React.FC<AppProps> = () => {
  return <Text>My Typescript Sub-page</Text>
}

export default Home
