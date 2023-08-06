import Link from 'next/link'
import { IconType } from 'react-icons'
import { RxExternalLink } from 'react-icons/rx'

import { Experience, Project } from '@/interfaces/cardItem'
import { icons } from '@/libs/reactIcons'

import { HeaderCardItem } from './Header'
import { HeadingCardItem } from './Heading'
import { CardItemContainer, CardItemContent, Infos, Tags } from './styles'

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
                  <RxExternalLink size={9} />
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
                  <p key={paragraph + index}>{paragraph}</p>
                ))}
              </div>
            )}

            {hasAdditionalLinks && (
              <ul>
                {additionalLinks.map((link, index) => {
                  const Icon: IconType = icons[link.type]

                  return (
                    <li key={link.title + index}>
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon size={12} /> {link.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </Infos>

          {hasTags && (
            <Tags>
              {tags.map((tag, index) => (
                <li key={tag + index}>
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
