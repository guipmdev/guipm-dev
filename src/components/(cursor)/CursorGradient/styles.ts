import { styled } from '@/styled-system/jsx'

export const CursorGradientContainer = styled('div', {
  base: {
    display: 'none',

    lg: {
      position: 'fixed',
      inset: 0,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      backgroundGradient: 'cursor',
      backgroundSize: 'contain',
      backgroundClip: 'border-box',
      backgroundRepeat: 'no-repeat',
      backgroundOrigin: 'border-box',

      width: '600px',
      height: '600px',

      transform: 'translate(-50%, -50%)',

      transition: 'opacity 0.2s',
    },
  },
})