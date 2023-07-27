import { ExternalLinkIcon, Link1Icon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

import {
  CardItemContainer,
  CardItemContent,
  Heading,
  Infos,
  Tags,
} from './styles'

interface CardItemProps {
  type: 'experience' | 'project'
}

export function CardItem({ type }: CardItemProps) {
  return (
    <CardItemContainer>
      <CardItemContent {...(type === 'project' && { type })}>
        <header>
          {type === 'experience' ? (
            <span>mês de ano &mdash; mês de ano</span>
          ) : (
            <Image src="" alt="" width={200} height={112.5} />
          )}
        </header>

        <div>
          <Heading>
            <Link
              href="https://project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursorHover"
            >
              Cargo &middot; Empresa{' '}
              <span className="icon">
                <ExternalLinkIcon />
              </span>
              <span className="cursorHover"></span>
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
                <Link
                  href="https://link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursorHover"
                >
                  <Link1Icon /> Link
                </Link>
              </li>
              <li>
                <Link
                  href="https://link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursorHover"
                >
                  <Link1Icon /> Link
                </Link>
              </li>
            </ul>
          </Infos>

          <Tags>
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
          </Tags>
        </div>
      </CardItemContent>
    </CardItemContainer>
  )
}
