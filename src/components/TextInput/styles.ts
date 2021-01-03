import styled from 'styled-components'

const Input = styled.input`
  width: calc(100% - 6em);
  height: 3em;
  border: 0;
  padding: 0 1em;
  margin: .25em 0;
  font-size: .8rem;
  line-height: 18px;
  border-radius: 1em;
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  ::placeholder { /* Internet Explorer 10-11 */
    color: #A0A0A0;
  }
`

export default Input
