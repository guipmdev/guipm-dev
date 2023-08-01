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

function createTransparentColor(radixColor: string, transparency: number) {
  const colorWithoutCommas = radixColor.replaceAll(',', '')

  const transparencyLevel = ` / ${transparency / 100})`

  return colorWithoutCommas.replace(')', transparencyLevel)
}

export const colors = defineTokens.colors({
  slateDark: createColorTokens(slateDark),
  skyDark: createColorTokens(skyDark),

  slateDarkA: {
    'slateA10/0': { value: createTransparentColor(slateDark.slate10, 0) },
    'slateA4/50': { value: createTransparentColor(slateDark.slate4, 50) },
    'slateA12/30': { value: createTransparentColor(slateDark.slate12, 30) },
    'slateA12/10': { value: createTransparentColor(slateDark.slate12, 10) },
    'slateA2/35': { value: createTransparentColor(slateDark.slate2, 35) },
    'slateA2/50': { value: createTransparentColor(slateDark.slate2, 50) },
    'slateA2/75': { value: createTransparentColor(slateDark.slate2, 75) },
    'slateA1/50': { value: createTransparentColor(slateDark.slate1, 50) },
    'slateA12/5': { value: createTransparentColor(slateDark.slate12, 5) },
    'slateA11/10': { value: createTransparentColor(slateDark.slate11, 10) },
  },
})
