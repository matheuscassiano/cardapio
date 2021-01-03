import { AppProps } from "next/dist/next-server/lib/router/router"
import Input from './styles';

const TextInput: React.FC<any> = (props) => {
  return <Input type="text" placeholder={props.placeholder} />
}

export default TextInput
