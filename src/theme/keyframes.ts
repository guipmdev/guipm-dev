import { defineKeyframes } from '@pandacss/dev'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max * 100) / 100
}

function createRandomGlitchKeyframes(keyframesNumber = 20) {
  return Array(keyframesNumber)
    .fill(null)
    .reduce((keyframes, _current, index, array) => {
      const progressPercentage = `${Math.floor(
        index * (1 / array.length) * 100,
      )}%`

      const randomizedClippingShape = `rect(${getRandomInt(
        3.5,
      )}rem, 18.5rem, ${getRandomInt(3.5)}rem, 0rem)`

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
