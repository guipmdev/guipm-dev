'use client'

import Link from 'next/link'

import { useActiveItem } from '@/hooks/useActiveItem'

import { NavbarContainer } from './styles'

export function Navbar() {
  const activeSection = useActiveItem(
    ['about', 'experience', 'projects'],
    'about',
  )

  return (
    <NavbarContainer>
      <Link href="#about" className={activeSection === 'about' ? 'active' : ''}>
        <span></span> SOBRE
      </Link>

      <Link
        href="#experience"
        className={activeSection === 'experience' ? 'active' : ''}
      >
        <span></span> EXPERIÊNCIA
      </Link>

      <Link
        href="#projects"
        className={activeSection === 'projects' ? 'active' : ''}
      >
        <span></span> PROJETOS
      </Link>
    </NavbarContainer>
  )
}
