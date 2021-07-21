import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import { useStore } from "../store/store"
import { useSpring } from "@react-spring/three"
import { getStepsCameraPosition } from "./config"

import * as _ from "underscore"

export const Controls = () => {
  const { camera } = useThree()

  const { step, nextStep, previousStep, setIsNavigationDisabled } = useStore()

  const rotationFromDegrees = (rotation) => rotation.map(degrees => degrees * (Math.PI / 180))

  useSpring({
    ...getStepsCameraPosition(step),
    onStart() {
      setIsNavigationDisabled(true)
    },
    onResolve() {
      setIsNavigationDisabled(false)
    },
    onChange({ value }) {
      camera.position.set(...value.cameraPosition)
      camera.rotation.set(...rotationFromDegrees(value.cameraRotation));
      camera.updateMatrixWorld()
    }
  })

  useEffect(() => {
    window.onmousewheel = _.debounce(({ deltaY }) => {
      if(deltaY > 0) {
        nextStep()
      }
      else if(deltaY < 0) {
        previousStep()
      }
    }, [500])
  }, [nextStep, previousStep]);

  return null
}
