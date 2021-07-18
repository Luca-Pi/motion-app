import "./App.css"
import React from "react"
import { MainCanvas } from "./canvas/canvas"
import { HomePage } from "./pages/Home"
import Styled from "./App.styles"
import { LoadingPage } from "./pages/Loading"
import Cursor from "./utils/Cursor"

export default function App() {
  return <>
      <MainCanvas/>

      <Styled.Container>
        <Styled.GlobalStyle/>
        <Cursor/>
        <LoadingPage isLoading={false} />
        <HomePage/>
      </Styled.Container>
  </>
}
