'use client'

import { useCallback, useEffect } from 'react'
import { useIsMounted } from 'usehooks-ts'

import { useMouseEvent } from '@/hooks/useMouseEvent'

import { CursorContainer, Dot, DottedOutline, Outline } from './styles'

const hoverableTags = ['A', 'BUTTON']
const classNameEventTrigger = 'hoverable'

export function Cursor() {
  const isMounted = useIsMounted()
  const { mousePosition, cursorRef } = useMouseEvent()

  const toggleCursorSize = useCallback(
    (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement

      const isHoverable =
        hoverableTags.includes(targetElement?.tagName) ||
        targetElement?.classList.contains(classNameEventTrigger)

      if (isHoverable && cursorRef?.current) {
        if (event.type === 'mouseover') {
          cursorRef.current.classList.add('hover')
        } else if (event.type === 'mouseout') {
          cursorRef.current.classList.remove('hover')
        }
      }
    },
    [cursorRef],
  )

  useEffect(() => {
    if (isMounted()) {
      document.addEventListener('mouseover', toggleCursorSize)
      document.addEventListener('mouseout', toggleCursorSize)
    }

    return () => {
      document.removeEventListener('mouseover', toggleCursorSize)
      document.removeEventListener('mouseout', toggleCursorSize)
    }
  }, [isMounted, toggleCursorSize])

  return (
    <CursorContainer
      ref={cursorRef}
      style={{
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
      }}
    >
      <DottedOutline className="dottedOutline"></DottedOutline>
      <Outline className="outline"></Outline>
      <Dot className="dot"></Dot>
    </CursorContainer>
  )
}
