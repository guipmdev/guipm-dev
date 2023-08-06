import Link from 'next/link'

import { AboutMe } from '@/components/AboutMe'
import { AsideHeader } from '@/components/AsideHeader'
import { ExperienceList } from '@/components/ExperienceList'
import { ProjectList } from '@/components/ProjectList'
import { Section } from '@/components/Section'

import { HomeContainer } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <AsideHeader />

      <main>
        <Section id="about" title="SOBRE">
          <AboutMe />
        </Section>

        <Section
          id="experience"
          title="EXPERIÊNCIA"
          link={{
            text: 'Ver currículo completo',
            url: 'https://guilhermeprevedamilek.com.br',
          }}
        >
          <ExperienceList />
        </Section>

        <Section
          id="projects"
          title="PROJETOS"
          link={{
            text: 'Ver todos os projetos',
            url: 'https://github.com/guipmdev?tab=repositories',
          }}
        >
          <ProjectList />
        </Section>
      </main>

      <footer>
        <p>
          Design e desenvolvimento feito com 💙 por <strong>guipm.dev</strong>.
        </p>

        <p>
          Inspirado em{' '}
          <Link
            href="https://brittanychiang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Brittany Chiang</strong>
          </Link>{' '}
          e{' '}
          <Link
            href="https://www.codewonders.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Adenekan Wonderful</strong>
          </Link>
        </p>
      </footer>
    </HomeContainer>
  )
}
