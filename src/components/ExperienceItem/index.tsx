import { ExternalLinkIcon, Link1Icon } from '@radix-ui/react-icons'
import Link from 'next/link'

import { ExperienceItemContainer, Heading, Infos, Skills } from './styles'

export function ExperienceItem() {
  return (
    <ExperienceItemContainer>
      <div>
        <header>
          <span>mês de ano &mdash; mês de ano</span>
        </header>

        <div>
          <Heading>
            <Link href="/">
              Cargo &middot; Empresa{' '}
              <span>
                <ExternalLinkIcon />
              </span>
            </Link>

            <p>Cidade, Estado, País &middot; Tipo</p>
          </Heading>

          <Infos>
            <div>
              <p>Descrição da experiência.</p>
              <p>Descrição da experiência.</p>
              <p>Descrição da experiência.</p>
              <p>Descrição da experiência.</p>
            </div>

            <ul>
              <li>
                <Link href="/">
                  <Link1Icon /> Link
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Link1Icon /> Link
                </Link>
              </li>
            </ul>
          </Infos>

          <Skills>
            <li>
              <span>Conteúdo</span>
            </li>
            <li>
              <span>Conteúdo</span>
            </li>
            <li>
              <span>Conteúdo</span>
            </li>
            <li>
              <span>Conteúdo</span>
            </li>
          </Skills>
        </div>
      </div>
    </ExperienceItemContainer>
  )
}
