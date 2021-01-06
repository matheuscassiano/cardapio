import { AppProps } from "next/dist/next-server/lib/router/router"
import Button from './styles';

interface SubmitButton {
  text: String;
}

const SubmitButton: React.FC<SubmitButton> = ({ text }) => {
  return <Button type="submit">{text}</Button>
}

export default SubmitButton
