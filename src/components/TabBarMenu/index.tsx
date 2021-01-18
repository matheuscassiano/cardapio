import { useRouter } from 'next/router'
import { MenuContainer, Item } from './styles';
import Menu from '../../assets/Menu.svg'
import Waiter from '../../assets/Waiter.svg'
import Bill from '../../assets/Bill.svg'

const TabBarMenu: React.FC = () => {
  const { pathname } = useRouter()
  return (
    <MenuContainer router={pathname}>
      <Item active={pathname === "/cardapio" ? true : false}>
        <Menu />
        Cardápio
      </Item>
      <Item active={pathname === "/chamar-garçom" ? true : false}>
       <Waiter />
        Chamar Garçom
      </Item>
      <Item active={pathname === "/sua-conta" ? true : false}>
        <Bill />
        Sua Conta
      </Item>
    </MenuContainer>
  )
}

export default TabBarMenu
