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

  const toggleOpacity = useCallback((visible: boolean) => {
    if (cursorRef?.current) {
      cursorRef.current.style.opacity = visible ? '100%' : '0%'
    }
  }, [])

  const updateMousePosition = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  const mouseEnterEvent = useCallback(() => {
    toggleOpacity(true)
  }, [toggleOpacity])
  const mouseLeaveEvent = useCallback(() => {
    toggleOpacity(false)
  }, [toggleOpacity])

  useEffect(() => {
    if (isMounted()) {
      window.addEventListener('mousemove', updateMousePosition)

      document.documentElement.addEventListener('mouseenter', mouseEnterEvent)
      document.documentElement.addEventListener('mouseleave', mouseLeaveEvent)

      toggleOpacity(true)
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

      toggleOpacity(false)
    }
  }, [isMounted, mouseEnterEvent, mouseLeaveEvent, toggleOpacity])

  return { mousePosition, cursorRef }
}
