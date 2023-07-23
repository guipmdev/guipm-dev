import { styled } from '@/styled-system/jsx'

export const AsideContainer = styled('aside', {
  base: {
    width: '100%',
  },
})

export const Bio = styled('div', {
  base: {
    marginBottom: '4rem',

    '& .logo': {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',

      marginBottom: '1rem',

      color: 'title',

      '& img': {
        minWidth: 'fit-content',
      },

      '& h1': {
        textStyle: '5xl',
        fontWeight: 'black',
      },

      '& pre': {
        fontFamily: 'mono',
        textStyle: 'xl',
        fontWeight: 'medium',

        '& span': {
          color: 'primary',
        },
      },
    },
  },
})

export const Navbar = styled('nav', {
  base: {
    marginBottom: '4rem',

    '& a': {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',

      textStyle: 'xs',
      fontWeight: 'bold',

      _motionReduce: {
        '&, & span': {
          transition: 'none',
        },
      },
      _motionSafe: {
        '&, & span': {
          transition: 'color 0.2s, width 0.2s, background-color 0.2s',
        },
      },

      '& + a': {
        marginTop: '1.5rem',
      },

      '& span': {
        display: 'block',

        backgroundColor: 'subtitle',
        width: '32px',
        height: '1px',
      },

      '&:hover, &.active': {
        color: 'title',

        '& span': {
          backgroundColor: 'title',
          width: '64px',
        },
      },
    },
  },
})

export const SocialLinks = styled('ul', {
  base: {
    display: 'flex',
    gap: '1.5rem',

    '& li': {
      '& a': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        _motionReduce: {
          '&, & span': {
            transition: 'none',
          },
        },
        _motionSafe: {
          '&, & span': {
            transition: 'color 0.2s',
          },
        },

        _hover: {
          color: 'title',
        },
      },
    },
  },
})
