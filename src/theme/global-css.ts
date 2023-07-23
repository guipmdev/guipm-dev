import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  html: {
    color: 'text',
    fontFamily: 'sans',
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },

  body: {
    backgroundColor: 'background',

    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
  },
})
