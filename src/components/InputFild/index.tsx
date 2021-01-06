import Input from './styles';

interface FieldProps {
  as: any,
  placeholder: String
}

const InputFild: React.FC<FieldProps> = props => {
  return <Input as={props.as} placeholder={props.placeholder} >{props.children}</Input>
}

export default InputFild
