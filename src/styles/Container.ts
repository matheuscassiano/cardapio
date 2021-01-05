import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  max-height: 53vh;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2.5em;
  background: #FFFFFF;
  box-shadow: 0px -5px 100px 5px rgba(0, 0, 0, 0.25);
  border-radius: 50px 50px 0px 0px;
  position: fixed;
  bottom: 0;
  z-index: 2;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
