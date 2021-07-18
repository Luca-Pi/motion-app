import { Suspense } from "react"
import { Controls } from "../utils/Controls"
import { Lights } from "../utils/Lights"
import { Scene } from "./components/Scene"
import Styled from "./canvas.styles"
import { Canvas } from "@react-three/fiber"

export const MainCanvas = () => {
  return (
    <Styled.CanvasContainer>
      <Canvas
        shadows
        camera={{
          near: 0.001, far: 70,
          position: [0,0,0]
        }}
      >
          <Controls/>
          <Lights/>

          <Suspense fallback={null} >
            <Scene/>
          </Suspense>
      </Canvas>
    </Styled.CanvasContainer>
  )
}
