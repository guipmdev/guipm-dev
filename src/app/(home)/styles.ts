import { styled } from '@/styled-system/jsx'

export const HomeContainer = styled('div', {
  base: {
    display: 'grid',
    gridTemplateColumns: {
      base: '1fr',
      lg: 'minmax(420px, 38%) 1fr',
    },
    gap: '2rem',
  },
})
