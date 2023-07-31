import { styled } from '@/styled-system/jsx'

export const CursorContainer = styled('div', {
  base: {
    display: 'none',

    lg: {
      position: 'fixed',
      inset: 0,
      zIndex: 10,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      transform: 'translate(-50%, -50%)',

      transition: 'opacity 0.2s',

      pointerEvents: 'none',

      '&.hover': {
        '& .dottedOutline': {
          width: '28px',
          height: '28px',
        },

        '& .outline': {
          transform: 'scale(0%)',
        },

        '& .dot': {
          width: '18px',
          height: '18px',

          borderColor: 'title',

          backgroundColor: 'cursor',
        },
      },
    },
  },
})

export const DottedOutline = styled('span', {
  base: {
    position: 'absolute',

    display: 'block',

    border: '1px dashed',
    borderColor: 'subtitle',
    borderRadius: '50%',

    width: '105px',
    height: '105px',

    transition: 'width 0.75s, height 0.75s',

    animation: 'spin 15s infinite linear',
  },
})

export const Outline = styled('span', {
  base: {
    position: 'absolute',

    display: 'block',

    border: '1px solid',
    borderColor: 'subtitle',
    borderRadius: '50%',

    width: '85px',
    height: '85px',

    transition: 'transform 0.75s',
  },
})

export const Dot = styled('span', {
  base: {
    position: 'absolute',

    display: 'block',

    backgroundColor: 'subtitle',
    border: '2px solid transparent',
    borderRadius: '50%',

    width: '8px',
    height: '8px',

    transition:
      'width 0.5s, height 0.5s, border-color 0.5s, background-color 0.5s',
  },
})
