import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuContainer, Item } from './styles';
import Menu from '../../assets/Menu.svg'
import Waiter from '../../assets/Waiter.svg'
import Bill from '../../assets/Bill.svg'

const TabBarMenu: React.FC = () => {
  const { pathname } = useRouter()
  return (
    <MenuContainer router={pathname}>
      <Link href="/cardapio">
        <Item active={pathname === "/cardapio" ? true : false}>
          <Menu />
          Cardápio
        </Item>
      </Link>
      <Link href="/chamar-garcom">
        <Item active={pathname === "/chamar-garcom" ? true : false}>
          <Waiter />
          Chamar Garçom
        </Item>
      </Link>
      <Link href="/sua-conta">
        <Item active={pathname === "/sua-conta" ? true : false}>
          <Bill />
          Sua Conta
        </Item>
      </Link>
    </MenuContainer>
  )
}

export default TabBarMenu
