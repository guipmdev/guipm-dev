import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  html: {
    fontFamily: 'sans',
  },

  body: {
    bg: 'background',

    w: '100vw',
    h: '100vh',

    color: 'text',
  },
})
