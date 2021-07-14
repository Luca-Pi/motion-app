import { useSpring, animated } from "@react-spring/web"
import styled from "styled-components"

const FirstText = styled(animated.div)`
  font-size: 60px;
  font-family: ModerneSans, serif;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default function Intro(props) {
  const styles = useSpring({
    from: {opacity: 0},
    to: [ {opacity: 1}, {opacity: 0} ],
    delay: 1000,
    config: {
      duration: 3000
    },
    onRest(anim) {
      if(anim.finished) {
        props.onIntroFinished()
      }
    }
  })
  return <FirstText style={styles}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</FirstText>

}
