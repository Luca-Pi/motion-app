import "./App.css"
import React, { useState } from "react"
import { MainCanvas } from "./canvas/canvas"
import { HomePage } from "./pages/Home"
import Styled from "./App.styles"
import { LoadingPage } from "./pages/Loading"

export default function App() {
  return (
    <Styled.Container>
      <Styled.GlobalStyle />
        <LoadingPage />
        <HomePage />
        <MainCanvas />
    </Styled.Container>
  )
}
