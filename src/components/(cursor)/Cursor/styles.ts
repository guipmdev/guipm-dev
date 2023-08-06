import { styled } from '@/styled-system/jsx'

export const CursorContainer = styled('div', {
  base: {
    position: 'fixed',
    inset: 0,
    zIndex: 10,

    display: {
      base: 'none',
      lg: 'flex',
    },
    justifyContent: 'center',
    alignItems: 'center',

    transform: 'translate(-50%, -50%)',

    transition: 'opacity 0.2s',

    pointerEvents: 'none',

    '&.hover': {
      '& .dot': {
        width: '18px',
        height: '18px',

        borderColor: 'title',

        backgroundColor: 'cursor',
      },

      '& .solidOutline': {
        transform: 'scale(0%)',
      },

      '& .dashedOutline': {
        width: '28px',
        height: '28px',

        animationDirection: 'reverse',
      },
    },
  },
})

export const CursorPart = styled('span', {
  base: {
    position: 'absolute',

    display: 'block',

    borderRadius: '50%',

    '&.dot': {
      backgroundColor: 'subtitle',
      width: '8px',
      height: '8px',

      border: '2px solid transparent',

      transition:
        'width 0.5s, height 0.5s, border-color 0.5s, background-color 0.5s',
    },

    '&.solidOutline': {
      border: '1px solid',
      borderColor: 'subtitle',

      width: '85px',
      height: '85px',

      transition: 'transform 0.75s',
    },

    '&.dashedOutline': {
      width: '105px',
      height: '105px',

      border: '1px dashed',
      borderColor: 'subtitle',

      transition: 'width 0.75s, height 0.75s',

      animation: 'spin 15s infinite linear',
    },
  },
})
