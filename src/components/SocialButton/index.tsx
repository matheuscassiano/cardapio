import Button from './styles';
import { AppProps } from "next/dist/next-server/lib/router/router"

const SocialButton: React.FC<any> = (props) => {
  return (
    <Button 
      bgColor={props.bgColor} textColor={props.textColor} type="submit">
      <img src={props.logo} alt=""/>
      <span>{props.text}</span>
    </Button>
  )
}

export default SocialButton
