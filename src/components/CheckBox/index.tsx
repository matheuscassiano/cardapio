import { Label, Input } from './styles';

interface Label {
  id: any;
  for: any;
}

const CheckBox: React.FC<Label> = ({ id }) => (
  <>
    <Input id={id} type="checkbox" />
    <Label for={id} />
  </>
)

export default CheckBox
