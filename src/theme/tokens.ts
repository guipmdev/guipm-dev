import { defineTokens } from '@pandacss/dev'

import { colors } from './colors'

export const tokens = defineTokens({
  fonts: {
    sans: { value: 'var(--font-inter), sans-serif' },
    mono: { value: 'var(--font-fira-code), monospace' },
  },
  colors,
})
