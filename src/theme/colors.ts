import { defineTokens } from '@pandacss/dev'
import { skyDark, slateDark } from '@radix-ui/colors'

interface RadixColorPalette {
  [key: string]: string
}

interface CreatedColorTokens {
  [key: string]: { value: string }
}

function createColorTokens(
  radixColorPalette: RadixColorPalette,
): CreatedColorTokens {
  return Object.keys(radixColorPalette).reduce((acc, color) => {
    return {
      ...acc,
      [color]: {
        value: radixColorPalette[color],
      },
    }
  }, {})
}

export const colors = defineTokens.colors({
  slateDark: createColorTokens(slateDark),
  skyDark: createColorTokens(skyDark),
})
