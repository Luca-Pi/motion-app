import { useState } from "react"
import { useStore } from "../../store/store"
import Intro from "./Intro"
import Part1 from "./Part1"
import Part2 from "./Part2"
import Part3 from "./Part3"
import Part4 from "./Part4"
import ScrollIcon from "./ScrollIcon"
import Styled from "./Home.styles"

export const HomePage = () => {
  const { step } = useStore()
  const [ isIntroFinished, setIsIntroFinished ] = useState(false)

  return (
    <Styled.Main>
      <Styled.Header>
        <h2>Luca Pilloni</h2>
        <nav>
          <button>About me</button>
          <button>Experiences</button>
          <button>Blog</button>
          <button>Contact</button>
        </nav>
      </Styled.Header>
        {step === 1 && !isIntroFinished && <Intro onIntroFinished={() => setIsIntroFinished(true)}/>}
        <Part1 isShown={step === 1} isIntroFinished={isIntroFinished}/>
        <Part2 isShown={step === 2}/>
        <Part3 isShown={step === 3}/>
        <Part4 isShown={step === 4}/>
        <ScrollIcon isShown={step === 1 && isIntroFinished} />
    </Styled.Main>
  )
}
