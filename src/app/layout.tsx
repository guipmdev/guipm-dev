import '../styles/panda.css'

import { seoConfig } from 'seo.config'

import { Background } from '@/components/Background'
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
        <BodyContent>{children}</BodyContent>

        <Background />
      </body>
    </html>
  )
}
