'use client'

import { useCallback, useEffect } from 'react'

import { useIsMounted } from '@/hooks/useIsMounted'
import { useMouseEvent } from '@/hooks/useMouseEvent'

import { CursorContainer, Dot, Outline } from './styles'

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
        cursorRef.current.classList.toggle('hover')
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

  const updateMousePosition = async () => {
    if (cursorRef?.current) {
      await new Promise((resolve) => setTimeout(resolve, 150))

      cursorRef.current.style.top = mousePosition.y + 'px'
      cursorRef.current.style.left = mousePosition.x + 'px'
    }
  }
  updateMousePosition()

  return (
    <CursorContainer ref={cursorRef}>
      <Outline className="outline"></Outline>
      <Dot className="dot"></Dot>
    </CursorContainer>
  )
}
