import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UKB Bathrooms - Professional Bathroom Design & Installation',
    short_name: 'UKB Bathrooms',
    description: 'Transform your bathroom with UKB Bathrooms. Expert bathroom design, supply, and installation services in Southampton and Hampshire.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1b33',
    theme_color: '#0b1b33',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
