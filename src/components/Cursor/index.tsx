'use client'

import { useCallback, useEffect } from 'react'

import { useMouseEvent } from '@/hooks/useMouseEvent'

import { CursorContainer, Dot, Outline } from './styles'

const hoverableTags = ['A', 'BUTTON']
const classNameEventTrigger = 'hoverable'

export function Cursor() {
  const { mousePosition, cursorRef } = useMouseEvent()

  const mouseOverEvent = useCallback(
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

  const mouseOutEvent = useCallback(
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
    document.addEventListener('mouseover', mouseOverEvent)
    document.addEventListener('mouseout', mouseOutEvent)

    return () => {
      document.removeEventListener('mouseover', mouseOverEvent)
      document.removeEventListener('mouseout', mouseOutEvent)
    }
  }, [mouseOutEvent, mouseOverEvent])

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
