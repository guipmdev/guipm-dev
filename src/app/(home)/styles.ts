import { styled } from '@/styled-system/jsx'

export const HomeContainer = styled('div', {
  base: {
    display: 'grid',
    gridTemplate: {
      base: '1fr',
      lg: `"a b" auto
           "c c" auto / minmax(420px, 38%) 1fr`,
    },
    gap: '2rem',

    '& main': {
      display: 'flex',
      flexDirection: 'column',
      gap: '6rem',
      gridArea: {
        base: 'auto',
        lg: 'b',
      },

      paddingBottom: '5rem',
    },

    '& footer': {
      gridArea: {
        base: 'auto',
        lg: 'c',
      },
    },
  },
})
