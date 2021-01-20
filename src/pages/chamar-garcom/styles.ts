import styled from 'styled-components'

const Background = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.color.background};
`

const Content = styled.section`
  width: calc(100% - 5em);
  min-height: 70vh;
  margin: 0 auto;
  padding-bottom: 5em;
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
  justify-content: space-evenly;
  padding: 1.5em;
  position: fixed;
  bottom: 0;
  
  span {
    margin-left: auto;
  }
`

const CustomButton = styled.button`
  color: white;
  padding: .8em 2em;
  margin: .25em 0;
  font-size: ${props => props.theme.font.size.small};
  border-radius: ${props => props.theme.radius.medium};
  background-color: ${props => props.theme.color.primary};
  box-shadow: 0 0 5px ${props => props.theme.color.primary}80;
`

const CustomButtonRed = styled(CustomButton)`
  background-color: ${props => props.theme.color.red};
  box-shadow: 0 0 5px ${props => props.theme.color.red}80;
`

export {
    Background,
    Content,
    Info,
    TextArea,
    CustomFooter,
    CustomButton,
    CustomButtonRed
}
