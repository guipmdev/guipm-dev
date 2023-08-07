import { defineKeyframes } from '@pandacss/dev'

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max * 100) / 100
}

function createRandomGlitchKeyframes() {
  return Array(20)
    .fill(null)
    .reduce((keyframes, _current, index, array) => {
      const progressPercentage = `${Math.floor(
        index * (1 / array.length) * 100,
      )}%`

      const randomizedClippingShape = `rect(${getRandomNumber(3.5)}rem,
                                            18.5rem,
                                            ${getRandomNumber(3.5)}rem,
                                            0rem)`

      return {
        ...keyframes,
        [progressPercentage]: {
          clip: randomizedClippingShape,
        },
      }
    }, {})
}

export const keyframes = defineKeyframes({
  glitchAnimation1: createRandomGlitchKeyframes(),
  glitchAnimation2: createRandomGlitchKeyframes(),
})
