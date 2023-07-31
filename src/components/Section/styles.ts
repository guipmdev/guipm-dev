import Link from 'next/link'

import { styled } from '@/styled-system/jsx'

export const SectionContainer = styled('section', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: {
      base: 'center',
      sm: 'start',
    },
    gap: '1rem',
  },
})

export const CustomLink = styled(Link, {
  base: {
    width: 'fit-content',

    color: 'title',
    fontWeight: 'semibold',

    lg: {
      marginTop: '1.5rem',
    },

    '& span': {
      borderBottom: '1px solid transparent',

      transition: 'border-color 0.2s',
    },

    '& svg': {
      position: 'relative',

      display: 'inline',

      marginLeft: '0.25rem',

      transition: 'transform 0.2s',
    },

    '&:hover': {
      '& span': {
        borderBottomColor: 'primary',
      },

      '& svg': {
        transform: 'translateX(4px)',
      },
    },
  },
})
