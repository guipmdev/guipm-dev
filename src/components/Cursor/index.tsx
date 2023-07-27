'use client'

import { useCallback, useEffect } from 'react'

import { useMouseEvent } from '@/hooks/useMouseEvent'

import { CursorContainer, Dot, Outline } from './styles'

const hoverableTags = ['A', 'BUTTON']
const classNameEventTrigger = 'hoverable'

export function Cursor() {
  const { mousePosition, cursorRef } = useMouseEvent()

  const toggleCursorSize = useCallback(
    (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement

      const isHoverable =
        hoverableTags.includes(targetElement?.tagName) ||
        targetElement?.classList.contains(classNameEventTrigger)

      if (isHoverable && cursorRef?.current) {
        cursorRef.current.classList.toggle('hover')
      }
    },
    [cursorRef],
  )

  useEffect(() => {
    document.addEventListener('mouseover', toggleCursorSize)
    document.addEventListener('mouseout', toggleCursorSize)

    return () => {
      document.removeEventListener('mouseover', toggleCursorSize)
      document.removeEventListener('mouseout', toggleCursorSize)
    }
  }, [toggleCursorSize])

  return (
    <CursorContainer
      ref={cursorRef}
      style={{
        top: mousePosition.y + 'px',
        left: mousePosition.x + 'px',
      }}
    >
      <Outline className="outline"></Outline>
      <Dot className="dot"></Dot>
    </CursorContainer>
  )
}
