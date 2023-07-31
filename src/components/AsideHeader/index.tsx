import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

import guipmdevLogo from '@/assets/guipmdev-logo.svg'

import { Navbar } from '../Navbar'
import { AsideHeaderContainer, Bio, SocialLinks } from './styles'

interface Profile {
  headline: string
  links: Record<'github' | 'linkedin' | 'email', string>
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

        <p>{profile.headline}</p>
      </Bio>

      <Navbar />

      <SocialLinks>
        <li>
          <Link
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <GitHubLogoIcon width={24} height={24} />
          </Link>
        </li>

        <li>
          <Link
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <LinkedInLogoIcon width={24} height={24} />
          </Link>
        </li>

        <li>
          <Link
            href={profile.links.email}
            target="_blank"
            rel="noopener noreferrer"
            title="E-mail"
          >
            <EnvelopeClosedIcon width={24} height={24} />
          </Link>
        </li>
      </SocialLinks>
    </AsideHeaderContainer>
  )
}
