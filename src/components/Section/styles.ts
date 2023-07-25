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

export const SectionTitle = styled('h2', {
  base: {
    top: 0,
    zIndex: 2,

    display: {
      base: 'block',
      lg: 'none',
    },

    width: '100%',

    padding: '1.25rem 0',

    color: 'title',
    textStyle: 'sm',
    fontWeight: 'bold',

    '&.pinned::before': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      zIndex: -1,

      content: '""',

      backgroundColor: 'sectionTitleBackground',
      width: 'calc(100% + (1.5rem * 2))',

      marginLeft: '-1.5rem',

      backdropFilter: 'blur(8px)',

      md: {
        width: 'calc(100% + (3rem * 2))',

        marginLeft: '-3rem',
      },
    },
  },
  variants: {
    isSticky: {
      true: {
        position: 'sticky',
      },
    },
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

      width: '11px',
      height: 'auto',

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
