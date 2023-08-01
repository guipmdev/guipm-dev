import { defineKeyframes } from '@pandacss/dev'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max * 100) / 100
}

function createRandomGlitchKeyframes() {
  return Array(20)
    .fill(null)
    .reduce((acc, _current, index, array) => {
      const key = `${Math.floor(index * (1 / array.length) * 100)}%`
      const value = `rect(${getRandomInt(3.5)}rem, 18.5rem, ${getRandomInt(
        3.5,
      )}rem, 0rem)`

      return {
        ...acc,
        [key]: {
          clip: value,
        },
      }
    }, {})
}

console.log(getRandomInt(3))

export const keyframes = defineKeyframes({
  glitchAnimation1: createRandomGlitchKeyframes(),
  glitchAnimation2: createRandomGlitchKeyframes(),
})
