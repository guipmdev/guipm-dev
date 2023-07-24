import { styled } from '@/styled-system/jsx'

export const SectionContainer = styled('section', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.25rem',
  },
})

export const SectionTitle = styled('h2', {
  base: {
    top: 0,

    display: {
      base: 'block',
      lg: 'none',
    },

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
      width: 'calc(100% + (3rem * 2))',

      marginLeft: '-3rem',

      backdropFilter: 'blur(8px)',
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
