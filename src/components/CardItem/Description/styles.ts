import { styled } from '@/styled-system/jsx'

export const ParagraphCardItemContainer = styled('div', {
  base: {
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '0.75rem',

    '& > div': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',

      marginBottom: '0.5rem',

      transition: 'max-height 0.5s, mask-position 0.5s',

      '& p': {
        textStyle: 'sm',

        '& + p': {
          marginTop: '0.25rem',
        },
      },
    },
  },
})
