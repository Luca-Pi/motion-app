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
    
    overflow: hidden;
    cursor: none;
  }

  body {
    background: #f0f0f0;
    color: white;
    font-family: ModerneSans, serif;
  }

  @font-face {
    font-family: "ModerneSans";
    src: local("ModerneSans"),
    url("./fonts/Moderne-Sans.ttf") format("truetype");
  }
  
  a, a:focus, a:visited {
    color: white;
    text-decoration: none;
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

const AppStyle = {
  GlobalStyle,
  Container,
}

export default AppStyle
