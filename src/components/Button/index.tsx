import { ComponentPropsWithRef, forwardRef } from 'react'

import { ButtonContainer } from './styles'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  text: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ text, ...rest }, ref) {
    return (
      <ButtonContainer ref={ref} {...rest}>
        {text}
      </ButtonContainer>
    )
  },
)
