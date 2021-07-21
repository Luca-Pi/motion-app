import { useFrame } from "@react-three/fiber"
import { useStore } from "../../store/store"
import { useGLTF } from "@react-three/drei"
import React, { useRef } from "react"
import { useSpring, animated } from "@react-spring/three"
import * as THREE from "three"

export const Hand = () => {
  const {step} = useStore()
  const group = useRef()
  const objectRef = useRef()
  const {scene} = useGLTF("/models/3Dhand.glb")

  useFrame(({ clock}) => {
    group.current.position.setZ(Math.sin(clock.elapsedTime * 2) * 0.15)
    objectRef.current.rotation.x += 0.02
    objectRef.current.rotation.y += 0.02
  })

  const { color } = useSpring({
    ...HandStepsConfig(step),
    step,
    onResolve() {
      objectRef.current.geometry = objectGeometry(step)
    }
  })

  return (
    <group position={[ -56, 0, 0 ]} ref={group}>
      <mesh position={[ -0.4, 2.5, 1 ]} ref={objectRef} onClick={() => {
        console.log("clicked")
      }}>
        <animated.meshStandardMaterial color={color} flatShading={true}/>
      </mesh>
      <group
        scale={25}
        color="black"
      >
        <primitive object={scene} color="black"/>
      </group>
    </group>
  )

  function HandStepsConfig(currentStep) {
    switch (currentStep) {
      case 0:
      case 1:
        return {
          color: "black",
          config: {
            duration: 4500,
          }
        }
      case 2:
        return {
          color: "purple",
          config: {
            duration: 1300,
          }
        }
      case 3:
        return {
          color: "orange",
          config: {
            duration: 1300,
          }
        }
      case 4:
        return {
          color: "#ff0000",
          config: {
            duration: 1500,
          }
        }
      default:
        return 2000
    }
  }

  function objectGeometry(currentStep) {
    switch (currentStep) {
      case 0:
      case 1:
        return new THREE.DodecahedronBufferGeometry(.8, 0)
      case 2:
      case 3:
        return new THREE.OctahedronGeometry(.7, 4)
      case 4:
        return new THREE.ConeGeometry(.7, 1, 3)
      default:
        return new THREE.DodecahedronBufferGeometry(.5, 0)
    }
  }
}
