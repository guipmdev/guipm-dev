import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

const buttonStyle = cva({
  base: {
    backgroundColor: 'red',
    textAlign: 'center',
  },
})

export const Button = styled('button', {
  base: {
    ...buttonStyle.config.base,
  },
})
