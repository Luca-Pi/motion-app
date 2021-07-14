import { animated, useTransition } from "@react-spring/web"
import styled from "styled-components"

const Text = styled(animated.div)`
  font-size: 60px;
  font-family: ModerneSans, serif;
  position: fixed;
  top: 60%;
  left: 30%;
  transform: translate(-50%, -50%) rotateZ(48deg);
`

export default function Part3(props) {
  const transitions = useTransition(props.isShown, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: props.isShown ? 2500 : 0,
    config: {
      duration: props.isShown ? 2000 : 200,
    }
  })
  return transitions(
    (styles, item) => item && <Text style={styles}>this is a lot of text</Text>
  )
}
