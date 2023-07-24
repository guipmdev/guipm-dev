import { styled } from '@/styled-system/jsx'

export const AsideHeaderContainer = styled('header', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: {
      base: '2rem',
      lg: '4rem',
    },
    gridArea: {
      base: 'auto',
      lg: 'a',
    },

    width: '100%',

    marginBottom: {
      base: '6rem',
      lg: 0,
    },
  },
})

export const Bio = styled('div', {
  base: {
    '& .logo': {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',

      margin: '0 auto 1rem',
      width: 'fit-content',

      color: 'title',

      sm: {
        margin: '0 0 1rem',
        width: '100%',
      },

      '& img': {
        width: '2.8125rem',
        height: '2.8125rem',

        sm: {
          width: '4.0625rem',
          height: '4.0625rem',
        },
      },

      '& h1': {
        textStyle: {
          base: '3xl',
          sm: '5xl',
        },
        fontWeight: 'black',
      },

      '& strong': {
        fontFamily: 'mono',
        textStyle: {
          base: 'sm',
          sm: 'xl',
        },
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
    display: {
      base: 'none',
      lg: 'block',
    },

    '& a': {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',

      textStyle: 'xs',
      fontWeight: 'bold',

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
    justifyContent: {
      base: 'center',
      sm: 'flex-start',
    },
    gap: '1.5rem',

    '& li a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      _motionSafe: {
        transition: 'color 0.2s',
      },

      _hover: {
        color: 'title',
      },
    },
  },
})
