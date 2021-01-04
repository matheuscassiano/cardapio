import Input from './styles';

const InputFild: React.FC<any> = props => {
  return <Input as={props.as} placeholder={props.placeholder} >{props.children}</Input>
}

export default InputFild
