import {animated, useTransition } from "@react-spring/web"
import styled from "styled-components"

const Text = styled(animated.div)`
  width: 700px;
  font-size: 60px;
  font-family: ModerneSans, serif;
  position: fixed;
  top: 40%;
  left: 70%;
  transform: translate(-50%, -50%);
`

export default function Part2(props) {
  const transitions = useTransition(props.isShown, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: props.isShown ? 2500 : 0,
    config: {
      duration: props.isShown ? 500 : 500
    }
  })
  return transitions(
    (styles, item) => item && <Text style={styles}>À travers d'un monde infiniment vaste...</Text>
  )
}
