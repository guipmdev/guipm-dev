import { styled } from '@/styled-system/jsx'

export const HeaderCardItemContainer = styled('header', {
  base: {
    '& span': {
      color: 'subtitle',
      textStyle: 'xs',
      fontWeight: 'semibold',
    },

    '& img': {
      border: '2px solid',
      borderColor: 'imageBorder.base',
      borderRadius: '4px',

      width: '100%',
      height: 'auto',
      maxWidth: '200px',

      transition: 'border-color 0.2s',
    },
  },
})
