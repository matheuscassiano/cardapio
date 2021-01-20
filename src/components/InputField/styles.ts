import styled from 'styled-components'

const Input = styled.input`
  padding: 0 1em;
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  width: ${props => props.theme.field.width};
  height: ${props => props.theme.field.height};
  margin: ${props => props.theme.field.gap.small};
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.weight.small};
  border-radius: ${props => props.theme.radius.medium};

  ::placeholder { /* Internet Explorer 10-11 */
    color: #A0A0A0;
  }
`

const InputBreak = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;

  label, svg {
    height: auto;
    display: flex;
    flex-direction: column;
  }

  svg {
    width: 35%;
  }

  label {
    width: 45%;
  }
`

export {
  Input,
  InputBreak
}
