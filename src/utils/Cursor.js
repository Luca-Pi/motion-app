import styled from "styled-components"
import { useCallback, useEffect, useRef } from "react"
import { useSpring } from "@react-spring/three"
import { getStepsColors } from "./config"
import { useStore } from "../store/store"

const StyledCursor = styled.svg`
  position: fixed;
  z-index: 1000;
  transform: translate(-50%, -50%);
  pointer-events: none;
  overflow: visible;
  width: 50px;

  #outerPolygon {
    fill: none;
    stroke-width: 2;
    stroke-miterlimit: 10;
  }

  #innerPolygon {
    fill: none;
    stroke-width: 3.1936;
    stroke-miterlimit: 10;
  }

  #crossHair {
    fill: none;
    stroke-width: 3;
    stroke-miterlimit: 10;
  }
`

export default function Cursor() {
  const { step } = useStore()

  const mouse = useRef({
    x: 0,
    y: 0
  })
  const crossHairRef = useRef()
  const innerPolygonRef = useRef()
  const outerPolygonRef = useRef()

  const requestRef = useRef()

  const translate = (x, y) => `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0)`

  const animate = useCallback(() => {
    const { x: aimX, y: aimY } = mouse.current

    const { x: innerX,y: innerY } = innerPolygonRef.current.getBoundingClientRect()
    const innerDx = aimX - (innerX - 100)
    const innerDy = aimY - (innerY - 100)
    const updatedInnerX = innerX + (innerDx * .20)
    const updatedInnerY = innerY + innerDy * .20

    const { x: outerX,y: outerY } = outerPolygonRef.current.getBoundingClientRect()
    const dx = aimX - (outerX - 142)
    const dy = aimY - (outerY - 142)
    const updatedOuterX = outerX + (dx * .15)
    const updatedOuterY = outerY + dy * .15

    crossHairRef.current.style.transform = translate(aimX, aimY)
    innerPolygonRef.current.style.transform = translate(updatedInnerX, updatedInnerY)
    outerPolygonRef.current.style.transform = translate(updatedOuterX, updatedOuterY)

    requestRef.current = requestAnimationFrame(animate);
  }, [])

  useEffect(() => {
    crossHairRef.current.style.stroke = getStepsColors(0).cursorColor
    innerPolygonRef.current.style.stroke = getStepsColors(0).cursorColor
    outerPolygonRef.current.style.stroke = getStepsColors(0).cursorColor

    requestRef.current = requestAnimationFrame(animate);

    window.onmousemove = ({clientX, clientY}) => {
      mouse.current = {
        x: clientX,
        y: clientY
      }
    }

    return () => {
      cancelAnimationFrame(requestRef.current)
      window.onmousemove = null
    };
  }, [animate]);

  useSpring({
    ...getStepsColors(step),
    onChange({ value }) {
      crossHairRef.current.style.stroke = value.cursorColor
      innerPolygonRef.current.style.stroke = value.cursorColor
      outerPolygonRef.current.style.stroke = value.cursorColor
    }
  })

  return (
    <>
      <StyledCursor
        version="1.1"
        x="0px" y="0px"
        viewBox="0 0 119.53 119.52" ref={outerPolygonRef}
      >
        <polygon
          id="outerPolygon"
          points="59.76,109.76 27.13,97.69 9.76,67.15 15.8,32.42 42.4,9.76 77.13,9.76 103.73,32.42 109.76,67.15 92.4,97.69 "
        />
      </StyledCursor>
      <StyledCursor
        version="1.1"
        x="0px" y="0px"
        viewBox="0 0 119.53 119.52" ref={innerPolygonRef}
      >
        <polygon
          id="innerPolygon"
          points="59.76,101.47 32.34,91.34 17.75,65.67 22.82,36.49 45.17,17.44 74.36,17.44 96.71,36.49 101.78,65.67 87.19,91.34 "
        />
      </StyledCursor>
      <StyledCursor
        version="1.1"
        x="0px" y="0px"
        viewBox="0 0 119.53 119.52" ref={crossHairRef}
      >
        <polygon
          id="crossHair"
          points="59.76,64.34 53.57,53.44 65.96,53.44 "
        />
      </StyledCursor>
    </>

  )
}
