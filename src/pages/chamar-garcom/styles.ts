import styled from 'styled-components'

const Background = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.color.background};
`

const Content = styled.section`
  width: calc(100% - 5em);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Info = styled.p`
  text-align: center;
  padding: 1em .5em;
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.weight.small};
`

const TextArea = styled.textarea`
  width: calc(100% - 3em);
  height: 15em;
  padding: 1.5em;
  margin: 5em 1.5em 2.5em;
  background-color: #F0F1F2;
  border-radius: ${props => props.theme.radius.big};
`

const CustomFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5em;
  position: fixed;
  bottom: 0;
`

const CustomButton = styled.button`
  color: white;
  font-size: ${props => props.theme.font.size.small};
  padding: .8em 2em;
  margin: .25em 0;
  border-radius: ${props => props.theme.radius.medium};
  background-color: ${props => props.theme.color.primary};
`

export {
    Background,
    Content,
    Info,
    TextArea,
    CustomFooter,
    CustomButton
}
