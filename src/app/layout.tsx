import { cn } from '@/lib/tailwind'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Viewport } from 'next'
import { Zen_Kaku_Gothic_New } from 'next/font/google'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

const zen = Zen_Kaku_Gothic_New({
  weight: '500',
  subsets: ['latin']
})

export const viewport: Viewport = {
  viewportFit: 'cover',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja' data-theme='lofi'>
      <body
        className={cn(
          'mx-auto min-h-screen w-[95%] select-text bg-base-100 antialiased selection:bg-primary selection:text-primary-content',
          zen.className
        )}
      >
        <div className='flex flex-col items-center'>
          <Header />
          <div className='my-16 flex min-h-screen w-full justify-center'>{children}</div>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
