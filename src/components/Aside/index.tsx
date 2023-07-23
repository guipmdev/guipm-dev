import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

import guipmdevLogo from '@/assets/guipmdev-logo.svg'

import { AsideContainer, Bio, Navbar, SocialLinks } from './styles'

export function Aside() {
  return (
    <AsideContainer>
      <Bio>
        <div className="logo">
          <Image src={guipmdevLogo} alt="" />

          <div>
            <h1>GUIPM.DEV</h1>
            <pre>
              <span>&lt;</span>Fullstack developer <span>/&gt;</span>
            </pre>
          </div>
        </div>

        <p>
          👋 Olá! Meu nome é Guilherme, um desenvolvedor apaixonado por explorar
          o universo dos códigos e encarar desafios.
        </p>
      </Bio>

      <Navbar>
        <Link href="/" className="active">
          <span></span> SOBRE
        </Link>

        <Link href="/">
          <span></span> EXPERIÊNCIA
        </Link>

        <Link href="/">
          <span></span> PROJETOS
        </Link>
      </Navbar>

      <SocialLinks>
        <li>
          <Link href="/">
            <GitHubLogoIcon width={24} height={24} />
          </Link>
        </li>

        <li>
          <Link href="/">
            <LinkedInLogoIcon width={24} height={24} />
          </Link>
        </li>

        <li>
          <Link href="/">
            <EnvelopeClosedIcon width={24} height={24} />
          </Link>
        </li>
      </SocialLinks>
    </AsideContainer>
  )
}
