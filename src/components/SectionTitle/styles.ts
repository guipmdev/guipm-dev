import { styled } from '@/styled-system/jsx'

export const SectionTitleContainer = styled('h2', {
  base: {
    display: {
      base: 'block',
      lg: 'none',
    },

    marginBottom: '2.25rem',

    color: 'title',
    textStyle: 'sm',
    fontWeight: 'bold',
  },
})
