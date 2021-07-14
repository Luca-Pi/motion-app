import { useRef } from "react"
import { useSpring } from "@react-spring/three"
import { useStore } from "../store/store"
import { getStepsColors } from "./config"

export const Lights = () => {
  const { step } = useStore()
  const pointRef = useRef()
  const spotRef = useRef()
  console.log("light");
  useSpring({
    ...getStepsColors(step),
    onChange({ value }) {
     pointRef.current.color.set(value.pointColor)
     spotRef.current.color.set(value.spotColor)
    }
  })

  return (
    <>
      <pointLight ref={pointRef} intensity={0.2} color="#fff" />
      <spotLight ref={spotRef} intensity={0.2} position={[70, 0, 70]} penumbra={1} color="#add8e6" />
    </>
  )
}
