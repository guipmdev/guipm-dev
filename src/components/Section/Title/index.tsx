'use client'

import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'

import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  sectionId: string
  sectionTitle: string
}

export function SectionTitle({ sectionId, sectionTitle }: SectionTitleProps) {
  const ref = useRef<HTMLAnchorElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    threshold: 1,
    rootMargin: '-1px 0px 0px 0px',
  })
  const [isPinned, setIsPinned] = useState(false)

  const isStickyDetectionReady = !!entry

  const sectionLink = `#${sectionId}`

  useEffect(() => {
    if (isStickyDetectionReady) {
      const elementVisibilityPercentage = entry.intersectionRatio

      setIsPinned(elementVisibilityPercentage < 1)
    }
  }, [entry?.intersectionRatio, isStickyDetectionReady])

  return (
    <SectionTitleContainer
      ref={ref}
      href={sectionLink}
      className={isPinned ? 'pinned' : undefined}
      isSticky={isStickyDetectionReady}
    >
      <h2>{sectionTitle}</h2>
    </SectionTitleContainer>
  )
}
