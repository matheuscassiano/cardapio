import { Input, InputBreak } from './styles';

interface FieldProps {
  as?: any;
  placeholder?: String;
}

const InputField: React.FC<FieldProps> = props => {
  return <Input as={props.as} placeholder={props.placeholder} >{props.children}</Input>
}

export { 
  InputField,
  InputBreak
}
