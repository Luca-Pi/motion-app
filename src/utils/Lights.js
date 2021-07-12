import { useRef } from "react"
import { useSpring } from "@react-spring/three"
import { useStore } from "../store/store"
import { easeCubic } from "d3-ease"

export const Lights = () => {
  const { step } = useStore()
  const pointRef = useRef()
  const spotRef = useRef()
  console.log(step);

  useSpring({
    ...getLightsColors(step),
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

  function getLightsColors(currentStep) {
    switch (currentStep) {
      case 0:
        return {
          pointColor: "#fff",
          spotColor: "#add8e6"
        }
      case 1:
        return {
          pointColor: "#fff",
          spotColor: "#ADD8E6",
          config: {
            duration: 10000,
            easing: easeCubic,
          },
        }
      case 2:
        return {
          pointColor: "#2c0ea5",
          spotColor: "#6e20a5",
          config: {
            duration: 3000,
            easing: easeCubic,
          },
        }
      case 3:
        return {
          pointColor: "#c47401",
          spotColor: "#ae4c02",
          config: {
            duration: 3000,
            easing: easeCubic,
          },
        }
      case 4:
        return {
          pointColor: "#8c0f00",
          spotColor: "#5f0000",
          config: {
            duration: 3000,
            easing: easeCubic,
          },
        }
      default:
        return {
          pointColor: "#fff",
          spotColor: "#add8e6"
        }
    }
  }
}
