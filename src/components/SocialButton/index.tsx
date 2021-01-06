import { Button } from './styles';
import Image from 'next/image';

interface SocialButton {
  bgColor: any;
  textColor: any;
}

interface SocialButtonChildren {
  size: Number;
  logo: TexImageSource;
  text: String;
}

const SocialButton: React.FC<SocialButton> & React.FC<SocialButtonChildren> = ({bgColor, textColor, size, logo, text}) => (
  <Button bgColor={bgColor} textColor={textColor} type="submit">
    <Image width={size} height={size} src={logo} alt={text} />
    <span>{text}</span>
  </Button>
)

export default SocialButton
