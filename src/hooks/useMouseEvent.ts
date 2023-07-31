import { useCallback, useEffect, useRef, useState } from 'react'
import { useIsMounted } from 'usehooks-ts'

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

  const toggleOpacity = useCallback(
    (opacity: '0%' | '100%') => {
      if (cursorRef?.current) cursorRef.current.style.opacity = opacity
    },
    [cursorRef],
  )

  useEffect(() => {
    if (isMounted()) {
      window.addEventListener('mousemove', updateMousePosition)

      document.documentElement.addEventListener('mouseenter', mouseEnterEvent)
      document.documentElement.addEventListener('mouseleave', mouseLeaveEvent)

      toggleOpacity('100%')
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)

      document.documentElement.removeEventListener(
        'mouseenter',
        mouseEnterEvent,
      )
      document.documentElement.removeEventListener(
        'mouseleave',
        mouseLeaveEvent,
      )

      toggleOpacity('0%')
    }
  }, [isMounted, mouseEnterEvent, mouseLeaveEvent, toggleOpacity])

  return { mousePosition, cursorRef }
}
