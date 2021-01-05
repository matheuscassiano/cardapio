import { Button } from './styles';
import { AppProps } from "next/dist/next-server/lib/router/router"
import Image from 'next/image';

const SocialButton: React.FC<any> = (props) => {
  return (
    <Button
      bgColor={props.bgColor} textColor={props.textColor} type="submit">
      <Image width={props.size} height={props.size} src={props.logo} alt=""/>
      <span>{props.text}</span>
    </Button>
  )
}

export default SocialButton
