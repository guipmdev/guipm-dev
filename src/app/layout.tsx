import '../styles/panda.css'

import { seoConfig } from 'seo.config'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata = seoConfig

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
