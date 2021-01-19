import { CardContainer, Label } from './styles';

const Card: React.FC = ({ children }) => {
  return <CardContainer>{children}</CardContainer>
}

export {
    Card,
    Label
}