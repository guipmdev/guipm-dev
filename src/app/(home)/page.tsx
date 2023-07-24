'use client'

import Link from 'next/link'
import { useState } from 'react'

import { AboutMe } from '@/components/AboutMe'
import { AsideHeader } from '@/components/AsideHeader'
import { Experience } from '@/components/Experience'
import { Section } from '@/components/Section'

import { HomeContainer } from './styles'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  function changeActiveSection(newActiveSection: string) {
    setActiveSection(newActiveSection)
  }

  return (
    <HomeContainer>
      <AsideHeader activeSection={activeSection} />

      <main>
        <Section
          title="SOBRE"
          id="about"
          changeActiveSection={changeActiveSection}
        >
          <AboutMe />
        </Section>
        <Section
          title="EXPERIÊNCIA"
          id="experience"
          changeActiveSection={changeActiveSection}
        >
          <Experience />
        </Section>
        <Section
          title="PROJETOS"
          id="projects"
          changeActiveSection={changeActiveSection}
        >
          <Experience />
        </Section>
        Main
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
