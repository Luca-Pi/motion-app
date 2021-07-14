import { useFrame } from "@react-three/fiber"
import { useStore } from "../../store/store"
import { useGLTF } from "@react-three/drei"
import { useControls } from "leva"
import React, { useEffect, useRef } from "react"
import { useSpring } from "@react-spring/three"
import * as THREE from "three"

export const Hand = () => {
  useFrame(({ clock }) => {
    group.current.position.setZ(Math.sin(clock.elapsedTime * 2) * 0.15 )
  })
  const { step } = useStore()
  const group = useRef()
  const objectRef = useRef()
  const { scene } = useGLTF("/models/3Dhand.glb")

  useEffect(() => {
    console.log(scene.children[0].material.color.set("#1a1a1a"));
  }, [scene])

  const { handPosition } = useControls({
    handPosition: {
      value: [ -56, 0, 0 ],
      step: 0.5,
    },
  })

  useSpring({
    step,
    config: {
      duration: duration(step),
    },
    onResolve() {
      objectRef.current.geometry = objectGeometry(step)
    }
  })

  return (
    <group position={handPosition}>
      <mesh position={[ -0.4, 2.5, 1 ]} ref={objectRef} onClick={() => {
        console.log("clicked");
      }}>
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <group
        ref={group}
        scale={25}
        color="black"
      >
        <primitive object={scene} color="black"/>
      </group>
    </group>
  )

  function duration(currentStep) {
    switch (currentStep) {
      case 0:
      case 1:
        return 4000
      case 2:
        return 1300
      case 3:
        return 1300
      case 4:
        return 1800
      default:
        return 2000
    }
  }

  function objectGeometry(currentStep) {
    switch (currentStep) {
      case 0:
      case 1:
        return new THREE.DodecahedronBufferGeometry(1, 0)
      case 2:
        return new THREE.OctahedronGeometry(1, 0)
      case 3:
        return new THREE.TorusGeometry( .6, 0.15, 16, 100 )
      case 4:
        return new THREE.ConeGeometry( 1, 1, 3 )
      default:
        return new THREE.DodecahedronBufferGeometry(1, 0)
    }
  }
}
