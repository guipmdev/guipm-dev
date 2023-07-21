import { defineTokens } from '@pandacss/dev'

import { colors } from './colors'

export const tokens = defineTokens({
  fonts: {
    sans: { value: '"Inter", sans-serif' },
    mono: { value: '"Fira Code", monospace' },
  },
  colors,
})
