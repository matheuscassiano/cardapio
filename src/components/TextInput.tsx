import { AppProps } from "next/dist/next-server/lib/router/router"
import Input from './styles';

const TextInput: React.FC<AppProps> = (props) => {
  return <Input placeholder={props.placeholder} />
}

export default TextInput
