import { defineConfig } from '@pandacss/dev'

import { globalCss } from '@/theme/global-css'
import { semanticTokens } from '@/theme/semantic-tokens'
import { textStyles } from '@/theme/text-styles'
import { tokens } from '@/theme/tokens'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
      semanticTokens,
      textStyles,
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  // The JSX framework to use
  jsxFramework: 'react',

  globalCss,

  gitignore: true,

  // minify: true,
  // hash: true,
})