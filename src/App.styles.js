import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background: #f0f0f0;
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export default {
  GlobalStyle,
  Container,
}
