import styled from 'styled-components'

const TrayContainer = styled.div`
  width: 80%;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 50%;
  bottom: 5em;
  transform: translateX(-50%);
  padding: 0 2.5em;
  border-radius: ${props => props.theme.radius.big};
  background-color: ${props => props.theme.color.primary};
  z-index: 2;

  * {
    color: white;
    align-self: center;
    justify-self: center;
  }
`
export default TrayContainer
