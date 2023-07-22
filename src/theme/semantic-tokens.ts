import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    primary: { value: '{colors.skyDark.sky11}' },
    primaryDark: { value: '{colors.skyDark.sky2}' },

    background: { value: '{colors.slateDark.slate1}' },

    text: { value: '{colors.slateDark.slate11}' },
    title: { value: '{colors.slateDark.slate12}' },
    subtitle: { value: '{colors.slateDark.slate10}' },

    gridLines: { value: '{colors.slateDarkA.slateA2/50}' },
  },

  gradients: {
    grid: {
      value: `linear-gradient({colors.gridLines} 1px, transparent 1px),
          linear-gradient(to right, {colors.gridLines} 1px, transparent 1px)`,
    },
  },
})
