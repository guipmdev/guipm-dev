import type { Metadata } from 'next'

const defineMetadata = <T extends Metadata>(metadata: T) => metadata

export const seoConfig = defineMetadata({
  title: {
    template: '%s - guipm.dev',
    default:
      'guipm.dev - Desenvolvedor Full Stack | React.js | Node.js | TypeScript | PostgreSQL | Next.js',
  },
  description:
    'Desenvolvedor Full Stack | React.js | Node.js | TypeScript | PostgreSQL | Next.js',
  manifest: '/site.webmanifest',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'mask-icon', url: '/favicon.ico' },
    { rel: 'image/x-icon', url: '/favicon.ico' },
  ],
})
