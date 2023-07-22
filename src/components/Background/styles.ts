import { styled } from '@/styled-system/jsx'

export const BackgroundContainer = styled('div', {
  base: {
    position: 'absolute',
    inset: 0,
    zIndex: -1,

    '& img': {
      opacity: '5%',
      maskImage: 'linear-gradient(to top, transparent 0%, black 100%)',

      w: '100%',
      minH: '454.5px',
      maxH: '909px',

      objectFit: 'cover',
    },
  },
})

export const Grid = styled('div', {
  base: {
    position: 'absolute',
    inset: 0,

    bgGradient: 'grid',
    bgSize: '90px 90px',
    bgClip: 'border-box',
    bgRepeat: 'repeat',
    bgOrigin: 'border-box',
    bgPosition: '0 0',
    bgAttachment: 'scroll',

    w: '100%',
    h: '100%',
  },
})
