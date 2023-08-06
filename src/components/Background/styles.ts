import { styled } from '@/styled-system/jsx'

export const BackgroundContainer = styled('div', {
  base: {
    position: 'absolute',
    inset: 0,
    zIndex: -1,

    overflow: 'hidden',

    '& img': {
      opacity: '5%',

      width: '100%',
      minHeight: '454.5px',
      maxHeight: '909px',

      objectFit: 'cover',
      maskImage: 'linear-gradient(to top, transparent 0%, black 100%)',
    },
  },
})

export const Grid = styled('div', {
  base: {
    position: 'absolute',
    inset: 0,

    backgroundClip: 'border-box',
    backgroundRepeat: 'repeat',
    backgroundOrigin: 'border-box',
    backgroundPosition: '0 0',
    backgroundAttachment: 'scroll',

    width: '100%',
    height: '100%',
  },

  variants: {
    size: {
      big: {
        backgroundGradient: 'grid.big',
        backgroundSize: '90px 90px',
      },

      small: {
        backgroundGradient: 'grid.small',
        backgroundSize: '22.5px 22.5px',
      },
    },
  },
})
