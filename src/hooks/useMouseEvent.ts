import { useCallback, useEffect, useRef, useState } from 'react'

interface MousePosition {
  x: number
  y: number
}

export function useMouseEvent() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
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

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)

    document.addEventListener('mouseenter', mouseEnterEvent)
    document.addEventListener('mouseleave', mouseLeaveEvent)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)

      document.removeEventListener('mouseenter', mouseEnterEvent)
      document.removeEventListener('mouseleave', mouseLeaveEvent)
    }
  }, [mouseEnterEvent, mouseLeaveEvent])

  return { mousePosition, cursorRef }
}
