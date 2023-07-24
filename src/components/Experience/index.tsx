import { ExternalLinkIcon, Link1Icon } from '@radix-ui/react-icons'
import Link from 'next/link'

import { ExperienceContainer } from './styles'

export function Experience() {
  return (
    <ExperienceContainer>
      <header>
        <span>mês de ano &mdash; mês de ano</span>
      </header>

      <div>
        <h3>
          <Link href="/">
            Cargo &middot; Empresa{' '}
            <span>
              <ExternalLinkIcon />
            </span>
          </Link>

          <p>Cidade, Estado, País &middot; Tipo</p>
        </h3>

        <div>
          <p>Descrição da experiência.</p>
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
        </div>

        <ul>
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
        </ul>
      </div>
    </ExperienceContainer>
  )
}
