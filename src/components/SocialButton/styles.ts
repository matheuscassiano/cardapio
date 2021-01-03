import styled from 'styled-components'

const Button = styled.button`
  width: calc(100% - 6em);
  height: 3em;
  margin: .25em 0;
  padding: 0 2em;
  font-size: .8rem;
  font-weight: 800;
  text-align: left;
  border-radius: 15px;
  border: ${props => props.bgColor == "#FFFFFF" ? '1px solid black' : '0'};
  color: ${props => props.textColor};
  background: ${props => props.bgColor};
  box-shadow: 0px 0px 3.5px ${props => `${props.bgColor}80`};
`

export default Button
