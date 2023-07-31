import { styled } from '@/styled-system/jsx'

export const AsideHeaderContainer = styled('header', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    gridArea: 'auto',

    width: '100%',

    marginBottom: '6rem',

    lg: {
      position: 'sticky',
      top: '6rem',

      gridArea: 'a',
      gap: '4rem',

      height: '100%',
      maxHeight: 'calc(100vh - (6rem * 2))',

      marginBottom: 0,
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
        height: 'auto',

        transform: 'rotate(0deg)',

        transition: 'transform 1s',

        sm: {
          width: '4.0625rem',
          height: 'auto',
        },

        '&:hover': {
          transform: 'rotate(-22.5deg)',
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

export const SocialLinks = styled('ul', {
  base: {
    display: 'flex',
    justifyContent: {
      base: 'center',
      sm: 'flex-start',
    },
    gap: '1.5rem',

    marginTop: 'auto',

    '& li a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      transition: 'color 0.2s',

      '&:hover': {
        color: 'title',
      },
    },
  },
})
