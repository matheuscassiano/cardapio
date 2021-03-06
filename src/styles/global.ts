import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle<any>`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  ul, li {
    list-style: none;
    font-weight: normal;
  }

  a {
    text-decoration: none;
  }

  body {
    font: 400 16px Roboto, sans-serif;
    color: ${props => props.theme.color.text};
    background-color: ${props => props.theme.color.background};
  }
`

export const Container = styled.form`
  max-width: 33em;
  width: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2.5em;
  background-color: ${props => props.theme.color.background};
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
  font-size: ${props => props.theme.font.size.medium};
  font-weight: ${props => props.theme.font.weight.regular};
`

export const SubTitle = styled.h2`
  padding-bottom: 1.5em;
  width: ${props => props.theme.field.width};
  font-size: ${props => props.theme.font.size.regular};
  font-weight: ${props => props.theme.font.weight.medium};
`

export const Label = styled.label`
    margin-top: .5em;
    font-size: ${props => props.theme.font.size.small};
    font-weight: ${props => props.theme.font.weight.regular};
`

export const LineBreak = styled.hr`
  width: 100%;
  height: .5px;
  background-color: #D0D5DA80;
`

export const Price = styled.strong`
  align-self: center;
  justify-self: center;
  color: ${props => props.theme.color.terciary};
  color: ${props => props.color};
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.weight.medium};
`

export const SubPrice = styled.span`
  color: #A0A0A0;
  font-style: italic;
  text-decoration-line: line-through;
  font-weight: ${props => props.theme.font.weight.small};
`

export const Button = styled.button`
  width: calc(100% - 2em);
  color: white;
  font-size: ${props => props.theme.font.size.small};
  padding: .8em;
  margin: .25em 0;
  border-radius: ${props => props.theme.radius.medium};
  background-color: ${props => props.theme.color.primary};
`

export const AddOnsList = styled.ul`
opacity: .7;
font-size: ${props => props.theme.font.size.small};
`