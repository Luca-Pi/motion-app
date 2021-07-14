import styled from "styled-components"

const Styled = {}

Styled.Main = styled.main`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

Styled.Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:  2rem 10rem;
  
  img, h2 {
  }
  
  nav {
    a {
      font-size: .85rem;
      margin: 2em;
    }
  }
`

Styled.Content = styled.div`

`

export default Styled
