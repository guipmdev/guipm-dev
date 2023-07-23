import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

import guipmdevLogo from '@/assets/guipmdev-logo.svg'

import { AsideContainer } from './styles'

export function Aside() {
  return (
    <AsideContainer>
      <div>
        <div>
          <Image src={guipmdevLogo} width="65" height="65" alt="" />

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
      </div>

      <nav>
        <Link href="">
          <span></span> SOBRE
        </Link>

        <Link href="">
          <span></span> EXPERIÊNCIA
        </Link>

        <Link href="">
          <span></span> PROJETOS
        </Link>
      </nav>

      <ul>
        <Link href="">
          <GitHubLogoIcon />
        </Link>

        <Link href="">
          <LinkedInLogoIcon />
        </Link>

        <Link href="">
          <EnvelopeClosedIcon />
        </Link>
      </ul>
    </AsideContainer>
  )
}
