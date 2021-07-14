import { useState } from "react"
import { useStore } from "../../store/store"
import Intro from "./Part0"
import Part1 from "./Part1"
import Part2 from "./Part2"
import Part3 from "./Part3"
import Styled from "./Home.styles"

export const HomePage = () => {
  const {step} = useStore()
  const [ isIntroFinished, setIsIntroFinished ] = useState(false)

  return (
    <Styled.Main>
      <Styled.Header>
        <h2>Logo</h2>
        <nav>
          <a href="https://www.google.fr">A propos</a>
          <a href="https://www.google.fr">Expériences</a>
          <a href="https://www.google.fr">Blog</a>
          <a href="https://www.google.fr">Contact</a>
        </nav>
      </Styled.Header>
      <Styled.Content>
        {step === 1 && !isIntroFinished && <Intro onIntroFinished={() => setIsIntroFinished(true)}/>}
        <Part1 isShown={step === 1 && isIntroFinished}/>
        <Part2 isShown={step === 2}/>
        <Part3 isShown={step === 3}/>
      </Styled.Content>
    </Styled.Main>
  )
}
