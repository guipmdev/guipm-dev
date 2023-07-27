import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  html: {
    color: 'text',
    fontFamily: 'sans',
    fontSize: '1rem',
    lineHeight: '1.5rem',

    scrollBehavior: 'smooth',
    scrollPaddingTop: '6rem',

    '& svg, a *:not(.hoverable)': {
      pointerEvents: 'none',
    },
  },

  body: {
    position: 'relative',

    backgroundColor: 'background',

    width: '100vw',
    minHeight: '100vh',
    maxWidth: '100%',
  },
})
