import { AppProps } from "next/dist/next-server/lib/router/router"
import Button from './styles';

const SubmitButton: React.FC<any> = (props) => {
  return <Button type="submit">{props.text}</Button>
}

export default SubmitButton
