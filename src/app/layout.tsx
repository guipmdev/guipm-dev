import '../styles/global.css'

import { seoConfig } from 'seo.config'

export const metadata = seoConfig

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
