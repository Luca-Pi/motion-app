import styled from "styled-components"
import { useTransition, config, animated } from "@react-spring/web"
import { useState } from "react"
import { useStore } from "../store/store"
import { ambientMusic } from "../utils/sounds"


const StartButton = styled.div`
  color: white;
`

const Main = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadingPage = () => {
  const [ isVisible, setIsVisible ] = useState(true)
  const { nextStep } = useStore()

  const transition = useTransition(isVisible, {
    from: {opacity: 1},
    enter: {opacity: 1},
    leave: {opacity: 0},
  })

  console.log(Main)
  return transition((style, item) => item &&
    <Main style={style}>
      <StartButton onClick={() => {
        setIsVisible(false)
        nextStep()
        ambientMusic.play()
      }}>Start</StartButton>
    </Main>
  )

}
