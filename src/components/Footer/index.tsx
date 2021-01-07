import Image from 'next/image';
import FooterContainer from './styles';

const Footer: React.FC<ListItem> = ({ children }) => (
  <FooterContainer>{children}</FooterContainer>
)

export default Footer
