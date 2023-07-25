import { styled } from '@/styled-system/jsx'

export const ExperienceContainer = styled('ul', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',

    lg: {
      '& > li': {
        transition: 'opacity 0.2s',
      },

      '&:hover > li:not(:hover)': {
        opacity: '50%',
      },
    },
  },
})
