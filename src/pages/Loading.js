import styled from "styled-components"
import { useTransition, useSpring, animated } from "@react-spring/web"
import { useState } from "react"
import { useStore } from "../store/store"
import { ambientMusic } from "../utils/sounds"


const StartButton = styled(animated.button)`
  width: 100px;
  height: 100px;
  background: transparent;
  font-family: ModerneSans, sans-serif;
  text-transform: uppercase;
  color: white;
  border-radius: 50%;
  border: 2px solid ${({$borderColor}) => $borderColor};
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

export const LoadingPage = ({ isLoading }) => {
  console.log(isLoading ? "loading" : "start")
  const [ isVisible, setIsVisible ] = useState(true)
  const { nextStep, setIsNavigationDisabled } = useStore()

  const transition = useTransition(isVisible, {
    from: {opacity: 1},
    enter: {opacity: 1},
    leave: {opacity: 0},
  })

  const buttonStyles = useSpring({
    loop: true,
    from: { borderColor: "white", color: "white" },
    to: [
      {borderColor: "purple", color: "purple"},
      {borderColor: "orange", color: "orange"},
      {borderColor: "red", color: "red"},
      {borderColor: "white", color: "white"},
    ],
    config: {
      duration: 2000
    }
  })

  return transition((style, item) => item &&
    <Main style={style}>
      <StartButton style={buttonStyles} onClick={() => {
        setIsVisible(false)
        setIsNavigationDisabled(false)
        nextStep()
        ambientMusic.play()
      }}>
        {"Start"}
      </StartButton>
    </Main>
  )

}
