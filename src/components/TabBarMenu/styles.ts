import styled from 'styled-components'
interface Menu {
  router: string;
}

interface Item {
  href: any;
  active: boolean;
}

const MenuContainer = styled.nav<Menu>`
  width: 100%;
  height: 4.5em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  z-index: 2;
`

const Item = styled.div<Item>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ active }) => active ? "green" : "black"};

  div {
    display: flex;
    flex-direction: column;
  }

  svg {
    margin: .25em 0;
    path {
      fill: ${({ active }) => active ? "green" : "black"};
      /* stroke: ${({ active }) => active ? "green" : "black"}; */
    }
  }
`

export {
  MenuContainer,
  Item
}
