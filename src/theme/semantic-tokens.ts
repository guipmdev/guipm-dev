import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    primary: { value: '{colors.skyDark.sky11}' },
    primaryDark: { value: '{colors.skyDark.sky2}' },

    background: { value: '{colors.slateDark.slate1}' },

    text: { value: '{colors.slateDark.slate11}' },
    title: { value: '{colors.slateDark.slate12}' },
    subtitle: { value: '{colors.slateDark.slate10}' },
  },
})
