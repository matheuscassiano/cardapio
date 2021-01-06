import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle<any>`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  body {
    font: 400 16px Roboto, sans-serif;
    color: ${props => props.theme.color.text};
    background-color: ${props => props.theme.color.background};
  }
`

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
export const Title = styled.h1`
  text-align: center;
  color: ${props => props.color};
  padding: ${props => props.theme.field.gap.big};
  padding-bottom: .5em;
  font-size: ${props => props.theme.font.size.regular};
  font-weight: ${props => props.theme.font.weight.regular};
`

export const SubTitle = styled.h2`
  width: ${props => props.theme.field.width};
  padding-bottom: 1.5em;
  font-size: ${props => props.theme.font.size.regular};
  font-weight: ${props => props.theme.font.weight.medium};
`

export const LineBreak = styled.hr`
  width: 100%;
  height: .5px;
  background-color: #D0D5DA80;
`
