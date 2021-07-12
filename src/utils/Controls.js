import { extend, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls } from "three-stdlib"
import { useEffect, useRef } from "react"
import { useStore } from "../store/store"

extend({ OrbitControls })

export const Controls = (props) => {
  const ref = useRef(null)
  const { camera, gl } = useThree()

  const { nextStep, previousStep } = useStore()

  useEffect(() => {
    window.onmousewheel = ({ deltaY }) => {
      if(deltaY > 0) {
        nextStep()
      }
      else if(deltaY < 0) {
        previousStep()
      }
    }
  }, [nextStep, previousStep]);

  useFrame(() => {
    ref.current?.obj?.update()
  })

  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
}
