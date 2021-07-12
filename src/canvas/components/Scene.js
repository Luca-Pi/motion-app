import { useEffect } from "react"
import { useControls } from "leva"
import { extend, useThree } from "@react-three/fiber"
import { config, useSpring } from "@react-spring/three"

import { Effects } from '@react-three/drei'
import { EffectComposer, ShaderPass, RenderPass, AfterimagePass, UnrealBloomPass } from "three-stdlib"
import { Swarm } from "./Swarm"
import { useStore } from "../../store/store"
import { Hand } from "./Hand"
import { easeCubic } from "d3-ease"

// Makes these prototypes available as "native" jsx-string elements
extend({ EffectComposer, ShaderPass, RenderPass, AfterimagePass, UnrealBloomPass })

export const Scene = () => {
  const { camera } = useThree()
  const {step} = useStore()
  const {position, rotation} = useControls({
    position: {
      value: [ 0,0,0 ],
      step: 0.1,
    },
    rotation: {
      value: [ 15, -80, -70 ],
      step: 5,
    },
  })


  useSpring({
    ...getCameraPosition(step),
    onChange({ value }) {
      camera.position.set(...value.cameraPosition)
      camera.rotation.set(...rotationFromDegrees(value.cameraRotation));
      camera.updateMatrixWorld()
    }
  })

  const rotationFromDegrees = (rotation) => rotation.map(degrees => degrees * (Math.PI / 180))

  useEffect(() => {
   camera.position.set(...position);
   camera.updateMatrixWorld()
  }, [camera, position])

  useEffect(() => {
    camera.rotation.set(...rotationFromDegrees(rotation));
    camera.updateMatrixWorld()
  }, [camera, rotation])

  return (
    <>
      <Hand/>
      <Swarm count={20000} />
      <Effects>
        <unrealBloomPass attachArray="passes" args={[undefined, 1.5, 1, 0]} />
      </Effects>
    </>
  )

  function getCameraPosition(currentStep) {
    let state = {
      config: {
        ...config.gentle,
      },
    }

    switch(currentStep) {
      case 0:
        return {
          ...state,
          config: {
            ...state.config,
            duration: 6000,
          },
          cameraPosition: [0,0,0],
        }
      case 1:
        return {
          ...state,
          config: {
            ...state.config,
            duration: 10000,
            easing: easeCubic,
          },
          cameraPosition: [ -59.2, 4.8, 1.3 ],
          cameraRotation: [ 15, -80, -70 ]
        }
      case 2:
        return {
          ...state,
          config: {
            ...state.config,
            duration: 3000,
            easing: easeCubic,
          },
            cameraPosition: [-54,1.2,3.6],
          cameraRotation: [-125,-195,-130]
        }
      case 3:
        return {
          ...state,
          config: {
            ...state.config,
            duration: 3000,
            easing: easeCubic,
          },
          cameraPosition: [-59,0.7,1.6],
          cameraRotation: [-110,-145,-225]
        }
      case 4:
        return {
          ...state,
          config: {
            ...state.config,
            duration: 3000,
            easing: easeCubic,
          },
          cameraPosition: [-56.7,5,1],
          cameraRotation: [90,-175,-10]
        }
      default:
        throw new Error("Wrong step boundary, got", step)
    }
  }
}
