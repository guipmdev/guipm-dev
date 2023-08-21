import { styled } from '@/styled-system/jsx'

export const ParagraphCardItemContainer = styled('div', {
  base: {
    '& > div': {
      marginBottom: '0.5rem',
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: 10,
      lineClamp: 10,

      '& p': {
        textStyle: 'sm',

        '& + p': {
          marginTop: '0.25rem',
        },
      },
    },
  },
})
