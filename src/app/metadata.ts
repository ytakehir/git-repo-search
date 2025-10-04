import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'grs',
    template: '%s | grs'
  },
  authors: [{ name: 'grs' }],
  creator: 'grs',
  publisher: 'grs',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}
