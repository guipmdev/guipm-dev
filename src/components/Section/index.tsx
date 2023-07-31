import React, { ComponentPropsWithoutRef } from 'react'
import { RxArrowRight } from 'react-icons/rx'

import { SectionTitle } from '../SectionTitle'
import { CustomLink, SectionContainer } from './styles'

interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  id: string
  title: string
  link?: {
    text: string
    url: string
  }
  children: React.ReactNode
}

export function Section({ id, title, link, children, ...rest }: SectionProps) {
  const externalURL = !!link?.url.includes('https')

  return (
    <SectionContainer id={id} {...rest}>
      <SectionTitle id={id} title={title} />

      {children}

      {!!link && (
        <CustomLink
          href={link.url}
          {...(externalURL && {
            target: '_blank',
            rel: 'noopener noreferrer',
          })}
        >
          <span>{link.text}</span> <RxArrowRight size={12} />
        </CustomLink>
      )}
    </SectionContainer>
  )
}
