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
  margin: 2rem 10rem;

  img, h2 {
  }

  nav {
    button {
      font-size: .85rem;
      margin: 2em;
      background: none;
      color: white;
      text-decoration: none;
      border: none;
      font-family: Roboto, sans-serif;
      font-weight: 800;
      text-transform: uppercase;
    }
  }
`

export default Styled
