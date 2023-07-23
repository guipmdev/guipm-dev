import Link from 'next/link'

import { Aside } from '@/components/Aside'

import { HomeContainer } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <Aside />

      <main>Main</main>

      <footer>
        <p>
          Design e desenvolvimento feito com 💙 por{' '}
          <Link href="">
            <strong>guipm.dev</strong>
          </Link>
          .
        </p>
        <p>
          Inspirado em{' '}
          <Link href="">
            <strong>Brittany Chiang</strong>
          </Link>{' '}
          e{' '}
          <Link href="">
            <strong>Adenekan Wonderful</strong>
          </Link>
        </p>
      </footer>
    </HomeContainer>
  )
}
