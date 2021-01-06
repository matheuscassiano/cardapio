import { Button } from './styles';
import Image from 'next/image';
import React from 'react';

interface SocialButton {
  bgColor: string;
  textColor: string;
  size: any;
  logo: string;
  text: string;
}

const SocialButton: React.FC<SocialButton> = ({bgColor, textColor, size, logo, text}) => (
  <Button bgColor={bgColor} textColor={textColor} type="submit">
    <Image width={size} height={size} src={logo} alt={text} />
    <span>{text}</span>
  </Button>
)

export default SocialButton
