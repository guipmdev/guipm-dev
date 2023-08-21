import { styled } from '@/styled-system/jsx'

export const ParagraphCardItemContainer = styled('div', {
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
  },
})
