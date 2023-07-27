import { useEffect, useRef, useState } from 'react'

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

  const mouseEnterEvent = () => {
    if (cursorRef?.current) {
      cursorRef.current.style.opacity = '100%'
    }
  }

  const mouseLeaveEvent = () => {
    if (cursorRef?.current) {
      cursorRef.current.style.opacity = '0%'
    }
  }

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    document.addEventListener('mouseenter', mouseEnterEvent)
    document.addEventListener('mouseleave', mouseLeaveEvent)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)

      document.removeEventListener('mouseenter', mouseEnterEvent)
      document.removeEventListener('mouseleave', mouseLeaveEvent)
    }
  }, [])

  return { mousePosition, cursorRef }
}
