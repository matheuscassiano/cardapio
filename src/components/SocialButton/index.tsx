import { Button, ButtonImage } from './styles';
import { AppProps } from "next/dist/next-server/lib/router/router"

const SocialButton: React.FC<any> = (props) => {
  return (
    <Button
      bgColor={props.bgColor} textColor={props.textColor} type="submit">
      <ButtonImage width={props.size} height={props.size} src={props.logo} alt=""/>
      <span>{props.text}</span>
    </Button>
  )
}

export default SocialButton
