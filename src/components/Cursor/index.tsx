'use client'

import { useCallback, useEffect, useRef } from 'react'

import { useMousePosition } from '@/hooks/useMousePosition'

import { CursorContainer, Dot, Outline } from './styles'

export function Cursor() {
  const mousePosition = useMousePosition()

  const cursorRef = useRef<HTMLDivElement>(null)

  const mouseEnterEvent = useCallback(() => {
    if (cursorRef?.current) {
      cursorRef.current.style.opacity = '1'
    }
  }, [])

  const mouseLeaveEvent = useCallback(() => {
    if (cursorRef?.current) {
      cursorRef.current.style.opacity = '0'
    }
  }, [])

  const mouseOverEvent = useCallback((event: MouseEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const targetClassname = (event.target as any)?.className

    const hasClassname = targetClassname.length > 0

    if (hasClassname && targetClassname.includes('cursorHover')) {
      if (cursorRef?.current) {
        cursorRef.current.classList.toggle('hover')
      }
    }
  }, [])

  const mouseOutEvent = useCallback((event: MouseEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const targetClassname = (event.target as any)?.className

    const hasClassname = targetClassname.length > 0

    if (hasClassname && targetClassname.includes('cursorHover')) {
      if (cursorRef?.current) {
        cursorRef.current.classList.toggle('hover')
      }
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mouseenter', mouseEnterEvent)
    document.addEventListener('mouseleave', mouseLeaveEvent)
    document.addEventListener('mouseover', mouseOverEvent)
    document.addEventListener('mouseout', mouseOutEvent)

    return () => {
      document.removeEventListener('mouseenter', mouseEnterEvent)
      document.removeEventListener('mouseleave', mouseLeaveEvent)
      document.removeEventListener('mouseover', mouseOverEvent)
      document.removeEventListener('mouseout', mouseOutEvent)
    }
  }, [mouseEnterEvent, mouseLeaveEvent, mouseOutEvent, mouseOverEvent])

  return (
    <CursorContainer
      className=""
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
