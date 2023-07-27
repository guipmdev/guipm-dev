'use client'

import { ArrowRightIcon } from '@radix-ui/react-icons'
import { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { CustomLink, SectionContainer, SectionTitle } from './styles'

interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  id: string
  title: string
  link?: {
    text: string
    url: string
  }
  children: React.ReactNode
  changeActiveSection: (newActiveSection: string) => void
}

export function Section({
  id,
  title,
  link,
  children,
  changeActiveSection,
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

  const externalURL = !!link?.url.includes('https')

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

      {!!link && (
        <CustomLink
          href={link.url}
          {...(externalURL && {
            target: '_blank',
            rel: 'noopener noreferrer',
          })}
          className="cursorHover"
        >
          <span>{link.text}</span> <ArrowRightIcon />
        </CustomLink>
      )}
    </SectionContainer>
  )
}
