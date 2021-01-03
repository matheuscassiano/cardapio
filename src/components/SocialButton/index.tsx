import Image from 'next/image'
import Button from './styles';
import { AppProps } from "next/dist/next-server/lib/router/router"

const SocialButton: React.FC<any> = (props) => {
  return (
    <Button bgColor={props.bgColor} textColor={props.textColor} type="submit">
      <span>{props.logo}{props.text}</span>
    </Button>
  )
}

export default SocialButton
