import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

import guipmdevLogo from '@/assets/guipmdev-logo.svg'
import { icons } from '@/libs/radixIcons'

import { Navbar } from '../Navbar'
import { AsideHeaderContainer, Bio, SocialLinks } from './styles'

type LinkType = typeof icons

interface Link {
  type: keyof LinkType
  title: string
  url: string
}
interface Profile {
  headline: string
  links: Link[]
}

async function getProfile(): Promise<Profile> {
  const response = await fetch(`${process.env.API_BASE_URL}/profile`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

export async function AsideHeader() {
  const profile = await getProfile()

  const { headline, links } = profile

  const hasLinks = links.length > 0

  return (
    <AsideHeaderContainer>
      <Bio>
        <div className="logo">
          <Image src={guipmdevLogo} alt="" />

          <div>
            <h1>GUIPM.DEV</h1>
            <strong>
              <span>&lt;</span>Fullstack developer <span>/&gt;</span>
            </strong>
          </div>
        </div>

        <p>{headline}</p>
      </Bio>

      <Navbar />

      {hasLinks && (
        <SocialLinks>
          {links.map((link, index) => {
            const Icon = icons[link.type]

            return (
              <li key={index}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                >
                  <Icon width={24} height={24} />
                </Link>
              </li>
            )
          })}
        </SocialLinks>
      )}
    </AsideHeaderContainer>
  )
}
