import { animated, useTransition } from "@react-spring/web"
import styled from "styled-components"

const Text = styled(animated.div)`
  width: 600px;
  line-height: 1.2em;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  position: fixed;
  color: white;
  top: 60%;
  left: 30%;
  transform: translate(-50%, -50%);
`

export default function Part1(props) {
  const delay = (isShown, isIntroFinished) => {
    switch (true) {
      case !isIntroFinished:
        return {
          delay: 8000,
          config: {
            duration: 2000
          }
        }
      case isShown:
        return {
          delay: 6000,
          config: {
            duration: 2000
          }
        }
      case !isShown:
        return {
          delay: 0,
          config: {
            duration: 500
          }
        }
      default:
        return {
          delay: 0,
          config: {
            duration: 500
          }
        }
    }
  }


  const transitions = useTransition(props.isShown, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    ...delay(props.isShown, props.isIntroFinished),

  })
  return transitions(
    (styles, item) => item && <Text style={styles}>My name is Luca and this is my portfolio.</Text>
  )
}
