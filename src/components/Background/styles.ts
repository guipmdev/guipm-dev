import { styled } from '@/styled-system/jsx'

export const BackgroundContainer = styled('div', {
  base: {
    position: 'absolute',
    inset: 0,
    zIndex: -1,

    overflow: 'hidden',

    '& img': {
      opacity: '5%',
      maskImage: 'linear-gradient(to top, transparent 0%, black 100%)',

      width: '100%',
      minHeight: '454.5px',
      maxHeight: '909px',

      objectFit: 'cover',
    },
  },
})

export const BiggerGrid = styled('div', {
  base: {
    position: 'absolute',
    inset: 0,

    backgroundGradient: 'grid.big',
    backgroundSize: '90px 90px',
    backgroundClip: 'border-box',
    backgroundRepeat: 'repeat',
    backgroundOrigin: 'border-box',
    backgroundPosition: '0 0',
    backgroundAttachment: 'scroll',

    width: '100%',
    height: '100%',
  },
})

export const SmallerGrid = styled('div', {
  base: {
    position: 'absolute',
    inset: 0,

    backgroundGradient: 'grid.small',
    backgroundSize: '22.5px 22.5px',
    backgroundClip: 'border-box',
    backgroundRepeat: 'repeat',
    backgroundOrigin: 'border-box',
    backgroundPosition: '0 0',
    backgroundAttachment: 'scroll',

    width: '100%',
    height: '100%',
  },
})
