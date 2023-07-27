'use client'

import { useMousePosition } from '@/hooks/useMousePosition'

import { CursorGradientContainer } from './styles'

export function CursorGradient() {
  const mousePosition = useMousePosition()

  return (
    <CursorGradientContainer
      style={{
        top: mousePosition.y + 'px',
        left: mousePosition.x + 'px',
      }}
    ></CursorGradientContainer>
  )
}
