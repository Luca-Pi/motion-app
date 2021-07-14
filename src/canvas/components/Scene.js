import { extend } from "@react-three/fiber"

import { Effects } from "@react-three/drei"
import { EffectComposer, ShaderPass, RenderPass, AfterimagePass, UnrealBloomPass } from "three-stdlib"
import { Swarm } from "./Swarm"
import { Hand } from "./Hand"

extend({EffectComposer, ShaderPass, RenderPass, AfterimagePass, UnrealBloomPass})

export const Scene = () => <>
  <Hand/>
  <Swarm count={20000}/>
  <Effects>
    <unrealBloomPass attachArray="passes" args={[ undefined, 1.5, 1, 0 ]}/>
  </Effects>
</>
