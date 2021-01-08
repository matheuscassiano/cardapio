import { Label, Input } from './styles';

interface Label {
  id: any;
  htmlFor?: any;
}

const CheckBox: React.FC<Label> = ({ id }) => (
  <>
    <Input id={id} type="checkbox" />
    <Label htmlFor={id} />
  </>
)

export default CheckBox
