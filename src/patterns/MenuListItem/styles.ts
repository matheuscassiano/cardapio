import styled from 'styled-components'

interface ListItem {
  items: Number
}

const Item = styled.li<ListItem>`
  padding: 1em 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-columns: ${props => {
    let template = '';
    for(let i = 1; i <= props.items; i++) {
      if (i == 2) {
        template += '2fr '
      } else {
        template += '1fr '
      }
    }
    return template
  }};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

  :last-child {
    margin-bottom: 1.5em;
  }

  * {
    align-self: center;
    justify-self: center;
    object-fit: contain;
  }

  p {
    align-self: center;
    justify-self: flex-start;
    font-size: ${props => props.theme.font.size.small};
    font-weight: ${props => props.theme.font.weight.big};
  }

  p span {
    font-size: ${props => props.theme.font.size.small};
    font-weight: ${props => props.theme.font.weight.regular};
  }
`

export default Item
