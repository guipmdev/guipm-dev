import { styled } from '@/styled-system/jsx'

export const ExperienceItemContainer = styled('li', {
  base: {
    lg: {
      position: 'relative',

      cursor: 'pointer',

      '&::before': {
        position: 'absolute',
        top: '-1.5rem',
        left: '-1.5rem',

        content: '""',

        backgroundColor: 'cardBackground',
        width: 'calc(100% + (1.5rem * 2))',
        height: 'calc(100% + (1.5rem * 2))',

        padding: '1.5rem',
        borderTop: '1px solid',
        borderTopColor: 'cardTopBorder',
        borderRadius: '6px',

        boxShadow: 'card',

        backdropFilter: 'blur(8px)',

        transition: 'opacity 0.2s',

        opacity: 0,
      },

      '&:hover': {
        '&::before': {
          opacity: '100%',
        },

        '& h3 a': {
          color: 'primary',

          '& span svg': {
            transform: 'translate(50%, -25%)',
          },
        },
      },
    },

    '& > div': {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1rem',

      sm: {
        gridTemplateColumns: 'minmax(200px, 20%) 1fr',
      },

      lg: {
        position: 'relative',
        zIndex: 1,
        gridTemplateColumns: 'minmax(120px, 20%) 1fr',
      },

      '& header': {
        color: 'subtitle',
        textStyle: 'xs',
        fontWeight: 'semibold',
      },

      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      },
    },
  },
})

export const Heading = styled('h3', {
  base: {
    '& a': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',

      color: 'title',
      fontWeight: 'medium',

      transition: 'color 0.2s',

      '& span': {
        position: 'relative',

        display: 'flex',
        alignItems: 'center',

        width: '0.75rem',
        height: '0.75rem',

        '& svg': {
          position: 'absolute',

          width: '0.5rem',
          height: 'auto',

          transition: 'transform 0.2s',
        },
      },

      '&:hover': {
        color: 'primary',

        '& span svg': {
          transform: 'translate(50%, -25%)',
        },
      },
    },

    '& p': {
      color: 'subtitle',
      fontWeight: 'medium',
    },
  },
})

export const Infos = styled('div', {
  base: {
    '& > div': {
      marginBottom: '0.5rem',

      '& p': {
        textStyle: 'sm',

        '& + p': {
          marginTop: '0.25rem',
        },
      },
    },

    '& ul': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',

      '& li a': {
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',

        color: 'title',
        textStyle: 'sm',
        fontWeight: 'medium',

        transition: 'color 0.2s',

        '&:hover': {
          color: 'primary',
        },
      },
    },
  },
})

export const Skills = styled('ul', {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.375rem',

    '& span': {
      display: 'block',
      flexWrap: 'wrap',

      background: 'primaryDark',

      padding: '0.25rem 0.5rem',
      borderRadius: '3.125rem',

      color: 'primary',
      textStyle: 'xs',
    },
  },
})
