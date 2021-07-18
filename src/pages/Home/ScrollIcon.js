import { animated, useTransition } from "@react-spring/web"
import styled from "styled-components"

const Scroll = styled(animated.div)`
  position: fixed;
  bottom: 10%;
  left: 30%;
  transform: translate(-50%, -50%);

  .mouse {
    width: 40px;
    height: 70px;
    border: 2px solid white;
    border-radius: 60px;
    position: relative;

    &::before {
      content: '';
      width: 8px;
      height: 8px;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      border-radius: 50%;
      opacity: 1;
      animation: wheel 2s infinite;
      -webkit-animation: wheel 2s infinite;
    }
  }
  
  p {
    margin-top: 8px;
  }

  @keyframes wheel {
    to {
      opacity: 0;
      top: 50px;
    }
  }

  @-webkit-keyframes wheel {
    to {
      opacity: 0;
      top: 50px;
    }
  }
`

export default function ScrollIcon(props) {
  const transitions = useTransition(props.isShown, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: props.isShown ? 6000 : 0,
    config: {
      duration:  props.isShown ? 2000 : 1000
    }
  })

  return transitions(
    (styles, item) => item && (
      <Scroll style={styles}>
        <div className="mouse"></div>
        <p>Scroll</p>
      </Scroll>
    )
  )
}
