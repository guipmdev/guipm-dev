import { styled } from '@/styled-system/jsx'

export const HomeContainer = styled('div', {
  base: {
    display: 'grid',
    gridTemplate: {
      base: 'auto / auto',
      lg: `"a b" auto
           "c c" auto / minmax(420px, 38%) 1fr`,
    },
    rowGap: '1rem',
    columnGap: '2rem',
    alignItems: 'start',

    '& main': {
      display: 'flex',
      flexDirection: 'column',
      gap: '6rem',
      gridArea: 'auto',

      paddingBottom: '5rem',

      lg: {
        gridArea: 'b',
        gap: '9rem',
      },
    },

    '& footer': {
      gridArea: {
        base: 'auto',
        lg: 'c',
      },

      textAlign: 'center',

      '& p:first-child': {
        textStyle: 'sm',

        marginBottom: '0.5rem',
      },

      '& p:last-child': {
        color: 'subtitle',
        textStyle: 'xs',
      },

      '& strong': {
        fontWeight: 'medium',
      },

      '& a': {
        transition: 'color 0.2s',

        '&:hover': {
          color: 'text',
        },
      },
    },
  },
})
