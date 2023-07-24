'use client'

import { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { SectionContainer, SectionTitle } from './styles'

interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  title: string
  children: React.ReactNode
}

export function Section({ title, children, ...rest }: SectionProps) {
  const { ref, entry } = useInView({
    threshold: [1],
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
    <SectionContainer {...rest}>
      <SectionTitle
        className={isPinned ? 'pinned' : undefined}
        isSticky={isStickyDetectionReady}
        ref={ref}
      >
        {title}
      </SectionTitle>

      {children}
    </SectionContainer>
  )
}
