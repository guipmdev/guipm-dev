import Link from 'next/link'

import { AboutMe } from '@/components/AboutMe'
import { AsideHeader } from '@/components/AsideHeader'
import { Experiences } from '@/components/Experiences'
import { Section } from '@/components/Section'

import { HomeContainer } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <AsideHeader />

      <main>
        <Section title="SOBRE">
          <AboutMe />
        </Section>
        <Section title="EXPERIÊNCIA">
          <Experiences />
        </Section>
        Main
      </main>

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
