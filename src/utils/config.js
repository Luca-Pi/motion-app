import { easeCubic } from "d3-ease"
import { config } from "@react-spring/three"

export function getStepsCameraPosition(currentStep) {
  let state = {
    config: {
      ...config.gentle,
    },
  }

  switch(currentStep) {
    case 0:
      return {
        ...state,
        config: {
          ...state.config,
          duration: 6000,
        },
        cameraPosition: [0,0,0],
      }
    case 1:
      return {
        ...state,
        config: {
          ...state.config,
          duration: 10000,
          easing: easeCubic,
        },
        cameraPosition: [ -59.2, 4.8, 1.3 ],
        cameraRotation: [ 15, -80, -70 ]
      }
    case 2:
      return {
        ...state,
        config: {
          ...state.config,
          duration: 3000,
          easing: easeCubic,
        },
        cameraPosition: [-57.6,1.7,4.5],
        cameraRotation: [-125,-145,-100]
      }
    case 3:
      return {
        ...state,
        config: {
          ...state.config,
          duration: 3000,
          easing: easeCubic,
        },
        cameraPosition: [-59,0.7,1.6],
        cameraRotation: [-110,-145,-225]
      }
    case 4:
      return {
        ...state,
        config: {
          ...state.config,
          duration: 3000,
          easing: easeCubic,
        },
        cameraPosition: [-56.7,5,1],
        cameraRotation: [90,-175,-10]
      }
    default:
      throw new Error("Wrong step boundary, got: " + currentStep)
  }
}

export function getStepsSwarmPosition(currentStep) {
  let state = {
    config: {
      ...config.gentle,
    },
  }

  switch(currentStep) {
    case 0:
    case 1:
      return {
        ...state,
        config: {
          ...state.config,
          duration: 6000,
        },
        swarmPosition: [0,0,0],
      }
    case 2:
      return {
        ...state,
        config: {
          ...state.config,
          duration: 3000,
          easing: easeCubic,
        },
        swarmPosition: [-97.5,52.5,-38],
      }
    case 3:
      return {
        ...state,
        config: {
          ...state.config,
          duration: 3000,
          easing: easeCubic,
        },
        swarmPosition: [-59,0.7,1.6],
      }
    case 4:
      return {
        ...state,
        config: {
          ...state.config,
          duration: 3000,
          easing: easeCubic,
        },
        swarmPosition: [-56.7,5,1],
      }
    default:
      throw new Error("Wrong step boundary, got: " + currentStep)
  }
}

export  function getStepsColors(currentStep) {
  switch (currentStep) {
    case 0:
      return {
        pointColor: "#fff",
        spotColor: "#add8e6",
        cursorColor: "#fff"
      }
    case 1:
      return {
        pointColor: "#fff",
        spotColor: "#add8e6",
        cursorColor: "#fff",
        config: {
          duration: 10000,
          easing: easeCubic,
        },
      }
    case 2:
      return {
        pointColor: "#5a1a88",
        spotColor: "#6d00b5",
        cursorColor: "#5a1a88",
        config: {
          duration: 3000,
          easing: easeCubic,
        },
      }
    case 3:
      return {
        pointColor: "#c47401",
        spotColor: "#ae4c02",
        cursorColor: "#ae4c02",
        config: {
          duration: 3000,
          easing: easeCubic,
        },
      }
    case 4:
      return {
        pointColor: "#5f0000",
        spotColor: "#810000",
        cursorColor: "#8c0f00",
        config: {
          duration: 3000,
          easing: easeCubic,
        },
      }
    default:
      return {
        pointColor: "#fff",
        spotColor: "#add8e6"
      }
  }
}
