import { useCallback, useEffect, useRef, useState } from 'react'

import { useIsMounted } from './useIsMounted'

interface MousePosition {
  x: number
  y: number
}

export function useMouseEvent() {
  const isMounted = useIsMounted()
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: -52.5,
    y: -52.5,
  })

  const cursorRef = useRef<HTMLDivElement>(null)

  const toggleCursorVisibility = (opacity: '100%' | '0%') => {
    if (cursorRef?.current) cursorRef.current.style.opacity = opacity
  }

  const updateMousePosition = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  const mouseEnterEvent = useCallback(() => {
    toggleCursorVisibility('100%')
  }, [])
  const mouseLeaveEvent = useCallback(() => {
    toggleCursorVisibility('0%')
  }, [])

  const toggleGradientDisplay = useCallback(
    (display: 'none' | 'flex') => {
      if (cursorRef?.current) cursorRef.current.style.display = display
    },
    [cursorRef],
  )

  useEffect(() => {
    if (isMounted()) {
      window.addEventListener('mousemove', updateMousePosition)

      document.addEventListener('mouseenter', mouseEnterEvent)
      document.addEventListener('mouseleave', mouseLeaveEvent)

      toggleGradientDisplay('flex')
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)

      document.removeEventListener('mouseenter', mouseEnterEvent)
      document.removeEventListener('mouseleave', mouseLeaveEvent)

      toggleGradientDisplay('none')
    }
  }, [isMounted, mouseEnterEvent, mouseLeaveEvent, toggleGradientDisplay])

  return { mousePosition, cursorRef }
}
