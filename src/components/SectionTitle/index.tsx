'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  id: string
  title: string
}

export function SectionTitle({ id, title }: SectionTitleProps) {
  const { ref, entry } = useInView({
    threshold: 1,
    rootMargin: '-1px 0px 0px 0px',
  })

  const [isPinned, setIsPinned] = useState(false)

  const isStickyDetectionReady = !!entry
  useEffect(() => {
    if (isStickyDetectionReady) {
      const elementVisibilityPercentage = entry.intersectionRatio

      setIsPinned(elementVisibilityPercentage < 1)
    }
  }, [entry?.intersectionRatio, isStickyDetectionReady])

  return (
    <SectionTitleContainer
      className={isPinned ? 'pinned' : undefined}
      isSticky={isStickyDetectionReady}
      ref={ref}
      href={`#${id}`}
    >
      <h2>{title}</h2>
    </SectionTitleContainer>
  )
}
