import { ExternalLinkIcon, Link1Icon } from '@radix-ui/react-icons'
import Link from 'next/link'

import { HeaderCardItem } from './Header'
import { HeadingCardItem } from './Heading'
import { CardItemContainer, CardItemContent, Infos, Tags } from './styles'

interface CustomDate {
  month: number
  year: number
}

interface AdditionalLink {
  title: string
  url: string
  type: string
}

export interface Experience {
  id: string
  startMonthYear: CustomDate
  endMonthYear: CustomDate | null
  title: string
  companyName: string | null
  link: string | null
  location: {
    countryCode: string
    postalCode: string
  } | null
  locationName: 'Presencial' | 'Híbrida' | 'Remota' | null
  description: string[] | null
  additionalLinks: AdditionalLink[] | null
  skills: string[] | null
}

export interface Project {
  id: string
  imagePath: string
  title: string
  link: string | null
  description: string[] | null
  additionalLinks: AdditionalLink[] | null
  tags: string[] | null
}

type CardItemProps =
  | {
      type: 'experience'
      data: Experience
    }
  | {
      type: 'project'
      data: Project
    }

export function CardItem(props: CardItemProps) {
  const { type, data } = props
  const { title, link, description, additionalLinks } = data

  let headingTitle = title
  if (type === 'experience' && data.companyName !== null) {
    headingTitle += ` · ${data.companyName}`
  }

  const hasLink = link !== null
  const hasDescription = description !== null
  const hasAdditionalLinks = additionalLinks !== null

  const tags = type === 'experience' ? data.skills : data.tags
  const hasTags = tags !== null

  return (
    <CardItemContainer>
      <CardItemContent {...(type === 'project' && { type })}>
        <HeaderCardItem {...props} />

        <div>
          <HeadingCardItem {...props}>
            {hasLink ? (
              <Link href={link} target="_blank" rel="noopener noreferrer">
                {headingTitle}
                <span className="icon">
                  <ExternalLinkIcon />
                </span>
                <span className="hoverable"></span>
              </Link>
            ) : (
              <span>{headingTitle}</span>
            )}
          </HeadingCardItem>

          <Infos>
            {hasDescription && (
              <div>
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

            {hasAdditionalLinks && (
              <ul>
                {additionalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link1Icon /> {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Infos>

          {hasTags && (
            <Tags>
              {tags.map((tag, index) => (
                <li key={index}>
                  <span>{tag}</span>
                </li>
              ))}
            </Tags>
          )}
        </div>
      </CardItemContent>
    </CardItemContainer>
  )
}
