import { useRef } from "react"
import { useSpring, animated } from "@react-spring/three"
import { useStore } from "../store/store"
import { getStepsColors } from "./config"

export const Lights = () => {
  const { step } = useStore()
  const pointRef = useRef()
  const spotRef = useRef()

  const {  pointColor, spotColor } = useSpring({
    ...getStepsColors(step),
    onChange({value}) {
      pointRef.current.color.set(value.pointColor)
      spotRef.current.color.set(value.spotColor)
    }
  })

  return (
    <>
      <animated.pointLight ref={pointRef} intensity={0.3} color={pointColor}/>
      <animated.spotLight ref={spotRef} intensity={0.3} position={[ 70, 0, 70 ]} penumbra={1} color={spotColor} />
      <ambientLight intensity={0.006}/>
    </>
  )
}
