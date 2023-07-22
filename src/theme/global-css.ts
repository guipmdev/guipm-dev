import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  html: {
    bg: 'background',

    fontFamily: 'sans',
  },

  body: {
    h: '100vh',
    w: '100vw',

    bgGradient: 'grid',
    bgClip: 'border-box',
    bgSize: '90px 90px',
    bgRepeat: 'repeat',
    bgOrigin: 'border-box',
    bgPosition: '0% 0%',
    bgAttachment: 'scroll',

    color: 'text',
  },
})
