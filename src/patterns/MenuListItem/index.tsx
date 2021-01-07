import Item from './styles';

interface ListItem {
  cols?: Number;
}

const MenuListItem: React.FC<ListItem> = (props) => {
  return <Item items={props.cols}>{props.children}</Item>
}

export default MenuListItem
