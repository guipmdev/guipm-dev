'use client'

import { useMouseEvent } from '@/hooks/useMouseEvent'

import { CursorGradientContainer } from './styles'

export function CursorGradient() {
  const { mousePosition, cursorRef } = useMouseEvent()

  return (
    <CursorGradientContainer
      ref={cursorRef}
      style={{
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
      }}
    ></CursorGradientContainer>
  )
}
