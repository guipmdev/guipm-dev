import { styled } from '@/styled-system/jsx'

export const ButtonContainer = styled('button', {
  base: {
    position: 'relative',

    padding: '0.5rem',
    border: '1px solid white',
    borderColor: 'title',
    borderRadius: '6px',
    margin: '0 auto',

    textStyle: 'md',
    textTransform: 'uppercase',
    color: 'title',

    cursor: 'pointer',

    transition: 'color 0.2s, background-color 0.2s, margin 0.5s',

    '&:hover': {
      backgroundColor: 'title',

      borderColor: 'title',

      color: 'background',
    },
  },
})
