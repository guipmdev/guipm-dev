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
  function handleClickCard() {
    window.open('/', '_blank', 'noopener, noreferrer')
  }

  return (
    <CardItemContainer onClick={handleClickCard}>
      <CardItemContent>
        <header>
          {type === 'experience' ? (
            <span>mês de ano &mdash; mês de ano</span>
          ) : (
            <Image src="/" alt="" />
          )}
        </header>

        <div>
          <Heading>
            <Link href="/" target="_blank" rel="noopener noreferrer">
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
                <Link href="/" target="_blank" rel="noopener noreferrer">
                  <Link1Icon /> Link
                </Link>
              </li>
              <li>
                <Link href="/" target="_blank" rel="noopener noreferrer">
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
