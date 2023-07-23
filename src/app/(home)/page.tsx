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
          Inspirado em <strong>Brittany Chiang</strong> e{' '}
          <strong>Adenekan Wonderful</strong>
        </p>
      </footer>
    </HomeContainer>
  )
}
