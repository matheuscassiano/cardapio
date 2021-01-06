import { Button } from './styles';
import { App} from "next/dist/next-server/lib/router/router"
import Image from 'next/image';

interface SocialButton {
  bgColor: any;
  textColor: String;
}

interface SocialButtonChildren {
  size: Number;
  logo: String;
  text: String;
}

const SocialButton: React.FC<SocialButton> & React.FC<SocialButtonChildren> = ({bgColor, textColor, size, logo, text}) => (
  <Button
    bgColor={bgColor} textColor={textColor} type="submit">
    <Image width={size} height={size} src={logo} alt={text} />
    <span>{text}</span>
  </Button>
)

export default SocialButton
