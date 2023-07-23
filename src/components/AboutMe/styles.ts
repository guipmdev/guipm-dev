import { styled } from '@/styled-system/jsx'

export const AboutMeContainer = styled('section', {
  base: {
    '& h2': {
      display: {
        base: 'block',
        lg: 'none',
      },

      marginBottom: '2.25rem',

      color: 'title',
      textStyle: 'sm',
      fontWeight: 'bold',
    },

    '& p + p': {
      marginTop: '1rem',
    },
  },
})
