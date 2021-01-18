import { useRouter } from 'next/router'
import { MenuContainer, Item } from './styles';
import Menu from '../../assets/Menu.svg'
import Waiter from '../../assets/Waiter.svg'
import Bill from '../../assets/Bill.svg'

const TabBarMenu: React.FC = () => {
  const { pathname } = useRouter()
  return (
    <MenuContainer router={pathname}>
      <Item href="/cardapio" active={pathname === "/cardapio" ? true : false}>
        <div>
          <Menu />
          Cardápio
        </div>
      </Item>
      <Item href="/chamar-garcom" active={pathname === "/chamar-garcom" ? true : false}>
        <div>
          <Waiter />
          Chamar Garçom
        </div>
      </Item>
      <Item href="/sua-conta" active={pathname === "/sua-conta" ? true : false}>
        <div>
          <Bill />
          Sua Conta
        </div>
      </Item>
    </MenuContainer>
  )
}

export default TabBarMenu
