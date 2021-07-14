import {animated, useTransition } from "@react-spring/web"
import styled from "styled-components"

const Text = styled(animated.div)`
  font-size: 60px;
  font-family: ModerneSans, serif;
  position: fixed;
  top: 30%;
  left: 60%;
  transform: translate(-50%, -50%);
`

export default function Part2(props) {
  const transitions = useTransition(props.isShown, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 1000,
    config: {
      duration: 2000
    }
  })
  return transitions(
    (styles, item) => item && <Text style={styles}>this is a lot of text part 2</Text>
  )
}
