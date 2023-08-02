import '../styles/panda.css'

import { Analytics } from '@vercel/analytics/react'
import { seoConfig } from 'seo.config'

import { Background } from '@/components/Background'
import { Cursor } from '@/components/Cursor'
import { fontClassName } from '@/styles/fonts'

import { BodyContent } from './styles'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata = seoConfig

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={fontClassName}>
      <body>
        <Cursor />

        <BodyContent>{children}</BodyContent>

        <Background />
        <Analytics />
      </body>
    </html>
  )
}
