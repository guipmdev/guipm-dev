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
          Design e desenvolvimento feito com 💙 por <strong>guipm.dev</strong>.
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
