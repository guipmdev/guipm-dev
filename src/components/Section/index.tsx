'use client'

import { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { SectionContainer, SectionTitle } from './styles'

interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  title: string
  children: React.ReactNode
  changeActiveSection: (newActiveSection: string) => void
  id: string
}

export function Section({
  title,
  children,
  changeActiveSection,
  id,
  ...rest
}: SectionProps) {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.75,
  })
  const { ref: sectionTitleRef, entry: sectionTitleEntry } = useInView({
    threshold: 1,
    rootMargin: '-1px 0px 0px 0px',
  })

  const [isPinned, setIsPinned] = useState(false)

  const isStickyDetectionReady = !!sectionTitleEntry
  useEffect(() => {
    if (isStickyDetectionReady) {
      const elementVisibilityPercentage = sectionTitleEntry.intersectionRatio

      setIsPinned(elementVisibilityPercentage < 1)
    }
  }, [sectionTitleEntry?.intersectionRatio, isStickyDetectionReady])

  useEffect(() => {
    if (sectionInView) {
      changeActiveSection(id)
    }
  }, [changeActiveSection, id, sectionInView])

  return (
    <SectionContainer ref={sectionRef} id={id} {...rest}>
      <SectionTitle
        className={isPinned ? 'pinned' : undefined}
        isSticky={isStickyDetectionReady}
        ref={sectionTitleRef}
      >
        {title}
      </SectionTitle>

      {children}
    </SectionContainer>
  )
}
